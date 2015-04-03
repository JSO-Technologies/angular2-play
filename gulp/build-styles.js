'use strict';

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

// move css
gulp.task('css', ['compile:css'], function () {
  return gulp.src('src/**/*.css')
    .pipe(gulp.dest('build'))
});

// compile scss to css
gulp.task('compile:css', function () {
  return (sass('src/style', {style: 'expanded'}))
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('build/style'));
});
