# gulp-ejs-json [![Build Status](https://travis-ci.org/woods-ming/gulp-ejs-json.svg?branch=master)](https://travis-ci.org/woods-ming/gulp-ejs-json)

> My impeccable gulp plugin


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
		.pipe(ejsJson({ filename: './templates/test.ejs' }))
		.pipe(gulp.dest('dist'));
});
```


## API

### ejsJson(options)

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [woods-ming](https://github.com/woods-ming)
