const NextFederationPlugin = require('@module-federation/nextjs-mf');

const mfes = require('./src/constants/mfes.json');

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  const remotesObject = {};

  for (const mfeId in mfes) {
    const { variable } = mfes[mfeId] || {};

    if (process.env[variable]) {
      remotesObject[
        mfeId
      ] = `${mfeId}@${process.env[variable]}/_next/static/${location}/remoteEntry.js`;
    } else {
      remotesObject[
        mfeId
      ] = `${mfeId}@${process.env.MFES_URL}/${mfeId}/_next/static/${location}/remoteEntry.js`;
    }
  }

  return remotesObject;
};

const exposes = {
  './Header': './src/components/Header',
};

module.exports = {
  output: 'standalone',

  experimental: {
    isrMemoryCacheSize: 0,
  },

  images: {
    minimumCacheTTL: 60,
  },

  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'header',
        filename: 'static/chunks/remoteEntry.js',
        exposes,
        remotes: remotes(options.isServer),
        shared: {},
        extraOptions: {
          automaticAsyncBoundary: false,
        },
      })
    );
    return config;
  },
};
