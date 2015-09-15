var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
       baseDir: "./dist/"
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('styles', function(){
  gulp.src(['dev/assets/styles/*.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass())
    .pipe(gulp.dest('dist/assets/styles/'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('deploy', function() {
	// minify, uglify, concatenate, move files
	});

gulp.task('default', ['browser-sync'], function(){
  gulp.watch("dev/**/*.html", ['bs-reload']);
  gulp.watch("dev/**/*.scss", ['styles']);
  gulp.watch("dev/**/*.js", ['bs-reload']);
  gulp.watch("*.html", ['bs-reload']);
});