// storeCryptoData.js
const Crypto = require('./model/Crypto');


const storeCryptoData = async (cryptoData) => {
  try {
    // Insert each coin's data into the database
    for (const coin of cryptoData) {
      const newEntry = new Crypto({
        coin: coin.coin,
        price: coin.price,
        market_cap: coin.market_cap,
        change_24h: coin.change_24h
      });

      await newEntry.save();
      console.log(`${coin.coin} data stored in DB`);
    }
  } catch (error) {
    console.error('Error saving data to DB:', error);
  }
};

module.exports = storeCryptoData;


