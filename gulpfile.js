var gulp = require("gulp"),
    browserSync = require('browser-sync').create(),
    sass = require("gulp-sass"),
    imagemin = require('gulp-imagemin');

gulp.task('images', ['min-img', 'min-images']);

gulp.task('min-img', function () {
    return gulp.src('images/logo/**/*.{png,gif,jpg,jpeg}')
        .pipe(imagemin({optimizationLevel: 5, progressive: true, interlaced: true}))
        .pipe(gulp.dest('images/logo/'));
});
gulp.task('min-images', function () {
    return gulp.src('images/*.{png,gif,jpg,jpeg}')
        .pipe(imagemin({optimizationLevel: 5, progressive: true, interlaced: true}))
        .pipe(gulp.dest('images/'));
});

gulp.task("sass", function() {
  return gulp.src('./css/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

gulp.task("watch", function() {
  gulp.watch('./css/**/*.scss',['sass']);
});

gulp.task('init-server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('dev', ['sass','watch','init-server']);
