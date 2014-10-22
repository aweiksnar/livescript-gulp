var gulp = require('gulp');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');
var changed = require('gulp-changed');
var handleErrors = require('../util/handleErrors');
var nib = require('nib');
var config = require('../config').stylus;

gulp.task('stylus', function() {
  gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(stylus({use: nib(), 'include css': true, errors: true}))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});
