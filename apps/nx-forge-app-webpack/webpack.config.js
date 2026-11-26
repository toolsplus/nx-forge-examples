const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');

module.exports = {
  output: {
    // Forge loads function handlers from the exports of index.js, so the
    // bundle must assign the entry module's exports to `module.exports`.
    library: { type: 'commonjs2' },
    filename: 'index.js',
  },
  optimization: { nodeEnv: process.env.NODE_ENV },
  plugins: [
    new NxAppWebpackPlugin({
      // Forge ships the bundle as it is, so it must include all dependencies
      // except Node built-ins.
      externalDependencies: 'none',
      target: 'node',
      compiler: 'tsc',
      outputPath: '../../dist/apps/nx-forge-app-webpack/functions',
      main: './src/index.ts',
      outputFileName: 'index.js',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      sourceMap: true,
      optimization: false,
      outputHashing: 'none',
      deleteOutputPath: false,
    }),
  ],
};
