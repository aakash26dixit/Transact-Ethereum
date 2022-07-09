// https://eth-ropsten.alchemyapi.io/v2/QkRSlI2NKuExyHW2FD5cpvdQPV0HsZlD

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/dmWyY2jKoYwmf5e-6zvtfH5z69ZE4ZPk',
      accounts: [ '8d1df3e58227746bcb2ef208bfd6e8bc815933a18b314e1e4d108640eb47343b' ]
    }
  }
}