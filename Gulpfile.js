var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build', function () {
  gulp.src('src/scss/flavors/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css/'))
});

gulp.task('default', function () {
  gulp.watch('src/scss/flavors/**/*.scss', ['build']);
});