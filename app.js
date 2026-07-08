const express = require('express');
const app = express();

app.get('/status', (req, res) => {
  res.status(200).json({ status: 'API is running perfectly!' });
});

// Start the server on port 3000 (only if not running tests)
if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
}

module.exports = app;