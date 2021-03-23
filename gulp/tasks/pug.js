const gulp = require('gulp')
const pug = require('gulp-pug-3')
const inject = require('gulp-inject')
const flatten = require('gulp-flatten')

const {paths, settings} = require('../config')
const {getPath, errorHandler} = require('../helper')

gulp.task('pug', _=>
  gulp.src(getPath(paths.src, paths.pug.src))
    .pipe(pug(settings.pug))
    .pipe(inject(
      gulp.src([
        getPath(paths.build, paths.postcss.build, '*.css'),
        getPath(paths.build, paths.rollup.build, '*.js'),
        getPath(paths.build, paths.favicons.build, '*.html'),
      ], {
        cwd: getPath(paths.build)
      })
    ))
    .pipe(flatten())
    .on('error', errorHandler)
    .pipe(gulp.dest(getPath(paths.build, paths.pug.build)))
)
