const axios = require('axios');
const express = require("express");

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  return res.sendFile('public/index.html', { root: __dirname });
});

app.get('/searchword', (req, res) => {
  var options = {
    method: 'GET',
    url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
    params: { q: "justin" },
    headers: {
      'X-RapidAPI-Key': 'd5954b5b9emsh7c9a963540a5437p1ea164jsn848d2c0c6f4f',
      'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
    }
  };

  axios.request(options)
    .then(function (response) {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port} - http://localhost:3000`);
});
