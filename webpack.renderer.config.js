const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

rules.push({
  test: /\.css$/,
  use: [
    'style-loader',
    '@teamsupercell/typings-for-css-modules-loader',
    {
      loader: 'css-loader',
      options: {
        modules: true,
        localsConvention: 'camelCase'
      }
    }
  ]
});

module.exports = {
  // Put your normal webpack config below here
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css']
  },
  module: {
    rules
  },
  plugins
};
