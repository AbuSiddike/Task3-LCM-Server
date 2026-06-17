# LCM Server — Task #3

A lightweight Node.js server that calculates and returns the **Lowest Common Multiple (LCM)** of two natural numbers through an HTTP GET request.

## Submission

```text
!task3 asiddike18@gmail.com https://task3-lcm-server.vercel.app/asiddike18_gmail_com?x={}&y={}
```

---

## Live Deployment

```text
https://task3-lcm-server.vercel.app/
```

### Example Requests

```text
https://task3-lcm-server.vercel.app/asiddike18_gmail_com?x=4&y=6
```

Response:

```text
12
```

```text
https://task3-lcm-server.vercel.app/asiddike18_gmail_com?x=3&y=5
```

Response:

```text
15
```

---

## API Endpoint

```http
GET /asiddike18_gmail_com?x=<number>&y=<number>
```

### Query Parameters

| Parameter | Type           | Description             |
| --------- | -------------- | ----------------------- |
| x         | Natural Number | First positive integer  |
| y         | Natural Number | Second positive integer |

### Validation Rules

Both parameters must be:

* Positive integers
* Greater than or equal to 1
* Numeric values only

The server returns:

* The LCM as a plain-text string when inputs are valid
* `NaN` when either parameter is invalid

---

## Example Responses

| Request      | Response |
| ------------ | -------- |
| `?x=4&y=6`   | `12`     |
| `?x=3&y=5`   | `15`     |
| `?x=10&y=20` | `20`     |
| `?x=0&y=5`   | `NaN`    |
| `?x=-3&y=5`  | `NaN`    |
| `?x=1.5&y=3` | `NaN`    |
| `?x=abc&y=3` | `NaN`    |
| `?x=&y=5`    | `NaN`    |

---

## How It Works

The server:

1. Receives two query parameters (`x` and `y`)
2. Validates that both values are natural numbers
3. Calculates the Greatest Common Divisor (GCD)
4. Uses the formula:

```text
LCM(a, b) = (a × b) / GCD(a, b)
```

5. Returns the result as plain text

If validation fails, the server immediately returns:

```text
NaN
```

---

## Technology Stack

* Node.js
* Express.js
* Vercel Serverless Functions

---

## Deployment

The application is deployed on Vercel and runs as a serverless function.

### Deployment Flow

1. Source code is hosted on GitHub.
2. GitHub repository is connected to Vercel.
3. Every push to the main branch automatically triggers a new deployment.
4. Vercel serves the application through serverless functions without requiring manual server management.

### Redeploy After Changes

```bash
git add .
git commit -m "Update application"
git push
```

Vercel automatically detects the new commit and redeploys the application.

---

## Local Development

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm start
```

### Test Locally

```bash
curl "http://localhost:3000/asiddike18_gmail_com?x=4&y=6"
```

Output:

```text
12
```

```bash
curl "http://localhost:3000/asiddike18_gmail_com?x=0&y=6"
```

Output:

```text
NaN
```

---

## Project Structure

```text
.
├── index.js
├── package.json
├── vercel.json
├── .gitignore
└── README.md
```

---

## Notes

* Returns plain-text responses only.
* No HTML rendering.
* No JSON responses.
* Supports any route path configured by Vercel routing.
* Designed specifically to satisfy Task #3 requirements.
