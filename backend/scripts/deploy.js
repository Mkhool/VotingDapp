const hre = require("hardhat");

async function main() {

  const Voting = await hre.ethers.deployContract("Voting");

  await Voting.waitForDeployment();

  console.log(
    `Voting deployed to ${Voting.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});