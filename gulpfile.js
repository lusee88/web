'use strict';

//dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

//////////////
// - SCSS/CSS
//////////////

var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

//Complie SCSS
function compile_scss(){
    return gulp
    .src(SCSS_SRC) //calls the scss, pipe is a method that chains files
    .pipe(sass().on('error', sass.logError)) //compile to std css
    .pipe(minifyCSS()) //minify
    .pipe(rename({ suffix: '.min' })) // prefixing with .min
    .pipe(changed(SCSS_DEST)) //only affecting changed files
    .pipe(gulp.dest(SCSS_DEST)); //send to output dest

};

//detect changes in SCSS
function watch_scss(){ //watching input stream SCSS_SRC
    gulp.watch(SCSS_SRC, compile_scss);
};

// Run Tasks
gulp.task("default", watch_scss);