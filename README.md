# Callaway JROTC Fundraiser V7 — Reliable Edition

V7 keeps the full fundraiser design but removes the failed GitHub scraper. OnlineDonations returned HTTP 403 to GitHub Actions, so pretending that scraper is "automatic" would be unreliable.

**Starting total:** $352 of $10,000 (3.52%; $9,648 remaining).

## Fast update
Edit only `fundraiser-data.json`. Change `raisedAmount` to the current OnlineDonations total and commit. The website automatically recalculates the percentage, remaining amount, progress bar, and status message.

An `update-total.html` helper is included. Enter the current amount and it generates/copies the exact JSON you need.

All Donate buttons open the official group fundraiser:
https://onlinedonations.us/home/team-view-fundraiser/8099/8099
