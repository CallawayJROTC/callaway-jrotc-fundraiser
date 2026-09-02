# Callaway High School Army JROTC Fundraiser

A responsive GitHub Pages fundraising website for the Callaway High School Army JROTC 4th Battalion Chargers.

## What is included

- `index.html` — page structure and fundraising content
- `style.css` — Callaway orange-and-blue design and responsive layout
- `script.js` — donation link, $10,000 progress bar, campaign countdown, and share button
- `images/` — replace the sample/placeholder files with your cadet photos

## IMPORTANT: Donations

This website does **not** collect card or banking information.

Every `Donate Now` button sends visitors to:

`https://onlinedonations.us/home/tview_donate/8099`

If your official donation URL changes, open `script.js` and edit:

```js
donationUrl: "https://onlinedonations.us/home/tview_donate/8099",
```

## Update the amount raised

Open `script.js`.

Find:

```js
raisedAmount: 0,
```

Example: if you have raised $3,425, change it to:

```js
raisedAmount: 3425,
```

The progress percentage and remaining amount update automatically.

## Update the campaign goal

The site is currently set to $10,000:

```js
goalAmount: 10000,
```

## Update the campaign deadline

In `script.js`, change both:

```js
campaignEnd: "2026-10-31T23:59:59",
deadlineLabel: "October 31, 2026"
```

## Add your photos

Inside the `images` folder, add your own files with these exact names:

- `hero.jpg` — strongest wide group or action photo
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`

If a photo is missing, the page automatically displays `placeholder.svg`.

### Recommended image sizes

- `hero.jpg`: 1920 × 1080 or larger, landscape
- gallery photos: at least 1200 px wide

## GitHub Pages setup

1. Sign in to GitHub.
2. Create a repository named `callaway-jrotc-fundraiser`.
3. Upload all files and folders from this package.
4. Open the repository's **Settings**.
5. Select **Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select the `main` branch and `/ (root)`.
8. Save.

Your page will normally be published at:

`https://YOUR-GITHUB-USERNAME.github.io/callaway-jrotc-fundraiser/`

## Suggested photo choices

For the best visual impact:

1. Hero: large battalion/group photo in uniform
2. Gallery 1: Drill, Color Guard, or competition
3. Gallery 2: JLAB, leadership, or team activity
4. Gallery 3: community service, trip, camp, or college visit

## Safe payment setup

Do not place bank account, routing, credit-card, or payment credentials in this GitHub repository.

GitHub Pages should only serve the campaign website. Payment processing should remain with the authorized donation platform and school/district-approved payout process.
