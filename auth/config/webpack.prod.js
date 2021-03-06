const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/auth/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      exposes: {
        './AuthApp': './src/bootstrap'
      },
      filename: 'remoteEntry.js',
      name: 'authModule',
      shared: packageJson.dependencies,
    }),
  ]
}

module.exports = merge(commonConfig, prodConfig)
