const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const gulpIf = require('gulp-if');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const csso = require('gulp-csso'); // Minify CSS
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const sassGlob = require('gulp-sass-glob');
const gulpStylelint = require('gulp-stylelint');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = () => (
	gulp.src('app/styles/*.scss')
	.pipe(plumber({
		errorHandler: notify.onError(function(err) {
			return {
				title: 'Styles',
				message: err.message,
        sound: false
			}
		})
	}))
  .pipe(gulpStylelint({
    reporters: [
      {formatter: 'string', console: true}
    ]
  }))
	.pipe(gulpIf(isDevelopment, sourcemaps.init()))
  .pipe(sassGlob())
  .pipe(sass().on('error', sass.logError))
	.pipe(gcmq())
	.pipe(autoprefixer())
	.pipe(gulpIf(!isDevelopment, csso({
		restructure: false
	})))
	.pipe(gulpIf(isDevelopment, sourcemaps.write()))
	.pipe(rename('build.min.css'))
	.pipe(gulp.dest('public/styles'))
);
