var webpack = require('webpack');

module.exports = {
  entry: {
    'react-mobile-picker': './src/index.js'
  },

  output: {
    filename: './lib/[name].js',
    library: 'Picker',
    libraryTarget: 'umd'
  },

  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
    'prop-types': true,
  },

  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.less$/, loader: 'style!css!autoprefixer!less'}
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
  ]
};
