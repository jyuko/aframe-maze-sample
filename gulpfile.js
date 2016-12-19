var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

gulp.task('js', function(){
  browserify({
    entries: ['index.js']
  })
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())  
  .pipe(uglify())
  .pipe(rename({
    extname: '.min.js'
  }))
  .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['js']);