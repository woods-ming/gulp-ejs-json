# gulp-ejs-json [![Build Status](https://travis-ci.org/woods-ming/gulp-ejs-json.svg?branch=master)](https://travis-ci.org/woods-ming/gulp-ejs-json)

> ejs gulp plugin: static controller with ejs(template engine)


## Install

```
$ npm install --save-dev gulp-ejs-json
```


## Usage

```js
var gulp = require('gulp');
var ejsJson = require('gulp-ejs-json');
var gutil = require('./node_modules/gulp/node_modules/gulp-util');

gulp.task('default', function() {
	return gulp.src('models/demo.json')
	    .pipe(ejsJson({ filename: 'views/demo.ejs' }).on('error', gutil.log))
	    .pipe(gulp.dest('dist'));
});
```


## API

### ejsJson(options)

#### options(as ejs options)

##### filename

Type: `string`  
Default: `null`

view path: 'views/demo.ejs'.


## License

MIT © [woods-ming](https://github.com/woods-ming)
