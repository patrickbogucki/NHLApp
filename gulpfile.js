var gulp = require('gulp');
var plumber = require('gulp-plumber');
var clean = require('gulp-clean');
var inject = require('gulp-inject');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var browserSync = require('browser-sync');
var nodemon  = require('gulp-nodemon');
var runSequence = require('run-sequence');

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

gulp.task('cleanDeploymentFolder', function () {
  // Clean out folder before putting files in
  return gulp.src('./dist', {read: false})
  .pipe(clean());
});

gulp.task('prepCSSFiles', function() {
  //Concat, minify, and rename CSS file
  gulp.src(['./dev/assets/styles/css/*.css']) 
  .pipe(concat('style.css'))
  .pipe(cssnano())
  .pipe(rename({extname: ".min.css"}))
  .pipe(gulp.dest('./dist/assets/styles'));
  });

gulp.task('prepJSFiles', function() {
  // Concat, uglify and rename JS files
  gulp.src(['./dev/assets/scripts/app.js', './dev/assets/scripts/**/*.js'])
  .pipe(concat('script.js'))
  .pipe(uglify())
  .pipe(rename({extname: ".min.js"}))
  .pipe(gulp.dest('./dist/assets/scripts'));
  });

gulp.task('injectHTML', function() {
  // Inject minified CSS and JS files into dist index file
  // var injectSources = gulp.src(['./dist/assets/style.min.css', './dist/assets/scripts/script.min.js'], {read: false});
  gulp.src(['./dev/index.html'])
  .pipe(inject(gulp.src(['./dist/assets/styles/style.min.css', './dist/assets/scripts/script.min.js'], {read: false})))
  .pipe(gulp.dest('./dist'));
  });

gulp.task('moveUnchangedFiles', function() {
  // Move files that don't need to be changed to appropriate areas
  gulp.src(['./dev/assets/scripts/templates/**'])
  .pipe(gulp.dest('./dist/assets/scripts/templates'));  

  gulp.src(['./dev/assets/scripts/views/**'])
  .pipe(gulp.dest('./dist/assets/scripts/views'));

  gulp.src(['./dev/server/**'])
  .pipe(gulp.dest('./dist/server'));

  gulp.src(['./dev/assets/favicon/**'])
  .pipe(gulp.dest('./dist/assets/favicon'));

  gulp.src(['./dev/assets/images/**'])
  .pipe(gulp.dest('./dist/assets/images'));
  });

// Run injectHTML after deploy. injectHTML isn't recognizing new files after clean
gulp.task('deploy', function() {
  runSequence('prepCSSFiles', 'prepJSFiles', 'moveUnchangedFiles', 'injectHTML');
});

// Watches only client side files and reloads browser
// if there are any changes
gulp.task('default', ['browser-sync'], function(){
  gulp.watch("./dev/assets/**/*.html", ['bs-reload']);
  gulp.watch("./dev/assets/**/*.scss", ['styles']);
  gulp.watch("./dev/assets/**/*.js", ['bs-reload']);
  gulp.watch("./dev/*.html", ['bs-reload']);
});