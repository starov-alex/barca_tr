const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public/
app.use(express.static(path.join(__dirname, '../public')));

// Mock train data (to be replaced with real API/data later)
const trainData = [
  { date: '2025-09-20', trains: 6 },
  { date: '2025-09-21', trains: 7 },
  { date: '2025-09-22', trains: 8 },
  { date: '2025-09-23', trains: 5 },
  { date: '2025-09-24', trains: 9 }
];

app.get('/api/trains', (req, res) => {
  res.json(trainData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
