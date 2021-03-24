const gulp = require('gulp')
const live = require('live-server')

const {paths, settings} = require('../config')
const {getPath} = require('../helper')

gulp.task('server', _=>{
  live.start({
    root: getPath(paths.build),
    port: settings.server.port,
  })
})

gulp.task('watch', _=>{
  gulp.watch(getPath(paths.src, paths.pug.src), gulp.series('pug'))
  gulp.watch(getPath(paths.src, paths.postcss.src), gulp.series('postcss'))
  gulp.watch(getPath(paths.src, paths.rollup.src), gulp.series('rollup'))
  gulp.watch(paths.images.src.map(f=> getPath(paths.src, f)), gulp.series('images'))
})
