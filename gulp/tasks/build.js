// build task: 'gulp build'

var gulp = require('gulp');

gulp.task('build', ['clean', 'stylus', 'html', 'images', 'browserify']);

// make this dependent on minify
