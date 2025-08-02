const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/user', (req, res) => {
  res.json({
    name: 'Urvashi Rana',
    referralCode: 'urvashi2025',
    totalDonations: 1500
  });
});

app.get('/api/leaderboard', (req, res) => {
  res.json([
    { name: 'Urvashi Rana', referralCode: 'urvashi2025', donations: 1500 },
    { name: 'John Doe', referralCode: 'johndoe2025', donations: 1200 },
    { name: 'Jane Smith', referralCode: 'janesmith2025', donations: 900 }
  ]);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
