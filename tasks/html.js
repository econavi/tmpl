/* HTML */

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const pug = require('gulp-pug');
const gulpIf = require('gulp-if');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = () => (
  gulp.src('app/pug/*.pug')
  .pipe(plumber({
    errorHandler: notify.onError(function(err) {
      return {
        title: 'HTML',
        message: err.message,
        sound: false
      }
    })
  }))
  .pipe(pug(gulpIf(isDevelopment, {pretty: true})))
  .pipe(gulp.dest('public'))
);
