module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './src/main.js'
  ],
  output: {
    // path: __dirname + '/public',
    publicPath: '/public',
    filename: 'bundle.js'
  }
};
