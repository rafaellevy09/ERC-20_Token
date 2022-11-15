require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    goerli:{
      // Ankr's Public RPC URL
      url: "https://rpc.ankr.com/eth_goerli",
     // PRIVATE_KEY loaded from .env file
      accounts: [`0xa1e429c7f2eaf989a8871b2e4adcc708b0fb78eead2950332fa12558c854b5f7`]
    }
  }
};
