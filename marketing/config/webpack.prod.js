const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/marketing/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      exposes: {
        './MarketingApp': './src/bootstrap'
      },
      filename: 'remoteEntry.js',
      name: 'marketingModule',
      shared: packageJson.dependencies,
    }),
  ]
}

module.exports = merge(commonConfig, prodConfig)
