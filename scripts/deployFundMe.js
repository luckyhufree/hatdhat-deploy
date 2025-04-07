//import ethers.js
//create main function
//execute main function
const { ethers } = require("hardhat")

async function main(){
    const fundMeFactory = await ethers.getContractFactory("FundMe")
    const fundMe = await fundMeFactory.deploy(10)
    await fundMe.waitForDeployment()
    console.log("合约成功部署,地址:"+fundMe.target)

    await hre.run("verify:verify", {
        address: fundMe.target,
        constructorArguments: [10],
      });

}

main().then().catch((error)=>{
    console.error(error)
    process.exit(0)
})