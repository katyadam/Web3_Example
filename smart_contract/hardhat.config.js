//https://eth-rinkeby.alchemyapi.io/v2/PgI2SmBBY8p50xQZFpeQVoUNqYy_nyPX

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/PgI2SmBBY8p50xQZFpeQVoUNqYy_nyPX',
      accounts: ['2c3a268f635741ac03d0d520ee95099277c6d926044829a8084700e707f7a5df']
    }
  }
}