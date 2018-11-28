const gulp = require('gulp');
//const debug = require('gulp-debug');


const runTask = (taskName) => {
  gulp.task(taskName, cb => require(`./tasks/${taskName}`)(cb));
};

runTask('html');
runTask('styles');
runTask('scripts');
runTask('images');
runTask('fonts');
runTask('misc');
runTask('iconsPng');
runTask('iconsSvg');
runTask('clean');
runTask('server');
runTask('watch');
runTask('build');
runTask('dev');
runTask('default');
