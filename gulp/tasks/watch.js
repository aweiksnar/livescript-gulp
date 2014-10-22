var gulp = require('gulp');
var config = require('../config');

//  Watch for changes in stylus
//  The browserify gulp task handles js recompiling when setWatch is invoked

gulp.task('watch', ['setWatch', 'stylus', 'html', 'images'], function() {
    gulp.watch(config.stylus.files, ['stylus']);
    gulp.watch(config.html.src, ['html']);
    gulp.watch(config.images.src, ['images']);
});
