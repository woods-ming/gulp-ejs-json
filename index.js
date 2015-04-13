'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var ejs = require('ejs');
var fs = require('fs');

module.exports = function (options) {
	if (!options.filename) {
		throw new gutil.PluginError('gulp-ejs-json', '`filename` required');
	}

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-ejs-json', 'Streaming not supported'));
			return;
		}

		try {
			var data = JSON.parse(file.contents.toString());
        	var str = fs.readFileSync(options.filename,'utf-8');
			file.contents = new Buffer(ejs.render(str, data, options));
			file.path = gutil.replaceExtension(file.path, ".html");
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-ejs-json', err));
		}

		cb();
	});
};
