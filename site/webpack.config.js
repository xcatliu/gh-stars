const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './app',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  devtool: 'source-map',
};
