/* assets */

const gulp = require('gulp');
const changed = require('gulp-changed');
// const debug = require('gulp-debug');

module.exports = () => (
	gulp.src('app/assets/fonts/**/*.*')
	.pipe(changed('public/assets/fonts'))
  // .pipe(debug({title: 'fonts:'}))
	.pipe(gulp.dest('public/assets/fonts'))
)
