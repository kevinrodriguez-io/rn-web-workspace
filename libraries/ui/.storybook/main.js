const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  stories: [
    '../docs/**/*.stories.mdx',
    '../docs/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-toolbars',
  ],
  webpackFinal: async (config, { configType }) => {
    if (config.resolve) {
      config.resolve.alias = {
        'react-native': 'react-native-web',
        '@yourapp/ui': path.resolve(__dirname, '../src/index.ts'),
      }
    } else {
      config.resolve = {
        alias: {
          'react-native': 'react-native-web',
          '@yourapp/ui': path.resolve(__dirname, '../src/index.ts'),
        },
      }
    }

    if (config.externals) {
      config.externals = [
        ...config.externals,
        [
          nodeExternals(),
          nodeExternals({
            modulesDir: path.resolve(__dirname, '../../../node_modules'),
          }),
        ],
      ]
    }

    return config
  },
}
