// Run clean build directory.

var gulp = require('gulp');
var clean = require('gulp-rimraf');
var config = require('../config').clean;

gulp.task('clean', function () {
  return gulp.src(config.src, {read: false})
    .pipe(clean())
    .pipe(gulp.dest(config.dest));
});

