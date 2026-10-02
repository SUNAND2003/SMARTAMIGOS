(()=>{
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
// sticky nav + parallax + timeline progress
const hd=$('#hd'),blobs=$$('.blob'),st=$('#steps');
addEventListener('scroll',()=>{const y=scrollY;hd.classList.toggle('s',y>40);
 if(!rm)blobs.forEach(b=>b.style.transform=`translateY(${y*b.dataset.p}px)`);
 if(st){const r=st.getBoundingClientRect(),p=Math.min(1,Math.max(0,(innerHeight*.8-r.top)/(r.height+innerHeight*.3)));st.style.setProperty('--w',(p*100)+'%')}},{passive:true});
// mobile menu
const bg=$('#bg'),mob=$('#mob');
const tog=o=>{bg.classList.toggle('o',o);mob.classList.toggle('o',o);bg.setAttribute('aria-expanded',o);document.documentElement.classList.toggle('lock',o);document.body.classList.toggle('lock',o)};
bg.onclick=()=>tog(!mob.classList.contains('o'));$$('a',mob).forEach(a=>a.onclick=()=>tog(false));
addEventListener('keydown',e=>{if(e.key==='Escape'&&mob.classList.contains('o')){tog(false);bg.focus()}});
// mouse glow
const gl=$('#glow');if(matchMedia('(hover:hover)').matches&&!rm)addEventListener('mousemove',e=>{gl.style.left=e.clientX+'px';gl.style.top=e.clientY+'px'});else gl.remove();
// magnetic buttons
if(!rm)$$('.mag').forEach(b=>{b.onmousemove=e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.3}px)`};b.onmouseleave=()=>b.style.transform=''});
// counters
const count=el=>{const n=+el.dataset.n,d=+(el.dataset.d||0),s=el.dataset.s||'',c=el.dataset.c;let t0;const f=t=>{t0??=t;const p=Math.min(1,(t-t0)/1800),v=n*(1-Math.pow(1-p,3));el.textContent=(c?Math.round(v).toLocaleString():v.toFixed(d))+s;p<1&&requestAnimationFrame(f)};rm?el.textContent=(c?n.toLocaleString():n.toFixed(d))+s:requestAnimationFrame(f)};
// reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;t.classList.add('in');$$('[data-n]',t).forEach(count);if(t.matches('[data-n]'))count(t);if(t.id==='bars')$$('i',t).forEach((i,k)=>setTimeout(()=>i.style.height=i.dataset.h+'%',k*80));io.unobserve(t)}),{threshold:.15,rootMargin:'0px 0px -60px 0px'});
$$('.rv,[data-n],#bars').forEach((el,i)=>{if(el.matches('.card,.pk>div,.bl>article'))el.style.transitionDelay=(i%3)*.08+'s';io.observe(el)});
// why accordion
const wb=$$('#why button');wb.forEach(b=>{const on=()=>{wb.forEach(x=>x.classList.remove('a'));b.classList.add('a')};b.onmouseenter=on;b.onclick=on});
// portfolio filter
const flt=$('#flt');
if(flt)flt.onclick=e=>{const c=e.target.dataset.c;if(!c)return;$$('#flt button').forEach(b=>{const on=b===e.target;b.classList.toggle('a',on);b.setAttribute('aria-pressed',on)});$('#pf').classList.toggle('all',c==='all');
 $$('#pf .pi').forEach(p=>{const show=c==='all'||p.dataset.c===c;if(show){p.classList.remove('h');requestAnimationFrame(()=>p.classList.remove('f0'))}else{p.classList.add('f0');setTimeout(()=>p.classList.contains('f0')&&p.classList.add('h'),350)}})};
// blog filter
const bflt=$('#bflt');
if(bflt)bflt.onclick=e=>{const c=e.target.dataset.c;if(!c)return;$$('#bflt button').forEach(b=>{const on=b===e.target;b.classList.toggle('a',on);b.setAttribute('aria-pressed',on)});
 let n=0;$$('#blg article').forEach(p=>{const show=c==='all'||p.dataset.c===c;p.classList.toggle('h',!show);if(show)n++});const em=$('#empty');if(em)em.hidden=n>0};
// testimonials
const R=[['Client Name','Founder, Company A','Placeholder testimonial — replace with a real client quote about results and collaboration.'],['Client Name','Marketing Head, Company B','Placeholder testimonial — replace with a real client quote about results and collaboration.'],['Client Name','CEO, Company C','Placeholder testimonial — replace with a real client quote about results and collaboration.']];
let ri=0;const sl=$('#sl'),dots=$$('#dots button');
const show=i=>{ri=i;sl.classList.add('x');setTimeout(()=>{$('#rq').textContent='“'+R[i][2]+'”';$('#rn').textContent=R[i][0];$('#rr').textContent=R[i][1];dots.forEach((d,k)=>d.classList.toggle('a',k===i));sl.classList.remove('x')},300)};
let tm=0;
if(sl){dots.forEach((d,k)=>d.onclick=()=>{show(k);clearInterval(tm)});show(0);
// pause the auto-rotating testimonial while hovered/focused (WCAG 2.2.2)
const tsBox=$('#testimonials');let hold=false;
if(tsBox){['mouseenter','focusin'].forEach(ev=>tsBox.addEventListener(ev,()=>hold=true));['mouseleave','focusout'].forEach(ev=>tsBox.addEventListener(ev,()=>hold=false))}
tm=rm?0:setInterval(()=>{if(hold||document.hidden)return;show((ri+1)%3)},6000)}

// ===== extra animation layer =====
const pg=document.createElement('div');pg.id='prog';pg.setAttribute('aria-hidden','true');document.body.prepend(pg);
addEventListener('scroll',()=>pg.style.transform=`scaleX(${scrollY/(document.documentElement.scrollHeight-innerHeight)})`,{passive:true});
// split h2 into masked words
$$('h2').forEach(h=>{let i=0;const wrap=n=>{[...n.childNodes].forEach(c=>{if(c.nodeType===3){const f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(t=>{if(!t.trim()){f.append(t);return}const w=document.createElement('span');w.className='w';w.innerHTML='<span style="--i:'+(i++)+'">'+t+'</span>';f.append(w)});c.replaceWith(f)}else if(c.nodeName==='BR'){}else if(c.classList&&c.classList.contains('g')){const inner=c.textContent.split(/(\s+)/);c.textContent='';inner.forEach(t=>{if(!t.trim()){c.append(t);return}const w=document.createElement('span');w.className='w';w.innerHTML='<span style="--i:'+(i++)+'">'+t+'</span>';c.append(w)})}})};wrap(h);const p=h.closest('.rv');if(!p)io.observe(h)});
// spotlight + 3D tilt on cards
$$('.card').forEach(c=>{const g=document.createElement('i');g.className='gl';c.append(g)});
if(!rm&&matchMedia('(hover:hover)').matches){$$('.card,.panel').forEach(c=>{c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;c.style.setProperty('--mx',x+'px');c.style.setProperty('--my',y+'px');c.style.transform=`perspective(900px) rotateX(${(.5-y/r.height)*8}deg) rotateY(${(x/r.width-.5)*8}deg) translateY(-8px)`});c.addEventListener('mouseleave',()=>c.style.transform='')});
 // hero floating cards follow the mouse (parallax)
 const fcs=$$('.fc');addEventListener('mousemove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;fcs.forEach((f,i)=>f.style.translate=`${x*(i%2?-30:30)}px ${y*(i<2?-24:24)}px`)})}
// hero particle network
const home=$('#home'),cv=document.createElement('canvas');cv.id='cv';cv.setAttribute('aria-hidden','true');if(home)home.prepend(cv);
if(!rm&&home){const x=cv.getContext('2d');let W,H,P=[];const N=innerWidth<700?28:60;
 const rs=()=>{W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight};rs();addEventListener('resize',rs);
 for(let i=0;i<N;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35});
 let vis=true;new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(cv);
 (function d(){requestAnimationFrame(d);if(!vis)return;x.clearRect(0,0,W,H);P.forEach((p,i)=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;x.fillStyle='rgba(120,150,255,.7)';x.beginPath();x.arc(p.x,p.y,1.6,0,7);x.fill();for(let j=i+1;j<N;j++){const q=P[j],dx=p.x-q.x,dy=p.y-q.y,dd=dx*dx+dy*dy;if(dd<14000){x.strokeStyle=`rgba(110,130,255,${.18*(1-dd/14000)})`;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}})})()}
// stagger grid children
$$('.cards,.pf,.bl,.pk,.stats').forEach(g=>[...g.children].forEach((c,i)=>c.style.transitionDelay=(i%3)*.1+'s'));
// image reveal for portfolio/social tiles
$$('.pi').forEach(p=>io.observe(p));
// random photos for the placeholder image areas (gradient layer stays underneath as fallback)
const seed=()=>Math.random().toString(36).slice(2,8);
const photo=(el,w,h)=>{const g=getComputedStyle(el).backgroundImage;el.style.backgroundImage='url(https://picsum.photos/seed/'+seed()+'/'+w+'/'+h+')'+(g==='none'?'':','+g);el.style.backgroundSize='cover';el.style.backgroundPosition='center';el.style.backgroundRepeat='no-repeat'};
$$('#pf .pi .im').forEach(el=>photo(el,900,500));
$$('.bl .im i,.feat .im i').forEach(el=>photo(el,800,600));
$$('#ig .pi').forEach(el=>photo(el,600,600));
})();
(()=>{
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches,fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
const H=document.documentElement,B=document.body,clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
// preloader
const pre=$('#pre'),pc=$('#pc'),pbar=$('#pbar');
const done=()=>{if(B.classList.contains('ld'))return;B.classList.add('ld');if(pre){pre.classList.add('out');setTimeout(()=>pre.remove(),1200)};
 if(location.hash){const t=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(t)setTimeout(()=>scrollTo({top:t.getBoundingClientRect().top+scrollY-70,behavior:rm?'auto':'smooth'}),1600)}};
if(rm||!pre)done();else{let t0;const f=t=>{t0??=t;const p=Math.min(1,(t-t0)/1400);pc.textContent=Math.round(p*100);pbar.style.width=p*100+'%';p<1?requestAnimationFrame(f):setTimeout(done,150)};requestAnimationFrame(f);setTimeout(done,4000)}
// Lenis smooth scroll (CDN, optional)
if(window.Lenis&&!rm){const l=new Lenis({lerp:.09});H.classList.add('lenis');const r=t=>{l.raf(t);requestAnimationFrame(r)};requestAnimationFrame(r);
 $$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id.length<2)return;const t=$(id);if(t){e.preventDefault();l.scrollTo(t,{offset:-70,duration:1.4})}}))}
// nav scroll-spy (only in-page anchors; sections without a nav link keep the last highlight)
const links=$$('.links a[href^="#"]'),so=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const m=links.find(a=>a.getAttribute('href')==='#'+e.target.id);if(!m)return;links.forEach(a=>a.classList.toggle('on',a===m))}),{rootMargin:'-45% 0px -50% 0px'});
$$('main section[id]').forEach(s=>so.observe(s));
// service list stagger index
$$('.card').forEach(c=>$$('li',c).forEach((l,k)=>l.style.setProperty('--k',k)));
// submit success state
document.addEventListener('submit',e=>{const b=e.target.querySelector('.btn');b&&b.classList.add('ok')},true);
if(rm)return;
// shapes, orbit, scroll cue, aurora
const home=$('#home'),fin=$('.fin'),shapes=[];
const mk=(host,list)=>list.forEach(([c,s,x,y,p])=>{const e=document.createElement('i');e.className='shp '+c;e.style.cssText=`width:${s}px;height:${s}px;left:${x}%;top:${y}%`;host.append(e);shapes.push([e,host,p])});
if(home)mk(home,[['ring',90,10,68,.12],['sq',46,86,60,-.1],['plus',34,50,14,.2],['ring',44,78,12,.18],['sq',30,6,20,-.15]]);
if(fin)mk(fin,[['ring',120,8,20,.1],['sq',60,88,30,-.12],['plus',40,60,70,.15]]);
let orb=null,cue=null;
if(home){orb=document.createElement('div');orb.className='orb';home.prepend(orb);
 cue=document.createElement('div');cue.className='cue';home.append(cue)}
if(fin)[['left:-10%;top:-30%;width:420px;height:420px;background:rgba(47,107,255,.35)'],['right:-8%;bottom:-30%;width:380px;height:380px;background:rgba(139,92,246,.35);animation-delay:-6s']].forEach(([s])=>{const b=document.createElement('div');b.className='blob';b.style.cssText=s;fin.prepend(b)});
// custom cursor
if(fine){H.classList.add('cur');const d=document.createElement('div'),r=document.createElement('div');d.className='cd';r.className='cr';B.append(d,r);let mx=0,my=0,rx=0,ry=0;
 addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;d.classList.add('on');r.classList.add('on');d.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`});
 (function l(){rx+=(mx-rx)*.16;ry+=(my-ry)*.16;r.style.transform=`translate(${rx}px,${ry}px) translate(-50%,-50%)`;requestAnimationFrame(l)})();
 document.addEventListener('mouseover',e=>{const v=e.target.closest('.pi[data-c]'),t=e.target.closest('a,button');r.classList.toggle('h',!!t&&!v);r.classList.toggle('v',!!v);r.textContent=v?'View':''});
 $$('.pi[data-c]').forEach(p=>p.addEventListener('mousemove',e=>{const b=p.getBoundingClientRect();p.style.setProperty('--tx',((e.clientX-b.left)/b.width-.5)*-24+'px');p.style.setProperty('--ty',((e.clientY-b.top)/b.height-.5)*-24+'px')}))}
// why autoplay
const wb=$$('#why button'),why=$('#why');let wp=false;if(wb.length){['mouseenter','focusin'].forEach(ev=>why.addEventListener(ev,()=>wp=true));['mouseleave','focusout'].forEach(ev=>why.addEventListener(ev,()=>wp=false));
 setInterval(()=>{if(wp||document.hidden)return;const i=wb.findIndex(b=>b.classList.contains('a'));wb.forEach((b,k)=>b.classList.toggle('a',k===(i+1)%wb.length))},4500)}
// live dashboard ticking
const dash=$$('b[data-c]');const pn=dash.length&&dash[0].closest('.panel');if(pn){const sm=$('small',pn);if(sm){const dt=document.createElement('i');dt.className='live';sm.prepend(dt)}
 new IntersectionObserver((e,o)=>{if(!e[0].isIntersecting)return;o.disconnect();setTimeout(()=>setInterval(()=>dash.forEach((el,i)=>{const cur=+el.textContent.replace(/,/g,'');if(!cur)return;el.textContent=(cur+Math.floor(Math.random()*(i?3:14)+1)).toLocaleString();el.classList.add('tk');setTimeout(()=>el.classList.remove('tk'),300)}),2200),2400)},{threshold:.3}).observe(pn)}
// scroll-linked loop: marquee velocity, big text, steps, hero fade, shape parallax
const tr=$('.tr'),an=tr&&tr.getAnimations()[0],big=$('#big'),bw=big&&big.parentElement,steps=$$('#steps>div'),hw=$('#home .wrap');let last=scrollY,rate=1;
(function t(){requestAnimationFrame(t);const y=scrollY,v=Math.abs(y-last);last=y;rate+=((1+Math.min(v*.25,8))-rate)*.1;if(an)an.playbackRate=rate;
 if(big){const r=bw.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0){const p=clamp((innerHeight-r.top)/(innerHeight+r.height),0,1);big.style.transform=`translateX(${-p*Math.max(0,big.scrollWidth-innerWidth)}px)`}}
 steps.forEach(s=>s.classList.toggle('on',s.getBoundingClientRect().top<innerHeight*.78));
 if(y<innerHeight*1.2){if(hw){hw.style.transform=`translateY(${y*.22}px)`;hw.style.opacity=clamp(1-y/(innerHeight*.75),0,1)}if(cue)cue.style.opacity=clamp(1-y/200,0,1)}
 shapes.forEach(([e,h,p])=>e.style.translate=`0 ${(y-h.offsetTop)*p}px`)})();
})();