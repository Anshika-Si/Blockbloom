// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("CertModule", (m) => {
  const cert = m.contract("Cert",[["0x975a41448D0cb12Efa1E533D18B14EA5f7F4dcf1"]])
  return{cert};
  });

  
