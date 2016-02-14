'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    babel = require("gulp-babel"),
    plumber = require('gulp-plumber');

var path = {
    build: 'build/',
    src: 'src/**/*.js'
};

gulp.task('build', function () {
    gulp.src(path.src)
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest(path.build))
});

gulp.task('watch', function(){
    watch([path.src], function(event, cb) {
        gulp.start('build');
    });
});

gulp.task('default', ['build', 'watch']);