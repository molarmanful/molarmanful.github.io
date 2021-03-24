const gulp = require('gulp')
const postcss = require('gulp-postcss')
const csso = require('gulp-csso')

const {paths} = require('../config')
const {getPath, errorHandler} = require('../helper')

gulp.task('postcss', _=>
  gulp.src(getPath(paths.src, paths.postcss.src))
    .pipe(postcss())
    .on('error', errorHandler)
    .pipe(gulp.dest(getPath(paths.build, paths.postcss.build)))
)

gulp.task('postcss:prod', _=>
  gulp.src(getPath(paths.src, paths.postcss.src))
    .pipe(postcss())
    .pipe(csso())
    .on('error', errorHandler)
    .pipe(gulp.dest(getPath(paths.build, paths.postcss.build)))
)
