var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var nodemon  = require('gulp-nodemon');

// Starts a web server on a port, using the proxy
// to connect to the express server started by nodemon
gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:3000",
    browser: "google chrome",
    port: 7000,
    notify: true
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

// Reloads server when any updates occur
// in the server folder. Then reloads the
// browser after some time
gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'dev/server/app.js',
    watch: [
      'dev/server/*'
    ]
  })
  .on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', function () {
    setTimeout(function () {
      browserSync.reload({ stream: false });
    }, 1000);
  });
});

// Watches only client side files and reloads browser
// if there are any changes
gulp.task('default', ['browser-sync'], function(){
  gulp.watch("./dev/assets/**/*.html", ['bs-reload']);
  gulp.watch("./dev/assets/**/*.scss", ['styles']);
  gulp.watch("./dev/assets/**/*.js", ['bs-reload']);
  gulp.watch("*.html", ['bs-reload']);
});