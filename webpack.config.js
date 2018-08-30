const webpack = require('webpack');
const path = require('path');
const config = {
  name: 'prop-type-removal-bug-reproduction',
  target: 'web',
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: `index.js`
  },
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          /src/
        ],
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')
      }
    })
  ]
};

module.exports = config;
