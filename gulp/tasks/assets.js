const gulp = require('gulp')
const flatten = require('gulp-flatten')

const {paths, settings} = require('../config')
const {getPath, errorHandler} = require('../helper')

gulp.task('images', _=>
  gulp.src(paths.images.src.map(f=> getPath(paths.src, f)))
    .pipe(flatten())
    .pipe(gulp.dest(getPath(paths.build, paths.images.build)))
)
