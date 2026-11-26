const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { NxReactWebpackPlugin } = require('@nx/react/webpack-plugin');
const { join } = require('path');

const isProduction = process.env['NODE_ENV'] === 'production';

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/jira-global-page'),
  },
  devServer: {
    // `nx tunnel` serves the app on the tunnel port from the Forge manifest.
    port: 4200,
    historyApiFallback: {
      index: '/index.html',
      disableDotRule: true,
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
    },
  },
  plugins: [
    new NxAppWebpackPlugin({
      tsConfig: './tsconfig.app.json',
      compiler: 'babel',
      main: './src/main.tsx',
      index: './src/index.html',
      // Forge serves Custom UI assets from a relative path.
      baseHref: '.',
      assets: ['./src/favicon.ico', './src/assets'],
      styles: [],
      outputHashing: isProduction ? 'all' : 'none',
      optimization: isProduction,
    }),
    new NxReactWebpackPlugin({
      // Uncomment this line if you don't want to use SVGR
      // See: https://react-svgr.com/
      // svgr: false
    }),
  ],
};
