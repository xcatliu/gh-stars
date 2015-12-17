#!/usr/bin/env node

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config');
const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  contentBase: config.output.path,
  hot: true,
});

server.listen(8080, 'localhost', (err) => {
  if (err) {
    console.error(err);
  }
  console.log('Listening at http://localhost:8080');
});
