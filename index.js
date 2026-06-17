const express = require('express');
const app = express();

function isNatural(val) {
  if (val === undefined || val === null || val === '') return false;
  if (typeof val !== 'string') return false;
  if (!/^[0-9]+$/.test(val)) return false;
  const num = BigInt(val);
  return num >= 1n;
}

function gcd(a, b) {
  while (b !== 0n) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcm(a, b) {
  return (a / gcd(a, b)) * b;
}

app.get('*', (req, res) => {
  const { x, y } = req.query;

  if (!isNatural(x) || !isNatural(y)) {
    res.set('Content-Type', 'text/plain');
    return res.send('NaN');
  }

  const result = lcm(BigInt(x), BigInt(y));
  res.set('Content-Type', 'text/plain');
  res.send(result.toString());
});

// For local development
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`LCM server running on port ${PORT}`));
}

// For Vercel — export the Express app as a serverless function
module.exports = app;
