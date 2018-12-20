const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}

module.exports = {
    entry: {
        navbar: path.resolve(__dirname, 'src/navbar'),
    },
    output: {
        filename: "pidie.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './src'
                        }
                    },
                    'css-loader',
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "pidie.css"
        })
    ],
    optimization: {
        splitChunks: {
          cacheGroups: {
            navbarStyles: {
              name: 'navbar',
              test: (m,c,entry = 'navbar') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
              chunks: 'all',
              enforce: true
            },
          }
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
};
