var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var handleErrors = require('../util/handleErrors');
var config = require('../config');
var minifyCSS = require('gulp-minify-css');

gulp.task('minify-css', function() {
    return gulp.src(config.stylus.dest + '/' + config.stylus.out)
      .pipe(minifyCSS())
      .on('error', handleErrors)
      .pipe(gulp.dest(config.stylus.dest));
})

gulp.task('minify-js', function() {
  return gulp.src(config.browserify.dest + '/' + config.browserify.out)
      .pipe(uglify())
      .on('error', handleErrors)
      .pipe(gulp.dest(config.browserify.dest));
});

gulp.task('minify', ['minify-css', 'minify-js'])
