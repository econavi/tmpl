/* build */

const gulp = require('gulp');


module.exports = gulp.series(
	'clean',
	'iconsSvg',
	gulp.parallel(
		'html',
		'styles',
		'scripts',
	  'fonts',
	  'images',
		'misc'
	)
);
