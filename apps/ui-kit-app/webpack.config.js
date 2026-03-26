const { composePlugins, withNx } = require('@nx/webpack');
const { join } = require('path');

module.exports = composePlugins(
  withNx({
    target: 'web',
    compiler: 'babel',
    main: 'apps/ui-kit-app/src/main.tsx',
    tsConfig: 'apps/ui-kit-app/tsconfig.app.json',
    assets: ['apps/ui-kit-app/src/assets'],
    outputPath: 'dist/apps/ui-kit-app',
    commonChunk: false,
    runtimeChunk: false,
    outputHashing: 'none',
    optimization: process.env['NODE_ENV'] === 'production',
  }),
  (config) => {
    config.output = {
      ...config.output,
      path: join(__dirname, '../../dist/apps/ui-kit-app'),
      clean: true,
    };

    config.devServer = {
      port: 4200,
    };

    return config;
  }
);
