const { composePlugins, withNx } = require('@nx/webpack');
const { join } = require('path');

module.exports = composePlugins(
  withNx({
    target: 'web',
    compiler: 'babel',
    main: 'apps/modal-dialog/src/main.tsx',
    tsConfig: 'apps/modal-dialog/tsconfig.app.json',
    assets: [
      'apps/modal-dialog/src/favicon.ico',
      'apps/modal-dialog/src/assets',
      'apps/modal-dialog/src/index.html',
    ],
    outputPath: 'dist/apps/modal-dialog',
    outputHashing: 'none',
  }),
  (config) => {
    config.output = {
      ...config.output,
      path: join(__dirname, '../../dist/apps/modal-dialog'),
      clean: true,
    };

    config.devServer = {
      port: 4200,
      historyApiFallback: {
        index: '/index.html',
        disableDotRule: true,
        htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
      },
    };

    return config;
  }
);
