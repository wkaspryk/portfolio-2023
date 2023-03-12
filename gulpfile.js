var gulp = require('gulp');
// var browserify = require('gulp-browserify');
var sass = require('gulp-sass');

/*
 * Directories here
 */

var paths = {
  sass: './src/sass/',
  css: './css/',
  data: './src/_data/'
};

/**
 * Compile .scss files into public css directory With autoprefixer no
 * need for vendor prefixes then live reload the browser.
 */
gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('sass', function() {
  gulp.src('sass/**/*.scss')
  .pipe(sass({style: 'expanded'}))
    .on('error', sass.logError)
  .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss',['styles']);
});