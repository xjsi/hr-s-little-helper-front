var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require("babelify"),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    del = require('del'),
    connect = require('gulp-connect'),
    port = process.env.PORT || 8080,
    reloadPort = process.env.RELOAD_PORT || 35729,
    sass = require('gulp-sass'),
    paths = {
      source: './src/app.jsx',
      sass: ['scss/*.scss'],
	    javascripts: 'javascripts',
      stylesheets: 'stylesheets',
	    tests: ['__tests__/**/*.jsx']
    };

gulp.task('clean', function () {
  del(['javascripts']);
});

gulp.task('build', function() {
  return  browserify({
    entries: paths.source,
    debug: true,
    extensions: ['.jsx','.js']
  })
    .transform(babelify.configure({

      optional: ["runtime","es7.asyncFunctions"]
    }))
    .transform(['envify'])
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest(paths.javascripts));
});

gulp.task('serve', ['build', 'sass'], function () {
  return connect.server({
    port: port,
    livereload: {
      port: reloadPort
    }
  });
});

gulp.task('reload-js', ['build','sass'], function () {
  return gulp.src(paths.source)
    .pipe(connect.reload());
});

gulp.task('sass', function() {
  return gulp.src(paths.sass)
  .pipe(sass({
    includePaths: ['bower_components/foundation/scss']
  }))
  .pipe(gulp.dest('./stylesheets'));
});

gulp.task('watch', function () {
  gulp.watch(['./src/**/*.jsx','./src/**/*.js'], ['reload-js']);
  gulp.watch([paths.sass], ['reload-js']);
});

gulp.task('default', ['serve', 'watch']);
