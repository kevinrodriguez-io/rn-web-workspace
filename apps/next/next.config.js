const { withExpo } = require('@expo/next-adapter')
const withTM = require('next-transpile-modules')([
  '@yourapp/ui',
  '@emotion/native',
  '@emotion/react',
])
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([withTM, [withExpo, { projectRoot: __dirname }]], {
  webpack: (config, options) => {
    if (!config.resolve) {
      config.resolve = {
        alias: {
          // Transform all direct `react-native` imports to `react-native-web`
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
