const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    console.log(
      "Deploying contract with the account:",
      owner.address
    );

    const Token = await ethers.getContractFactory("Token");

    const hardhatToken = await Token.deploy("Wild Idiot Token", "WIT", 1000000);

    const ownerBalance = await hardhatToken.balanceOf(owner.address);

    console.log(
      "Owner Balance/Total Supply:",
      ownerBalance
    );

    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});
