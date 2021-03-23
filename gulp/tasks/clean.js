const gulp = require('gulp')
const rimraf = require('rimraf')

const {paths} = require('../config')
const {getPath} = require('../helper')

gulp.task('clean', f=> rimraf(paths.build, f))
