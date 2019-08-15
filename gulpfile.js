'use strict';

const gulp = require('gulp');
const watch = require('gulp-watch');
const prefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rigger = require('gulp-rigger');
const cssmin = require('gulp-minify-css');
const rimraf = require('rimraf');

var path = {
    src: {
        js: 'src/js/*.js',
        scss: 'src/scss/**/*.scss'
    },
    dist: {
        js: 'dist/js/',
        css: 'dist/css',
    }
}

function clean() {
    return del(["./dist/"]);
}

// function scripts() {
//     return gulp
//         .src(path.src.js)
//         // .pipe(rigger())
//         .pipe(sourcemaps.init())
//         .pipe(uglify())
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest(path.dist.js))
// };

function style() {
    return gulp
        .src(path.src.scss)
        .pipe(sourcemaps.init())
        .pipe(sass({
            sourceMap: true,
            errLogToConsole: true
        }))
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.dist.css))
};

function watchFiles() {
  gulp.watch(path.src.scss, style);
  // gulp.watch(path.src.js, scripts);
};

const build = gulp.series(clean, style);
const watcher = watchFiles;

exports.build = build;
exports.watch = watcher;
exports.default = watch;

// gulp.task('watch', function() {
//     watch([path.watch.style], function(event, cb) {
//         gulp.start('style:build');
//     });
//     watch([path.watch.js], function(event, cb) {
//         gulp.start('js:build');
//     });
// });

// const watch = gulp.parallel(watchFiles, browserSync)


// gulp.task('default', ['build', 'watch']);