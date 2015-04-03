'use strict';

var gulp = require('gulp');

var rename = require('gulp-rename');
var traceur = require('gulp-traceur');

// transpile & move js
gulp.task('js', function () {
  return gulp.src('src/**/*.js')
    .pipe(rename({
      extname: ''
    }))
    .pipe(traceur({
      modules: 'instantiate',
      moduleName: true,
      annotations: true,
      types: true
    }))
    .pipe(rename({
      extname: '.js'
    }))
    .pipe(gulp.dest('build'));
});

