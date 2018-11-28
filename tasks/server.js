/* server */
const gulp = require('gulp');
const debuga = require('debuga');
const browserSync = require('browser-sync').create();

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

module.exports = () => {
	browserSync.init({
    files: ['public/**/*'],
    server: {
			baseDir: [
				'public'
			],
			directory: false,
			middleware: isDevelopment ? [debuga({
        favicon: './tasks/img/favicon.ico',
        titlePrefix: 'TMPL — ',
        dist: './public'
      })] : []
		},
		tunnel: false,
    reloadOnRestart: true,
		host: 'localhost',
		port: 9000,
    snippetOptions: {
			rule: {
				match: /<\/body>/i
			}
		},
    watchEvents : [ 'change', 'add', 'unlink', 'addDir', 'unlinkDir' ],

	});
	browserSync.watch('public/**/*.*').on('change', browserSync.reload)
};
