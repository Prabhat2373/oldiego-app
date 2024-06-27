// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
  
// };

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          "@theme/*":["./src/theme/*"],
          "@component/*":["./src/theme/*"],
        },
      },
    ],
    
  ],
};