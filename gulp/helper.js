const path = require('path')
const root = path.dirname(__dirname)

module.exports = {
  getPath: (...xs)=> path.resolve(path.join(root, ...xs)),
  errorHandler: e=>{
    process.stderr.write(e.message + '\n')
  },
}
