'use strict';

const PluginError = require('plugin-error');
const through = require('through2');
const ejs = require('ejs');
const fs = require('fs');

module.exports = function (options) {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
	      next(null, file);
	      return;
	    }

		if (file.isStream()) {
			file.contents = file.contents.pipe(through(minify));
		} else {
			try {
				var data = JSON.parse(file.contents.toString());
	        	var str = fs.readFileSync(options.filename,'utf-8');
				file.contents = new Buffer(ejs.render(str, data, options));
				file.path = gutil.replaceExtension(file.path, ".html");
				this.push(file);
			} catch (err) {
				let opts = Object.assign({}, options, { fileName: file.path });
		        let error = new PluginError('gulp-ejs-json', err, opts);
		        if (next !== cb) {
		          next(error);
		          return;
		        }
		        cb(error);
			}

			cb();
		}
	});
};
