# gulp-ejs-json [![Build Status](https://travis-ci.org/woods-ming/gulp-ejs-json.svg?branch=master)](https://travis-ci.org/woods-ming/gulp-ejs-json)

> ejs gulp plugin: compile *.ejs with json at server side


## Install

```
$ npm install --save-dev gulp-ejs-json
```


## Usage

```js
var gulp = require('gulp');
var ejsJson = require('gulp-ejs-json');

gulp.task('default', function () {
	return gulp.src('src/*.json')
		.pipe(ejsJson({ filename: './templates/test.ejs' }).on('error', gutil.log))
		.pipe(gulp.dest('dist'));
});
```


## API

### ejsJson(options)

#### options(as ejs options)

##### filename

Type: `string`  
Default: `null`

template path: [./template.ejs].


## License

MIT © [woods-ming](https://github.com/woods-ming)
