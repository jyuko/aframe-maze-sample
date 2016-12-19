var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');


gulp.task('js', function () {
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

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: "./"
            , index: "index.html"
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('default', ['js', 'browser-sync'], function () {
    gulp.watch("./*.html", ['bs-reload']);
    gulp.watch("./dist/*.js", ['bs-reload']);
});