/* misc */

const gulp = require('gulp');
const changed = require('gulp-changed');
// const debug = require('gulp-debug');

module.exports = () => (
	gulp.src('app/assets/misc/{**/*,.*}')
  .pipe(changed('public'))
  // .pipe(debug({title: 'misc:'}))
	.pipe(gulp.dest('public'))
);
