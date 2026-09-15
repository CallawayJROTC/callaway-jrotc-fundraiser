# V6 Automatic Fundraiser Sync
Current starting total: **$352 of $10,000**.

This version adds an hourly GitHub Actions workflow. It reads the public OnlineDonations group page, updates `fundraiser-data.json`, and the website reads that file to display Raised, Progress, and Remaining automatically.

## After uploading
Upload **everything**, including the hidden `.github` folder. In GitHub, open **Actions → Sync Fundraiser Total → Run workflow** once. Thereafter it is scheduled hourly.

If OnlineDonations changes its public page markup, the updater safely preserves the last known amount instead of replacing it with bad data.

Group fundraiser: https://onlinedonations.us/home/team-view-fundraiser/8099/8099
