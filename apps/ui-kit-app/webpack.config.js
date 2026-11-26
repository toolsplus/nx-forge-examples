const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

/**
 * @type{import('webpack').Configuration}
 */
module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/ui-kit-app'),
    clean: true,
  },
  devServer: {
    port: 4200,
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'web',
      compiler: 'babel',
      main: './src/main.tsx',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      outputPath: '../../dist/apps/ui-kit-app',
      commonChunk: false,
      runtimeChunk: false,
      outputHashing: 'none',
      optimization: process.env['NODE_ENV'] === 'production',
    }),
  ],
};
