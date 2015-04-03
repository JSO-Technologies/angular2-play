'use strict';

var gulp = require('gulp');

// move css
gulp.task('css', function () {
  return gulp.src('src/**/*.css')
    .pipe(gulp.dest('build'))
});
