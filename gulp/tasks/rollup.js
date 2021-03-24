const gulp = require('gulp')
const rollup = require('@rollup/stream')
const terser = require('gulp-terser')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')

const {paths, settings} = require('../config')
const {getPath, errorHandler} = require('../helper')

gulp.task('rollup', _=>
  rollup(settings.rollup)
    .on('error', errorHandler)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(getPath(paths.build, paths.rollup.build)))
)

gulp.task('rollup:prod', _=>
  rollup(settings.rollup)
    .on('error', errorHandler)
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(terser({keep_fnames: true, mangle: false}))
    .pipe(gulp.dest(getPath(paths.build, paths.rollup.build)))
)
