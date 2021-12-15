const deploy = async () => {
  const contractFactory = await hre.ethers.getContractFactory("HelloWeb3");
  const contract = await contractFactory.deploy();

  await contract.deployed();

  return contract;
};

const sayHello = async (contract, user) => {
  const txn = await contract.connect(user).hello();
  await txn.wait();

  count = await contract.getTotalHellos();
};

const main = async () => {
  const [owner, rando] = await hre.ethers.getSigners();

  const contract = await deploy();

  console.log("Contract deployed to:", contract.address);
  console.log("Contract deployed by:", owner.address);

  await sayHello(contract, owner);
  await sayHello(contract, rando);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
