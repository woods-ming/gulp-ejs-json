'use strict';

const PluginError = require('plugin-error');
const through = require('through2');
const ejs = require('ejs');
const fs = require('fs');
const replaceExt = require('replace-ext');

module.exports = options => {
  return through.obj(function(file, enc, next) {
    if (file.isNull()) {
      next(null, file);
      return;
    }

    try {
		var data = JSON.parse(file.contents.toString());
    	var str = fs.readFileSync(options.filename,'utf-8');
		file.contents = new Buffer(ejs.render(str, data, options));
		file.path = replaceExt(file.path, ".html");
		this.push(file);
	} catch (err) {
		let opts = Object.assign({}, options, { fileName: file.path });
        let error = new PluginError('gulp-ejs-json', err, opts);
        next(error);
        return;
	}

	next();
  });
};
module.exports = function (options) {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new PluginError('gulp-ejs-json', 'Streaming not supported'));
			return;
		}

		try {
			var data = JSON.parse(file.contents.toString());
        	var str = fs.readFileSync(options.filename,'utf-8');
			file.contents = new Buffer(ejs.render(str, data, options));
			file.path = replaceExt(file.path, ".html");
			this.push(file);
		} catch (err) {
			let opts = Object.assign({}, options, { fileName: file.path });
	        let error = new PluginError('gulp-ejs-json', err, opts);
	        cb(error);
	        return;
		}

		cb();
	});
};