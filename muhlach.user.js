// ==UserScript==
// @name ASHDRES-FACE OF THE YEAR (MAC ONLY)
// @match https://vote-kappa-seven.vercel.app/*
// @match https://vote-am.vercel.app/*
// @grant none
// ==/UserScript==
(()=>{const w=window,d=document,wt=m=>new Promise(r=>setTimeout(r,m)),rd=(a=120,b=320)=>Math.floor(Math.random()*(b-a+1))+a,q=async(s,t=5e3)=>{for(let i=Date.now();;){let n=d.querySelectorAll(s);if(n.length)return n;if(Date.now()-i>t)return null;await wt(100)}},imgs=["https://backend.choicely.com/images/Y2hvaWNlbHktZXUvaW1hZ2VzL2E0SVo5VFAxM3V1eHFoQVdJYTlX/serve/","https://backend.choicely.com/images/Y2hvaWNlbHktZXUvaW1hZ2VzL01XSk9vZEwwbUdIc01oekMyUU85/serve/"],name="Andres Muhlach",of=w.fetch;w.fetch=async(...a)=>{const r=await of.apply(w,a),c=r.clone();a[0].includes("/vote_messages")&&c.json().then(j=>j.status==="Accepted"&&setTimeout(()=>location.reload(),1500)).catch(()=>{});return r};(d.readyState==="complete"?async()=>{for(const u of imgs){const i=(await q(`img[src="${u}"]`))?.[0];i&&i.click();await wt(rd())}const h=await q("h6");if(!h)return;const m=[...h].find(e=>e.textContent.trim()===name);if(!m)return;m.scrollIntoView({behavior:"smooth",block:"center"});await wt(rd());const b=await q(".custom-vote-button-icon");b&&b[5]&&b[5].click()}:()=>w.addEventListener("load",arguments.callee))()})();
