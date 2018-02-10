// next.config.js
const path = require('path')
const webpack = require('webpack')

const reGraphql = /\.(graphql|gql)$/
const {ANALYZE, DEBUG} = process.env

module.exports = {
  distDir: 'build',
  // webpack: (config, {buildId, dev}) => {
  webpack: config => {
    // Perform customizations to webpack config

    // Rules for GraphQL
    const rulesForGraphQL = {
      test: reGraphql,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    }
    config.module.rules.push(rulesForGraphQL)
    // set env on client
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.DEBUG': JSON.stringify(DEBUG),
      }),
    )

    if (ANALYZE) {
      const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: path.join(__dirname, 'report.html'),
        }),
      )
    }

    // Important: return the modified config
    return config
  },
  webpackDevMiddleware: config =>
    // Perform customizations to webpack dev middleware config

    // Important: return the modified config
    config,
}
