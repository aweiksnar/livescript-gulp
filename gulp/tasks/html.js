// Move HTML out of client and into build.

var gulp = require('gulp');
var handleErrors = require('../util/handleErrors');
var config = require('../config').html;

gulp.task('html', function() {
  return gulp.src(config.src)
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});

