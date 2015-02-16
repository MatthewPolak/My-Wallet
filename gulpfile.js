/**
 * Project: My-Wallet
 * File: ${FILE_NAME}
 * Author: Matej Polák <polakmatko@gmail.com>
 * Date: 15.2.2015
 * Time: 19:43
 */

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var reactify = require('reactify');
var del = require('del');

function getProjectName() {
    var pkg = require('./package.json');
    var version = pkg.version;
    var name = pkg.name.toLowerCase();
    return name + '-' + version;
};

gulp.task('default', ['clean'], function(){
    return gulp.src('./js/src/main.js')
        .pipe(browserify({
            transform: [reactify]
        }))
        .pipe(concat(getProjectName() + '.js'))
        .pipe(gulp.dest('./js/dist/'));
    
});

gulp.task('watch', function(){
    gulp.watch(['./js/src/**/*.js', './js/src/**/*.jsx'], ['default']);
});

gulp.task('clean', function(cb){
    del(['./js/dist'], cb);
});