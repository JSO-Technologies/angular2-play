'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var traceur = require('gulp-traceur');

// move dependencies into build dir
gulp.task('dependencies', function () {
  return gulp.src([
    'node_modules/angular2/node_modules/rx/dist/rx.all.js',
    'node_modules/angular2/node_modules/traceur/bin/traceur.js',
    'node_modules/angular2/node_modules/traceur/bin/traceur-runtime.js',
    'node_modules/angular2/node_modules/zone.js/zone.js',
    'node_modules/es6-module-loader/dist/es6-module-loader.js',
    'node_modules/es6-module-loader/dist/es6-module-loader.js.map',
    'node_modules/systemjs/dist/system.js',
    'node_modules/systemjs/dist/system.js.map'
  ])
    .pipe(gulp.dest('build/lib'));
});


// tanspile, concat & move angular
gulp.task('angular2', function () {
  return gulp.src([
    traceur.RUNTIME_PATH,
    'node_modules/angular2/es6/prod/*.es6',
    'node_modules/angular2/es6/prod/src/**/*.es6'
  ], {
    base: 'node_modules/angular2/es6/prod'
  })
    .pipe(rename(function (path) {
      path.dirname = 'angular2/' + path.dirname;
      path.extname = '';
    }))
    .pipe(traceur({
      modules: 'instantiate',
      moduleName: true
    }))
    .pipe(concat('angular2.js'))
    .pipe(gulp.dest('build/lib'));
});
