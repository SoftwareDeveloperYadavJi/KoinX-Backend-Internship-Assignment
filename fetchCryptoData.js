
// fetchCryptoData.js
const axios = require('axios');

const fetchCryptoData = async () => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets',
      {
        params: {
          vs_currency: 'usd',
          ids: 'bitcoin,matic-network,ethereum'
        }
      }
    );

    const data = response.data.map((coin) => ({
      coin: coin.id,
      price: coin.current_price,
      market_cap: coin.market_cap,
      change_24h: coin.price_change_percentage_24h
    }));

    return data;
  } catch (error) {
    console.error('Error fetching data from CoinGecko:', error);
  }
};

module.exports = fetchCryptoData;
