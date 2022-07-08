const celoDAO = artifacts.require("celoDAO");

module.exports = function (deployer) {
  deployer.deploy(celoDAO);
}
