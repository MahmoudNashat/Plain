let gulp = require('gulp'),
concat = require('gulp-concat'),
autoPrefixer = require('gulp-autoprefixer'),
sass = require('gulp-sass'),
pug = require('gulp-pug'),
uglify = require('gulp-uglify'),
sourceMaps = require('gulp-sourcemaps');
// HTML Task
gulp.task('html', function() {
    gulp.src('stage/html/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist'))
});
// CSS Task
gulp.task('css', function() {
    gulp.src('stage/css/**/*.scss')
        .pipe(sourceMaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoPrefixer())
        .pipe(concat('main.css'))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('dist/css'))
})
// SCRIPTS Task
gulp.task('scripts', function() {
    gulp.src('stage/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});
// WATCH Task
gulp.task('watch', function() {
    gulp.watch('stage/html/*.pug', ['html'])
    gulp.watch('stage/css/**/*.scss', ['css'])
    gulp.watch('stage/js/*.js', ['scripts'])
});