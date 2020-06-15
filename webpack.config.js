const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: ['./src/main.ts'],
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: [
    nodeExternals(),
  ],
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [{
          loader: 'ts-loader',
          options: {
            //   transpileOnly: false,
              getCustomTransformers: (program) => ({
                  before: [require('@nestjs/graphql/plugin').before({}, program)]
              }),
          }
      }],
      exclude: /node_modules/,
    }, ],
  },
  mode: "development",
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.gql'],
  },
  output: {
    path: path.join(__dirname, 'test-output'),
    filename: 'server.js',
  },
};
