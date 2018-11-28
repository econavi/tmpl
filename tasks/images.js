/* assets */

const gulp = require('gulp');
const changed = require('gulp-changed');
// const debug = require('gulp-debug');

module.exports = () => (
	gulp.src('app/assets/img/**/*.*')
	.pipe(changed('public/assets/img'))
  // .pipe(debug({title: 'images:'}))
	.pipe(gulp.dest('public/assets/img'))
)
