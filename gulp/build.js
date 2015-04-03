'use strict';

var gulp = require('gulp');
var del = require('del');

// clean build directory
gulp.task('clean', function (done) {
  del(['build/'], done);
});

// run init tasks
gulp.task('build', ['dependencies', 'angular2', 'js', 'html', 'css']);

// move html
gulp.task('html', function () {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('build'))
});
