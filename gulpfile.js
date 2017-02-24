var gulp = require('gulp');
require('require-dir')('./tasks')
gulp.task('build', ['templates']);

gulp.task('default', ['build', 'fuse', 'watch']);
