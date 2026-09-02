const SETTINGS = {
  donationUrl: "https://onlinedonations.us/home/tview_donate/8099",
  goalAmount: 10000,
  raisedAmount: 0
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".donate-link").forEach(a => a.href = SETTINGS.donationUrl);

  const pct = Math.min((SETTINGS.raisedAmount / SETTINGS.goalAmount) * 100, 100);
  const remaining = Math.max(SETTINGS.goalAmount - SETTINGS.raisedAmount, 0);

  document.getElementById("raisedAmount").textContent = "$" + SETTINGS.raisedAmount.toLocaleString();
  document.getElementById("progressPercent").textContent = pct.toFixed(1).replace(".0","") + "%";
  document.getElementById("remainingAmount").textContent =
    remaining > 0 ? "$" + remaining.toLocaleString() + " remaining" : "Goal reached!";

  const msg = document.getElementById("supporterText");
  if (SETTINGS.raisedAmount === 0) msg.textContent = "Be one of our first supporters!";
  else if (pct < 50) msg.textContent = "Momentum is building!";
  else if (pct < 80) msg.textContent = "More than halfway there!";
  else if (pct < 100) msg.textContent = "The finish line is in sight!";
  else msg.textContent = "Mission accomplished!";

  setTimeout(() => document.getElementById("progressBar").style.width = pct + "%", 250);

  document.getElementById("shareButton").addEventListener("click", async () => {
    const notice = document.getElementById("shareNotice");
    const data = {
      title: "Callaway JROTC $10,000 Mission",
      text: "Support Callaway High School Army JROTC and help us reach our $10,000 mission.",
      url: window.location.href
    };
    try {
      if (navigator.share) await navigator.share(data);
      else {
        await navigator.clipboard.writeText(window.location.href);
        notice.textContent = "Campaign link copied.";
      }
    } catch (e) {}
  });
});
