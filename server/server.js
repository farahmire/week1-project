const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config()

// const api_key = finnhub.ApiClient.instance.authentications['api_key'];; // Replace this with your actual API key

const BASE_URL = "https://finnhub.io/api/v1";
const app = express();
// This fishes the GIPHY_API_KEY's value out of our
// .env file:



// App PORT set with production check
const PORT = process.env.PORT || 5000;


// Route includes
// const stockRouter = require('./stock.router');
// const categoryRouter = require('./routes/category.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));



app.post('/api/stock/symbol',  async (req, res) => {
  console.log('req', req)
  const symbol = req.body.symbol.toUpperCase()
  console.log('sym', symbol)

  try {
    const response = await axios.get(`${BASE_URL}/quote?symbol=${symbol}&token=${process.env.REACT_APP_FINNHUB_API_KEY}`)
    console.log('response', response)
    const data = {
      currentPrice: response.data.c, 
      change: response.data.d,
      percentChange: response.data.dp,
      high: response.data.h,
      low: response.data.l,
      open: response.data.o,
      previousClose: response.data.pc
    }
    res.send(data);
  } catch (error) {
      console.error(error)
  }

});

// Routes


// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});