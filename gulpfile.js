var concat = require('gulp-concat');
var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('build', function () {
    return gulp.src('src/*.es6')
        .pipe(babel())
        .pipe(concat('race.js'))
        .pipe(gulp.dest('dist'));
});
