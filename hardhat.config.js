/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-etherscan");

// read environment variables from .env file during development
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    ethereum: {
      url: process.env.ALCHEMY_URL_ETHEREUM,
      accounts: [process.env.PRIVATE_KEY]
    },
    mumbai: {
      url: process.env.ALCHEMY_URL_MUMBAI,
      accounts: [process.env.PRIVATE_KEY]
    },
    polygon: {
      url: process.env.ALCHEMY_URL_POLYGON,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  gasReporter: {
    currency: 'USD',
    token: 'ETH',
    //token: 'MATIC',
    gasPriceApi: 'https://api.etherscan.io/api?module=proxy&action=eth_gasPrice',
    //gasPriceApi: 'https://api.polygonscan.com/api?module=proxy&action=eth_gasPrice',
    coinmarketcap: process.env.CMC_API_KEY,
  },
  etherscan: {
    // Your API key for verifying contract
    // Obtain one at https://polygonscan.com OR https://etherscan.io/
    //apiKey: process.env.POLYGONSCAN_API_KEY
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
