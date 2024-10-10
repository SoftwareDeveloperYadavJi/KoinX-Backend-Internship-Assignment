## Crypto Tracker Service

This project is a cryptocurrency data tracking service that fetches live data from the CoinGecko API for Bitcoin, Ethereum, and Matic. The service runs background jobs to store real-time cryptocurrency prices, market cap, and 24-hour change statistics in a MongoDB database every two hours. It also provides APIs to access the latest statistics and calculate the standard deviation of prices over the last 100 records.

## Features

- Fetches live cryptocurrency data from CoinGecko API
- Stores real-time cryptocurrency prices, market cap, and 24-hour change statistics in a MongoDB database
- Provides APIs to access the latest statistics and calculate the standard deviation of prices over the last 100 records

## Installation

1. Clone the repository:

```bash
git clone https://github.com/SoftwareDeveloperYadavJi/KoinX-Backend-Internship-Assignment.git
```

2. Install dependencies:

```bash
cd CryptoTrackerService
npm install
```

3. Create a `.env` file in the project root directory and add your CoinGecko API key:

```bash
API="YOUR_COINGECKO_API_KEY"
```

4. Start the server:

```bash
npm start
```


### Fetching Cryptocurrency Data
**Endpoint:** `/stats`

**Parameters:**
- `coin`: The name of the cryptocurrency to fetch data for. Valid values are `bitcoin`, `matic-network`, and `ethereum`.

**Response:**
- If the request is successful, the server will return the latest cryptocurrency data for the specified coin.
- If the request is unsuccessful, the server will return an error message.

**Example:**

```bash
curl --request GET \
  --url http://localhost:3000/stats?coin=bitcoin
```

### Calculating Standard Deviation
**Endpoint:** `/deviation`

**Parameters:**
- `coin`: The name of the cryptocurrency to calculate the standard deviation for. Valid values are `bitcoin`, `matic-network`, and `ethereum`.

**Response:**
- If the request is successful, the server will return the standard deviation of the prices for the specified coin.
- If the request is unsuccessful, the server will return an error message.

**Example:**

```bash
curl --request GET \
  --url http://localhost:3000/deviation?coin=bitcoin
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

