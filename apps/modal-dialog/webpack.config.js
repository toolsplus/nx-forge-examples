const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

/**
 * @type{import('webpack').Configuration}
 */
module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/modal-dialog'),
    clean: true,
  },
  devServer: {
    port: 4200,
    historyApiFallback: {
      index: '/index.html',
      disableDotRule: true,
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
    },
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'web',
      compiler: 'babel',
      main: './src/main.tsx',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/favicon.ico', './src/assets', './src/index.html'],
      outputPath: '../../dist/apps/modal-dialog',
      outputHashing: 'none',
      // src/index.html only loads main.js, so keep the runtime in that bundle.
      runtimeChunk: false,
      optimization: false,
    }),
  ],
};
