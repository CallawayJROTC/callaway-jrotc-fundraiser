/* =========================================================
   CALLAWAY JROTC FUNDRAISER SETTINGS
   EDIT ONLY THE VALUES IN THIS FIRST SECTION FOR ROUTINE UPDATES
   ========================================================= */

const SETTINGS = {
  donationUrl: "https://onlinedonations.us/home/tview_donate/8099",

  // Campaign numbers
  goalAmount: 10000,
  raisedAmount: 0,

  // Campaign deadline
  campaignEnd: "2026-10-31T23:59:59",

  // Displayed on the countdown card.
  deadlineLabel: "October 31, 2026"
};


/* =========================================================
   SITE LOGIC
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  applyDonationLinks();
  updateCampaignProgress();
  setupCountdown();
  setupCopyButton();
});


function applyDonationLinks() {
  document.querySelectorAll(".donate-link").forEach(link => {
    link.href = SETTINGS.donationUrl;
  });
}


function formatMoney(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}


function updateCampaignProgress() {
  const goal = Math.max(SETTINGS.goalAmount, 1);
  const raised = Math.max(SETTINGS.raisedAmount, 0);
  const remaining = Math.max(goal - raised, 0);
  const percent = Math.min((raised / goal) * 100, 100);

  const goalAmount = document.getElementById("goalAmount");
  const raisedAmount = document.getElementById("raisedAmount");
  const progressPercent = document.getElementById("progressPercent");
  const remainingAmount = document.getElementById("remainingAmount");
  const progressBar = document.getElementById("progressBar");
  const supporterMessage = document.getElementById("supporterMessage");

  goalAmount.textContent = formatMoney(goal);
  raisedAmount.textContent = formatMoney(raised);
  progressPercent.textContent = percent.toFixed(1) + "%";
  remainingAmount.textContent =
    remaining > 0 ? `${formatMoney(remaining)} remaining` : "Goal reached!";

  if (raised === 0) {
    supporterMessage.textContent = "Be one of our first supporters.";
  } else if (percent < 50) {
    supporterMessage.textContent = "Momentum is building.";
  } else if (percent < 80) {
    supporterMessage.textContent = "More than halfway there.";
  } else if (percent < 100) {
    supporterMessage.textContent = "The finish line is in sight.";
  } else {
    supporterMessage.textContent = "Mission accomplished!";
  }

  requestAnimationFrame(() => {
    setTimeout(() => {
      progressBar.style.width = percent + "%";
    }, 250);
  });
}


function setupCountdown() {
  const deadlineText = document.getElementById("deadlineText");
  deadlineText.textContent = `Campaign deadline: ${SETTINGS.deadlineLabel}`;

  updateCountdown();
  setInterval(updateCountdown, 1000);
}


function updateCountdown() {
  const end = new Date(SETTINGS.campaignEnd).getTime();
  const now = Date.now();
  const distance = end - now;

  const ids = ["days", "hours", "minutes", "seconds"];

  if (!Number.isFinite(end) || distance <= 0) {
    ids.forEach(id => {
      document.getElementById(id).textContent = "00";
    });
    return;
  }

  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance % 86400000) / 3600000);
  const minutes = Math.floor((distance % 3600000) / 60000);
  const seconds = Math.floor((distance % 60000) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}


function setupCopyButton() {
  const button = document.getElementById("copyLinkButton");
  const notice = document.getElementById("copyNotice");

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      notice.textContent = "Campaign link copied.";
    } catch {
      notice.textContent = "Copy the web address from your browser to share the campaign.";
    }

    setTimeout(() => {
      notice.textContent = "";
    }, 3500);
  });
}
