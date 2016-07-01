const webpack = require('webpack');


module.exports = {

  entry: {
    'main': './demo/main.ts'
  },

  output: {
    path: __dirname + "/demo/dist", publicPath: __dirname + "/demo/dist", filename: "bundle.js"
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  /**
   * Modules
   */
  module: {

    preLoaders: [

      /*
       * Tslint loader support for *.ts files
       *
       * See: https://github.com/wbuchwalter/tslint-loader
       */
       //{ test: /\.ts$/, loader: 'tslint-loader', exclude: [ /node_modules/ ] }

    ],

    loaders: [{
      test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/
    },
    {
      test:   /\.scss/,
      loaders: ['style', 'css', 'sass']
    },
    {
      test:   /\.html/,
      loader: 'html'
    },
    {
      test: /\.css$/,
      loader: 'raw-loader'
    }

    ],

    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: ['app'],
        minChunks: Infinity
      }),

      new webpack.ProvidePlugin({
        _: 'lodash'
      })

    ],

    /**
     * Static analysis linter for TypeScript advanced options configuration
     * Description: An extensible linter for the TypeScript language.
     *
     * See: https://github.com/wbuchwalter/tslint-loader
     */
    tslint: {
      emitErrors: false,
      failOnHint: false,
      resourcePath: 'src'
    }
  }
  
};
