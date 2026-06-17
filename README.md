# LCM Server — Task #3

A minimal HTTP server that returns the **Lowest Common Multiple** of two natural numbers.

## Endpoint

```
GET /<your_email_path>?x=<number>&y=<number>
```

### Rules
- Both `x` and `y` must be **natural numbers** (positive integers ≥ 1).
- Returns a **plain-text string** of digits — no HTML, no JSON.
- Returns the string `NaN` if either parameter is not a natural number.

### Examples

| Request | Response |
|--------|----------|
| `?x=4&y=6` | `12` |
| `?x=3&y=5` | `15` |
| `?x=0&y=5` | `NaN` |
| `?x=1.5&y=3` | `NaN` |
| `?x=abc&y=3` | `NaN` |

---

## Live deployment

Deployed on **Vercel** as a serverless function:

```
https://task-3-lcm-server.vercel.app/
```

The app responds to **any path** (`*`), so the email-slug portion of the URL is just routing — the actual logic only cares about the `x` and `y` query parameters.

---

## How it's deployed (Vercel)

1. Code lives in a GitHub repo connected to Vercel.
2. `vercel.json` tells Vercel to treat `index.js` as a Node.js serverless function and route all paths to it.
3. `index.js` exports the Express app (`module.exports = app`) instead of calling `app.listen()` in production — Vercel's runtime handles the HTTP server itself.
4. Every `git push` to the connected branch triggers an automatic redeploy. No manual restart needed, and the free tier doesn't sleep.

### Redeploying after changes
```bash
git add .
git commit -m "your message"
git push
```
Vercel picks up the push automatically — no dashboard action required.

---

## Submission template

Replace `your.email@example.com` and the path slug with your actual email (special characters → underscores):

```
!task3 your.email@example.com https://task-3-lcm-server.vercel.app/your_email_example_com?x={}&y={}
```

---

## Local development

```bash
npm install
npm start
# In another terminal:
curl "http://localhost:3000/your_email_example_com?x=4&y=6"   # → 12
curl "http://localhost:3000/your_email_example_com?x=0&y=6"   # → NaN
```

`node_modules` is excluded via `.gitignore` — Vercel installs dependencies fresh from `package.json` on every deploy.
