const DAO = artifacts.require("DAO");

module.exports = async function(deployer, _network, accounts) {
  await deployer.deploy(DAO, 2, 30, 2);
  const dao = await DAO.deployed();
};