const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

const mode = isDevelopment ? 'development' : 'production';
const sourceMap = isDevelopment ? 'eval' : '';


const options = {
  mode: mode,
  output: {
    filename: 'bundle.min.js',
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  devtool: sourceMap
};

module.exports = () => (
	gulp.src('app/scripts/app.js')
	.pipe(plumber({
		errorHandler: notify.onError(function(err) {
			return {
				title: 'Webpack',
				message: err.message,
        sound: false
			}
		})
	}))
	.pipe(webpackStream(options))
	.pipe(gulp.dest('public/scripts'))
);
