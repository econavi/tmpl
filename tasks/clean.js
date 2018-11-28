/* clean */

const del = require('del');


module.exports = () => (
	del([
		'public'
	]).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
  })
);
