const cron = require('node-cron');
const connectDB = require('./DB/db');
const fetchCryptoData = require('./fetchCryptoData');
const storeCryptoData = require('./storeCryptoData');

// Connect to the database
connectDB();

// Cron job to run every 2 hours (0 */2 * * *)
cron.schedule('0 */2 * * *', async () => {
  console.log('Fetching crypto data...');
  const cryptoData = await fetchCryptoData();

  if (cryptoData) {
    console.log('Storing crypto data...');
    await storeCryptoData(cryptoData);
  }
  console.log('Job completed.');
});
