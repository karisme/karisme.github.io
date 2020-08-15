const repoNameURIPrefix =
  process.env.NODE_ENV === 'production' ? '/karisme.github.io' : '';

module.exports = {
  assetPrefix: repoNameURIPrefix,
  env: {
    linkPrefix: repoNameURIPrefix,
  },
  generateBuildId: async () => 'current',
};