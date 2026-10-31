const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', baseline: 'verified' });
});

app.listen(PORT, () => {
  console.log(`Clean service listening on port ${PORT}`);
});
