var gulp = require('gulp');
var path = require('path');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');
var config = require('../config');

gulp.task('templates', function() {
    return gulp.src(path.join(config.src, 'templates', '*.pug'))
        .pipe(plumber(config.plumberConfig))
        .pipe(pug())
        .pipe(gulp.dest(config.dist));
});
