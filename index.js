import express from 'express';
import data from './data.json' assert { type: 'json' };

const PORT = process.env.PORT || 3333;
const app = express();

app.get('/api/v1/scenes/:index', (req, res) => {
  const index = req.params['index'];
  const foundData = data[parseInt(index)];

  // Allow CORS
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );

  if (foundData) {
    res.json(foundData);
  } else {
    res.status(404).json({
      error: 'Not Found',
    });
  }
});

app.use((req, res) => {
  res.status(404).json({
    error: 'Not a valid route',
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
