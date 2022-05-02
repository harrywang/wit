/* arguments for contract verification */
const {BigNumber} = require('ethers');

const supply = BigNumber.from('1000000000000000000000000');
module.exports = [
  "Wild Idiot Token",
  "WIT",
  supply,
];
