const gulp = require('gulp')
const requireDir = require('require-dir')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')

requireDir('gulp/tasks', {recurse: true})

gulp.task(
  'build',
  gulp.series(
    'clean',
    gulp.parallel(
      'postcss',
      'rollup',
      'images',
      'favicons'
    ),
    'pug',
  )
)