const { withExpo } = require('@expo/next-adapter')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([[withExpo, { projectRoot: __dirname }]], {
  webpack: (config) => {
    if (!config.resolve) {
      config.resolve = {
        alias: {
          'react-native$': 'react-native-web',
        },
      }
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native$': 'react-native-web',
    }
    return config
  },
})
