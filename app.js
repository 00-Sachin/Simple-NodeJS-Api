const express = require('express');
const app = express();

app.get('/status', (req, res) => {
  res.status(200).json({ status: 'API is running perfectly!' });
});

module.exports = app;