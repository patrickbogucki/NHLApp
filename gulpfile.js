var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var nodemon  = require('gulp-nodemon');

gulp.task('browser-sync',  ['nodemon'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:3000",
    files: ["./"],
    browser: "google chrome",
    port: 7000,
    });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('styles', function(){
  gulp.src(['./dev/assets/styles/scss/*.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass())
    .pipe(gulp.dest('./dev/assets/styles/css/'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('deploy', function() {
	// minify, uglify, concatenate, move files
	});

gulp.task('nodemon', function (cb) {
  
  var started = false;
  
  return nodemon({
    script: 'dev/server/app.js'
  }).on('start', function () {
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true; 
    } 
  });
});

gulp.task('default', ['browser-sync'], function(){
  gulp.watch("./dev/**/*.html", ['bs-reload']);
  gulp.watch("./dev/**/*.scss", ['styles']);
  gulp.watch("./dev/**/*.js", ['bs-reload']);
  gulp.watch("*.html", ['bs-reload']);
});