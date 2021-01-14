var path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");
var S3Plugin = require('webpack-s3-plugin');
var SRC_DIR = path.join(__dirname, '/src');
var DIST_DIR = path.join(__dirname,'/dist');
var aws = require('./AWSkey.js');
module.exports = {
  entry: `${SRC_DIR}/app.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env' ]
        }
      }
    ]
  },
  plugins: [
    new CompressionPlugin({
      filename: `[path][base].gz`,
      algorithm: 'gzip',
    }),
    new S3Plugin({
      include:'bundle.js',
      s3Options: {
        accessKeyId: aws.accessKey,
        secretAccessKey: aws.secretKey
      },
      s3UploadOptions: {
        Bucket: 'tptproxy'
      }
    })
  ],
  watch: true
};