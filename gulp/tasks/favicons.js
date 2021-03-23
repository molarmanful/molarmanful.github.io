const gulp = require('gulp')
const favicons = require('favicons').stream

const {paths} = require('../config')
const {getPath, errorHandler} = require('../helper')

gulp.task('favicons', _=>
  gulp.src(getPath(paths.src, paths.favicons.src))
    .pipe(favicons({
      html: 'favicons.html',
      pipeHTML: true,
    }))
    .on('error', errorHandler)
    .pipe(gulp.dest(getPath(paths.build, paths.favicons.build)))
)
