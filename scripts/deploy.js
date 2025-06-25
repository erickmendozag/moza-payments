async function main() {
  const MxnbWallet = await ethers.getContractFactory("MxnbWallet");
  const contract = await MxnbWallet.deploy();
  await contract.deployed();
  console.log("Contract deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
