# Update script.js with contact form pills logic
with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

contact_js = """// contact form interactive pills and submission
const cForm=$('#contact-form');
if(cForm){
  const cpills=$$('#service-pills .fm-pill');
  const serviceInput=$('#selected-services');
  cpills.forEach(p=>{
    p.onclick=e=>{
      e.preventDefault();
      p.classList.toggle('active');
      const selected=[...$$('#service-pills .fm-pill.active')].map(x=>x.dataset.val);
      if(serviceInput)serviceInput.value=selected.join(', ');
    };
  });
  cForm.onsubmit=e=>{
    e.preventDefault();
    const succ=$('#fm-success');
    const reqId=$('#req-id');
    if(reqId)reqId.textContent=Math.floor(1000+Math.random()*9000);
    if(succ)succ.classList.add('show');
  };
  const resetBtn=$('#fm-reset-btn');
  if(resetBtn){
    resetBtn.onclick=()=>{
      cForm.reset();
      cpills.forEach((p,idx)=>p.classList.toggle('active',idx===0));
      if(serviceInput)serviceInput.value='SEO & Organic';
      const succ=$('#fm-success');
      if(succ)succ.classList.remove('show');
    };
  }
}
"""

if 'contact-form' not in js:
    # insert before // testimonials
    target = '// testimonials'
    if target in js:
        js = js.replace(target, contact_js + target, 1)
        with open('script.js', 'w', encoding='utf-8') as f:
            f.write(js)
        print("Injected contact form logic into script.js")
    else:
        print("Could not find target in script.js")
else:
    print("contact-form logic already present in script.js")

