# About

How to issue a ERC20 token in 10 minutes.

The followings are used in this tutorial:

- Solidity
- Hardhat
- Alchemy
- OpenZeppelin
- ethers.js


## Setup

Clone the repo and switch to the folder:

```
git clone https://github.com/harrywang/wit.git
cd wit
```

Install the packages:

```
npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers @openzeppelin/contracts hardhat-gas-reporter
```

## Environment Variables

Create `.env` file in the root folder with the following environment variables - **MAKE SURE** to gitignore this file. 

- get free RPC links for different networks from [https://www.alchemy.com/](https://www.alchemy.com/)
- if you want to use gas estimation, get a free API key from [https://coinmarketcap.com/](https://coinmarketcap.com/), see more instructions [here](http://harrywang.me/written-in-stone/#/?id=gas-estimation)

```
# private key for deploying the contract
PRIVATE_KEY='fd89bdcxxxx'

# API Key for estimate gas using CoinMarketCap
CMC_API_KEY='55578fe5-xxxx'

ENVIRONMENT='dev'
ALCHEMY_URL_MUMBAI='https://polygon-mumbai.g.alchemy.com/v2/p0CT1Tty3v5Pxxxx'
ALCHEMY_URL_POLYGON='https://polygon-mainnet.g.alchemy.com/v2/iz7EgWttP1xxxx'
ALCHEMY_URL_ETHEREUM='https://eth-mainnet.alchemyapi.io/v2/2Y8ep8l3YLtrdxxxx'
```

## Contract Testing

compile the contract

```
npx hardhat compile

```

test the contracts, which also compile the contract:

```
npx hardhat test
```

- a local node is started in the background 
- the first test account `0x...2266` is used to deploy the contract
- a gas estimation report is also generated, check my documentation for that [here](http://harrywang.me/written-in-stone/#/?id=gas-estimation)

<img width="730" src="https://user-images.githubusercontent.com/595772/166072365-0594ce09-9613-421b-b0d7-0f1052be206c.png">

## Contract Deployment

### Local Node
start the local node:

```
npx hardhat node
```

20 test accounts have been created:

```
WARNING: These accounts, and their private keys, are publicly known.
Any funds sent to them on Mainnet or any other live network WILL BE LOST.

Account #0: 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 (10000 ETH)
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

Account #1: 0x70997970c51812dc3a010c7d01b50e0d17dc79c8 (10000 ETH)
Private Key: 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d

```

Deploy the contract to the local node - the first account is used to pay the gas fee:

**NOTE: Every time you run this command, the contract is deployed again into a different addresses**

```
npx hardhat run scripts/deploy.js --network localhost

Deploying contract with the account: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Token deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

and the test node terminal console has the output:

```
web3_clientVersion (2)
eth_accounts
eth_chainId
eth_accounts
eth_blockNumber
eth_chainId (2)
eth_estimateGas
eth_getBlockByNumber
eth_feeHistory
eth_sendTransaction
  Contract deployment: Token
  Contract address:    0x5fbdb2315678afecb367f032d93f642f64180aa3
  Transaction:         0xa3742b40578b69e68ea4d66da2e4f9054a53e9e96445ffb4afb87915b64557ef
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            630763 of 630763
  Block #1:            0xacdfb348103f3ff6840e71faf92e8478fa8ce3e8140a12e214404fd24dd854d9

eth_chainId
eth_getTransactionByHash
eth_chainId
eth_getTransactionReceipt

```

### Mumbai

Deploy on Mumbai testnet:

- get some test MATIC from https://faucet.polygon.technology/
- Change the `.env` to `ENVIRONMENT='mumbai'` and run the following:
- (Optional if you use different accounts for different networks) Change the private key of the Mumbai test account: `PRIVATE_KEY='0xaxxx'`

```
npx hardhat run scripts/deploy.js --network mumbai

Deploying contract with the account: 0xf6a4169C3f2a435afd78c48E6a3f99F4a174A5Df
The initial supply is: 1000000.0
Token deployed to: 0x936252d5B76b875a9AEC09ed105e4817bfB9DcEe
```
View deployed contact at https://mumbai.polygonscan.com/address/0x936252d5B76b875a9AEC09ed105e4817bfB9DcEe

<img width="1407" src="https://user-images.githubusercontent.com/595772/166109530-db474e3f-04b6-4516-9c9b-6977facd5806.png">


Import the WIT token in MetaMask using the token contract address:

<img width="353" src="https://user-images.githubusercontent.com/595772/166109461-31b582e0-6b85-4f4c-ab86-78c07988ef26.png">

--

<img width="356" src="https://user-images.githubusercontent.com/595772/166109394-7b28e77a-227d-4b8b-803d-5a86e5af7104.png">

--

<img width="355" src="https://user-images.githubusercontent.com/595772/166109397-1e71384d-2237-4e53-9c20-c55e04e5d770.png">

--

<img width="355" src="https://user-images.githubusercontent.com/595772/166109399-6899f778-ba8d-4df7-8d8d-02044d9d587a.png">

You can send and receive WIT now:

<img width="355" src="https://user-images.githubusercontent.com/595772/166109747-8797832d-8c51-465f-8c9b-01d5cb223ab3.png">

--

<img width="353" src="https://user-images.githubusercontent.com/595772/166109754-d115a343-b4e6-4771-82f2-61486aa72f72.png">

--

### Polygon

Deploy on Polygon main network is essentially the same as on Mumbai and just use some real MATIC:

```
npx hardhat run scripts/deploy.js --network ploygon
```
View deployed contact at https://polygonscan.com/address/the_deployed_contract_address


### Ethereum

Deploy on Ethereum mainnet and use some real ether:

```
npx hardhat run scripts/deploy.js --network ethereum

```

View deployed contact at https://etherscan.io/address/the_deployed_contract_address

