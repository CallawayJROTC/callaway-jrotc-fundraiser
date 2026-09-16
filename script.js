function renderCountdown(endDate){
 const n=document.getElementById("daysRemaining"),l=document.getElementById("daysRemainingLabel");
 if(!n)return;
 const now=new Date(),end=new Date(endDate+"T23:59:59");
 const days=Math.max(0,Math.ceil((end-now)/86400000));
 if(now>end){n.textContent="ENDED";if(l)l.textContent="CAMPAIGN";}
 else if(days===1){n.textContent="FINAL";if(l)l.textContent="DAY";}
 else if(days<=7){n.textContent=days;if(l)l.textContent="FINAL DAYS";}
 else{n.textContent=days;if(l)l.textContent="DAYS REMAINING";}
}
const SETTINGS={donationUrl:"https://onlinedonations.us/home/team-view-fundraiser/8099/8099",goalAmount:10000,fallbackRaisedAmount:1034};
async function loadData(){try{const r=await fetch("./fundraiser-data.json?v="+Date.now(),{cache:"no-store"});if(!r.ok)throw new Error();return await r.json();}catch(e){return{goalAmount:10000,raisedAmount:1034,campaignEndDate:"2026-10-14"};}}
const money=n=>"$"+Number(n).toLocaleString(undefined,{maximumFractionDigits:2});
function render(goal,raised){goal=Number(goal)||10000;raised=Math.max(0,Number(raised)||0);const pct=Math.min(raised/goal*100,100),rem=Math.max(goal-raised,0);const put=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v;};put("raisedAmount",money(raised));put("progressPercent",pct.toFixed(1).replace(".0","")+"%");put("remainingAmount",rem?money(rem)+" remaining":"Goal reached!");const s=document.getElementById("supporterText");if(s)s.textContent=pct>=100?"Mission accomplished!":pct>=80?"The finish line is in sight!":pct>=50?"More than halfway there!":pct>=25?"Momentum is building!":raised>0?"The mission is underway!":"Be one of our first supporters.";const b=document.getElementById("progressBar");if(b)setTimeout(()=>b.style.width=pct+"%",150);}
document.addEventListener("DOMContentLoaded",async()=>{document.querySelectorAll(".donate-link").forEach(a=>{a.href=SETTINGS.donationUrl;a.target="_blank";a.rel="noopener";});const d=await loadData();render(d.goalAmount,d.raisedAmount);renderCountdown(d.campaignEndDate||'2026-10-14');const b=document.getElementById("shareButton");if(b)b.addEventListener("click",async()=>{try{if(navigator.share)await navigator.share({title:"Callaway JROTC $10,000 Mission",text:"200 Cadets. One Battalion. One $10,000 Mission.",url:location.href});else{await navigator.clipboard.writeText(location.href);const n=document.getElementById("shareNotice");if(n)n.textContent="Campaign link copied.";}}catch(e){}});});
