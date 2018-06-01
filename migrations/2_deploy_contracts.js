const CodexCoin = artifacts.require('./CodexCoin.sol')

module.exports = (deployer, network, accounts) => {

  switch (network) {
    case 'ganache':
    case 'rinkeby':
    case 'coverage':
    case 'development':
      deployer.deploy(CodexCoin, '200000000000000000000000000')
      break

    default:
      throw new Error('No deploy logic defined for this network')
  }
}
