require("@nomicfoundation/hardhat-toolbox");
require("@chainlink/env-enc").config()
const SEPOLIA_URL = process.env.SEPOLIA_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  
  solidity: "0.8.28",
  sourcify: {
    enabled: true  // 启用 Sourcify 验证
  },
  networks:{
    sepolia:{
      url:SEPOLIA_URL,
      accounts:[PRIVATE_KEY]

    }
  },
  etherscan:{
    apiKey: "NRQ66X4GQ1HRAEEUIV3N2REER6UMZUVY8T"
  }
};
