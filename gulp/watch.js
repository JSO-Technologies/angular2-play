'use strict';

var gulp = require('gulp');

// watch for changes and run the relevant task
gulp.task('watch', function () {
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/**/*.css', ['css']);
  gulp.watch('src/**/*.scss', ['compile:css']);
});

