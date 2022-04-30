const hre = require("hardhat");
const {utils, BigNumber} = require('ethers');


async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contract with the account:",
    deployer.address
  );

  const Token = await hre.ethers.getContractFactory("Token");
  // special name, symbol, and initialSupply
  // the default initial supply is 1 million, note that the default decimals are 18
  // this number is too big for javascript, we have to use BigNumber here
  const supply = BigNumber.from('1000000000000000000000000');
  console.log("The initial supply is:", utils.formatEther(supply));

  const token = await Token.deploy("Wild Idiot Token", "WIT", supply);

  await token.deployed();

  console.log("Token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });