const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  // resolver: {
  //   sourceExts: ['js', 'jsx', 'ts', 'tsx', 'cjs', 'mjs', 'json'],
  // }
  resolver: {
    sourceExts: ['js', 'json', 'ts', 'tsx'],
    assetExts: ['png', 'jpg', 'jpeg', 'gif', 'svg'],
    extraNodeModules: {
      '@': './src',
      "@theme/*":["./src/theme/*"],
      "@component/*":["./src/theme/*"],
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
