var gulp = require('gulp'),
    gulpUglify = require('gulp-uglify'),
    rename     = require('gulp-rename');

gulp.task('watch', function () {
    gulp.watch('src/*.js', ['script']);
});

gulp.task('script', function () {
    gulp.src('src/*.js') 
        .pipe(gulpUglify())
        .pipe(rename(function(path) {
            path.basename += '-1.0.1.min';
            path.extname = '.js';
        }))
        .pipe(gulp.dest('dist'));
});