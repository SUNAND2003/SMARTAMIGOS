# Update contact.html and style.css
import os

css_addition = """
/* ====================================================
   CONTACT PAGE MODERNIZATION & HIGH-AESTHETIC STYLES
   ==================================================== */
.c-badge{
  display:inline-flex;
  align-items:center;
  gap:10px;
  padding:8px 20px;
  border-radius:99px;
  background:rgba(47,107,255,.12);
  border:1px solid rgba(47,107,255,.32);
  font:600 .82rem Outfit,sans-serif;
  color:#fff;
  letter-spacing:.02em;
  margin-bottom:22px;
  box-shadow:0 0 24px rgba(47,107,255,.18);
}
.c-pulse{
  width:8px;
  height:8px;
  border-radius:50%;
  background:#10b981;
  box-shadow:0 0 10px #10b981;
  position:relative;
  flex-shrink:0;
}
.c-pulse:after{
  content:"";
  position:absolute;
  inset:-4px;
  border-radius:50%;
  border:1.5px solid #10b981;
  animation:cPulse 2s cubic-bezier(0,0,.2,1) infinite;
}
@keyframes cPulse{
  0%{transform:scale(.8);opacity:1}
  100%{transform:scale(2.2);opacity:0}
}

.c-hero-stats{
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  gap:clamp(16px,3vw,36px);
  margin-top:36px;
  padding:16px 28px;
  background:rgba(255,255,255,.03);
  border:1px solid rgba(255,255,255,.08);
  border-radius:99px;
  max-width:max-content;
  margin-inline:auto;
}
.c-hero-stats>div:not(.sep){text-align:center}
.c-hero-stats b{display:block;font:700 1.15rem Outfit;color:#fff}
.c-hero-stats span{display:block;font-size:.74rem;color:rgba(255,255,255,.55);text-transform:uppercase;letter-spacing:.08em;margin-top:2px}
.c-hero-stats .sep{width:1px;height:24px;background:rgba(255,255,255,.1)}

/* Contact Layout Grid */
.ct{display:grid;grid-template-columns:1.05fr 1.25fr;gap:clamp(32px,4vw,56px);align-items:start}
.ct-desc{color:rgba(255,255,255,.68);font-size:1.02rem;line-height:1.65;margin-top:16px;max-width:520px}

/* Interactive Direct Channel Cards */
.ci-cards{display:flex;flex-direction:column;gap:14px;margin-top:28px}
.ci-card{
  display:flex;
  align-items:center;
  gap:16px;
  padding:16px 20px;
  border-radius:18px;
  background:rgba(255,255,255,.035);
  border:1px solid rgba(255,255,255,.08);
  text-decoration:none;
  color:#fff;
  transition:all .3s cubic-bezier(.16,1,.3,1);
  position:relative;
  overflow:hidden;
}
.ci-card:hover{
  background:rgba(47,107,255,.08);
  border-color:rgba(47,107,255,.45);
  transform:translateX(5px);
  box-shadow:0 8px 30px rgba(0,0,0,.4), 0 0 25px rgba(47,107,255,.15);
}
.ci-ic{
  width:46px;
  height:46px;
  border-radius:12px;
  background:linear-gradient(135deg,rgba(47,107,255,.2),rgba(139,92,246,.2));
  border:1px solid rgba(47,107,255,.3);
  display:grid;
  place-items:center;
  color:var(--blue);
  flex-shrink:0;
  transition:transform .3s;
}
.ci-card:hover .ci-ic{transform:scale(1.08) rotate(4deg);color:#fff;background:linear-gradient(135deg,var(--blue),var(--violet))}
.ci-wa .ci-ic{background:rgba(37,211,102,.12);border-color:rgba(37,211,102,.3);color:#25d366}
.ci-wa:hover .ci-ic{background:#25d366;color:#fff}
.ci-body{flex:1;min-width:0}
.ci-body small{display:block;font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.45)}
.ci-body b{display:block;font:700 1.05rem Outfit;color:#fff;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ci-body span{display:block;font-size:.78rem;color:rgba(255,255,255,.55);margin-top:2px}
.ci-wa-row{display:flex;align-items:center;gap:10px}
.ci-live{
  display:inline-flex;
  align-items:center;
  gap:5px;
  font-size:.68rem;
  color:#10b981;
  font-weight:700;
  text-transform:uppercase;
  letter-spacing:.06em;
  background:rgba(16,185,129,.12);
  padding:2px 8px;
  border-radius:99px;
  border:1px solid rgba(16,185,129,.25);
}
.ci-arr{font-size:1.2rem;color:rgba(255,255,255,.3);transition:transform .3s,color .3s;flex-shrink:0}
.ci-card:hover .ci-arr{transform:translateX(4px);color:var(--blue)}
.ci-call-btn{
  padding:7px 14px;
  border-radius:99px;
  background:linear-gradient(135deg,var(--blue),var(--violet));
  color:#fff;
  font:700 .78rem Outfit;
  text-decoration:none;
  white-space:nowrap;
  box-shadow:0 3px 12px rgba(47,107,255,.3);
  transition:all .2s;
}
.ci-call-btn:hover{transform:translateY(-1px);box-shadow:0 6px 18px rgba(47,107,255,.5)}

/* Enhanced Office Metrics */
.office{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:12px;
  margin-top:24px;
}
.office div{
  background:rgba(255,255,255,.03);
  border:1px solid rgba(255,255,255,.07);
  border-radius:14px;
  padding:18px 20px;
  transition:transform .3s,border-color .3s;
}
.office div:hover{
  transform:translateY(-2px);
  border-color:rgba(47,107,255,.3);
  background:rgba(255,255,255,.05);
}

/* Cybernetic Hub Map Card */
.c-hub-card{
  margin-top:24px;
  border-radius:20px;
  padding:20px 22px;
  background:rgba(10,14,35,.6);
  border:1px solid rgba(255,255,255,.08);
  position:relative;
  overflow:hidden;
}
.c-hub-card:after{
  content:"";
  position:absolute;
  inset:0;
  background:radial-gradient(circle at 80% 20%,rgba(47,107,255,.12),transparent 60%);
  pointer-events:none;
}
.c-hub-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:14px;
}
.c-hub-title{
  display:flex;
  align-items:center;
  gap:8px;
  font:700 .86rem Outfit;
  color:#fff;
}
.c-hub-pulse{
  width:7px;
  height:7px;
  border-radius:50%;
  background:var(--blue);
  box-shadow:0 0 8px var(--blue);
}
.c-hub-latency{
  font-size:.72rem;
  color:rgba(255,255,255,.5);
  font-family:monospace;
  background:rgba(255,255,255,.05);
  padding:3px 8px;
  border-radius:6px;
  border:1px solid rgba(255,255,255,.08);
}
.c-hub-radar{
  position:relative;
  height:130px;
  background:radial-gradient(ellipse at center,rgba(47,107,255,.08) 0%,rgba(5,6,15,.6) 80%);
  border-radius:12px;
  border:1px solid rgba(255,255,255,.05);
  overflow:hidden;
}
.c-hub-svg{
  width:100%;
  height:100%;
  position:absolute;
  inset:0;
}
.c-arc{
  animation:dashMove 20s linear infinite;
}
@keyframes dashMove{
  to{stroke-dashoffset:-200}
}
.c-pin{
  position:absolute;
  transform:translate(-50%,-50%);
  display:flex;
  align-items:center;
  cursor:pointer;
}
.c-pin-dot{
  width:8px;
  height:8px;
  border-radius:50%;
  background:#fff;
  box-shadow:0 0 10px var(--blue);
  position:relative;
  z-index:2;
}
.c-pin-ping{
  position:absolute;
  left:-4px;
  top:-4px;
  width:16px;
  height:16px;
  border-radius:50%;
  background:rgba(47,107,255,.4);
  animation:pinPulse 2.4s ease-out infinite;
}
@keyframes pinPulse{
  0%{transform:scale(.5);opacity:1}
  100%{transform:scale(2.2);opacity:0}
}
.c-pin-name{
  font:700 .68rem Outfit;
  color:#fff;
  margin-left:7px;
  white-space:nowrap;
  background:rgba(5,6,15,.8);
  padding:2px 7px;
  border-radius:99px;
  border:1px solid rgba(255,255,255,.1);
  letter-spacing:.03em;
  opacity:.85;
}
.c-pin:hover .c-pin-name{opacity:1;border-color:var(--blue);color:var(--blue)}
.c-hub-footer{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:12px;
  font-size:.74rem;
  color:rgba(255,255,255,.5);
}
.c-hub-status{
  color:#10b981;
  font-weight:600;
}

/* ====================================================
   HIGH-CONVERTING INQUIRY FORM (Right Column)
   ==================================================== */
form.fm{
  position:relative;
  display:flex;
  flex-direction:column;
  gap:18px;
  padding:clamp(28px,4vw,44px);
  border-radius:28px;
  background:rgba(10,14,35,.72);
  border:1px solid rgba(255,255,255,.1);
  box-shadow:0 24px 60px -12px rgba(0,0,0,.7), 0 0 40px -10px rgba(47,107,255,.18);
  overflow:hidden;
}
.fm-head{margin-bottom:4px}
.fm-kicker{
  display:inline-block;
  font-size:.72rem;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:var(--blue);
  font-weight:700;
  margin-bottom:6px;
}
.fm-head h3{
  font:800 clamp(1.4rem,2.2vw,1.9rem) Outfit;
  color:#fff;
  margin:0 0 6px;
}
.fm-head p{
  color:rgba(255,255,255,.6);
  font-size:.88rem;
  line-height:1.5;
  margin:0;
}

/* Service Pill Selector */
.fm-services-wrap{margin-bottom:4px}
.fm-field-title{
  display:block;
  font-size:.76rem;
  letter-spacing:.06em;
  text-transform:uppercase;
  color:rgba(255,255,255,.65);
  font-weight:700;
  margin-bottom:10px;
}
.fm-pills{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}
.fm-pill{
  background:rgba(255,255,255,.05);
  border:1px solid rgba(255,255,255,.1);
  color:rgba(255,255,255,.8);
  padding:7px 14px;
  border-radius:99px;
  font:600 .8rem Outfit;
  cursor:pointer;
  transition:all .25s ease;
  user-select:none;
}
.fm-pill:hover{
  background:rgba(255,255,255,.1);
  color:#fff;
  border-color:rgba(255,255,255,.2);
}
.fm-pill.active{
  background:linear-gradient(135deg,rgba(47,107,255,.3),rgba(139,92,246,.3));
  border-color:var(--blue);
  color:#fff;
  box-shadow:0 0 16px rgba(47,107,255,.3);
}

/* Inputs & Form Groups */
.fm-row{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:14px;
}
.fm-group{
  display:flex;
  flex-direction:column;
  gap:6px;
}
.fm-group label{
  font-size:.76rem;
  font-weight:700;
  letter-spacing:.04em;
  color:rgba(255,255,255,.7);
}
.fm-group label .req{color:var(--blue)}
.fm input,.fm select,.fm textarea{
  width:100%;
  padding:14px 18px;
  border-radius:14px;
  border:1px solid rgba(255,255,255,.1);
  background:rgba(255,255,255,.04);
  color:#fff;
  font:inherit;
  font-size:.92rem;
  outline:0;
  transition:all .25s ease;
  box-sizing:border-box;
}
.fm input::placeholder,.fm textarea::placeholder{color:rgba(255,255,255,.32)}
.fm select{cursor:pointer;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23ffffff' viewBox='0 0 16 16'%3E%3Cpath d='M8 11.5l-5-5h10l-5 5z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:calc(100% - 16px) center}
.fm select option{background:#0e122b;color:#fff}
.fm input:focus,.fm select:focus,.fm textarea:focus{
  border-color:var(--blue);
  background:rgba(255,255,255,.07);
  box-shadow:0 0 0 4px rgba(47,107,255,.18);
}
.fm textarea{resize:vertical;min-height:100px}

/* Submit Action Button */
.c-submit-btn{
  margin-top:6px;
  padding:16px 28px;
  font:700 1.05rem Outfit;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  cursor:pointer;
  border:none;
  box-shadow:0 8px 30px rgba(47,107,255,.4);
  transition:all .3s cubic-bezier(.16,1,.3,1);
}
.c-submit-btn:hover{
  transform:translateY(-2px);
  box-shadow:0 12px 36px rgba(47,107,255,.55);
}
.c-submit-btn .btn-arr{
  font-size:1.2rem;
  transition:transform .3s ease;
}
.c-submit-btn:hover .btn-arr{
  transform:translateX(5px);
}

/* Form Guarantees */
.fm-guarantees{
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
  gap:10px;
  padding-top:12px;
  border-top:1px solid rgba(255,255,255,.07);
  font-size:.76rem;
  color:rgba(255,255,255,.55);
}
.fm-guarantees span{
  display:inline-flex;
  align-items:center;
  gap:6px;
}
.fm-guarantees svg{color:var(--blue);flex-shrink:0}

/* Submission Success State */
.fm-success{
  position:absolute;
  inset:0;
  background:#090d24;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  padding:40px 30px;
  opacity:0;
  pointer-events:none;
  transform:scale(.96);
  transition:all .4s cubic-bezier(.16,1,.3,1);
  z-index:10;
}
.fm-success.show{
  opacity:1;
  pointer-events:all;
  transform:scale(1);
}
.fm-success-ic{
  width:64px;
  height:64px;
  border-radius:50%;
  background:linear-gradient(135deg,var(--blue),var(--violet));
  display:grid;
  place-items:center;
  font-size:2rem;
  color:#fff;
  margin-bottom:20px;
  box-shadow:0 0 30px rgba(47,107,255,.5);
}
.fm-success h3{
  font:800 1.9rem Outfit;
  color:#fff;
  margin:0 0 10px;
}
.fm-success p{
  color:rgba(255,255,255,.7);
  max-width:440px;
  line-height:1.6;
  font-size:.95rem;
  margin:0 0 20px;
}
.fm-success-meta{
  display:flex;
  flex-direction:column;
  gap:6px;
  font-size:.82rem;
  color:rgba(255,255,255,.5);
}
.fm-success-meta b{color:var(--blue)}

/* ====================================================
   CLIENT SOCIAL PROOF SECTION ON CONTACT PAGE
   ==================================================== */
.c-proof-section{
  padding:20px 0 60px;
}
.c-proof-card{
  border-radius:24px;
  padding:clamp(28px,4vw,44px);
  background:linear-gradient(135deg,rgba(47,107,255,.09) 0%,rgba(139,92,246,.06) 50%,rgba(5,6,15,.6) 100%);
  border:1px solid rgba(255,255,255,.1);
  display:grid;
  grid-template-columns:1fr;
  gap:22px;
  position:relative;
  overflow:hidden;
}
.c-proof-card:after{
  content:"“";
  position:absolute;
  right:30px;
  bottom:-30px;
  font-size:160px;
  font-family:serif;
  color:rgba(255,255,255,.03);
  line-height:1;
  pointer-events:none;
}
.c-proof-stars{
  color:#fbbf24;
  letter-spacing:4px;
  font-size:1.1rem;
}
.c-proof-quote{
  font:500 clamp(1.05rem,1.7vw,1.25rem)/1.6 Outfit;
  color:rgba(255,255,255,.9);
  max-width:920px;
  margin:0;
}
.c-proof-author{
  display:flex;
  align-items:center;
  gap:16px;
  margin-top:8px;
  flex-wrap:wrap;
}
.c-proof-avatar{
  width:52px;
  height:52px;
  border-radius:50%;
  object-fit:cover;
  border:2px solid var(--blue);
  box-shadow:0 0 16px rgba(47,107,255,.4);
}
.c-proof-author b{display:block;color:#fff;font:700 1rem Outfit}
.c-proof-author span{display:block;font-size:.82rem;color:rgba(255,255,255,.55)}
.c-proof-badge{
  margin-left:auto;
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  background:rgba(47,107,255,.12);
  border:1px solid rgba(47,107,255,.3);
  padding:8px 18px;
  border-radius:12px;
}
.c-proof-badge b{font:800 1.25rem Outfit;color:var(--blue)}
.c-proof-badge small{font-size:.7rem;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.6)}

/* Steps Four Glass Card Polish */
.steps.four>div{
  background:rgba(255,255,255,.025);
  border:1px solid rgba(255,255,255,.07);
  border-radius:18px;
  padding:28px 24px;
  transition:all .35s cubic-bezier(.16,1,.3,1);
}
.steps.four>div:hover{
  background:rgba(47,107,255,.06);
  border-color:rgba(47,107,255,.35);
  transform:translateY(-6px);
  box-shadow:0 14px 35px -8px rgba(0,0,0,.5), 0 0 25px -5px rgba(47,107,255,.2);
}

/* Responsive adjustments for Contact */
@media(max-width:960px){
  .ct{grid-template-columns:1fr;gap:40px}
  .c-proof-badge{margin-left:0;align-items:flex-start}
}
@media(max-width:600px){
  .fm-row{grid-template-columns:1fr}
  .c-hero-stats{flex-direction:column;border-radius:24px;gap:12px;padding:20px}
  .c-hero-stats .sep{display:none}
  .fm-guarantees{flex-direction:column;align-items:flex-start;gap:8px}
  .ci-card{padding:14px 16px}
}
"""

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

if '.c-badge' not in css:
    with open('style.css', 'a', encoding='utf-8') as f:
        f.write("\n" + css_addition)
    print("Added contact CSS to style.css")
else:
    print("Contact CSS already present in style.css")

