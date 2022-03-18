// https://ropsten.infura.io/v3/3e119443fe97420597d8d99e27b044e3
require("@nomiclabs/hardhat-waffle");

const infuraKey = "3e119443fe97420597d8d99e27b044e3";
const fs = require('fs');
const account = fs.readFileSync(".secret").toString().trim();

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${infuraKey}`,
      accounts: [account],
    },
  },
};