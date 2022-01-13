//@ts-check
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const root = (...p) => path.resolve(__dirname, '..', ...p);

/**
 * @param {{
 *   output: string;
 *   entry: string;
 *   esTarget: string;
 * }} options
 * @returns {import('webpack').Configuration}
 */
const config = ({ output, esTarget, entry }) => ({
  mode: 'production',

  entry: root('src', entry),

  output: {
    path: root(),
    globalObject: `typeof self === 'undefined' ? this : self`,
    filename: output + '.js',
    sourceMapFilename: output + '.map',
    library: {
      type: 'umd',
      name: 'AxiosCacheInterceptor'
    },
    chunkFormat: 'module'
  },

  target: esTarget,

  resolve: {
    extensions: ['.ts', '.js']
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        include: root('src'),
        test: /\.(ts|js)$/,
        loader: 'ts-loader',
        options: {
          configFile: root('build', 'tsconfig.umd.json'),
          compilerOptions: {
            target: esTarget
          }
        }
      }
    ]
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin({ parallel: true })]
  }
});

module.exports = [
  config({
    esTarget: 'es2015', //es6
    entry: 'index.ts',
    output: 'umd/es6.min'
  }),
  config({
    esTarget: 'es5',
    entry: 'index.ts',
    output: 'umd/es5.min'
  })
];
