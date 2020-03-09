const glob = require('tiny-glob')
const fs = require('fs-extra')
const path = require('path')

module.exports = async () => {
  const baseDir = path.dirname(require.resolve('boxicons'))
  const sourceFiles = await glob('../svg/regular/*.svg', {cwd: baseDir, absolute: true})

  return sourceFiles.map(filename => {
    const match = filename.match(/bx-([^}]+)\.svg$/)
    return {
      originalName: match[1].trim(),
      source: fs.readFileSync(filename).toString(),
      pack: 'boxicons-regular',
      width: '24',
      height: '24',
    }
  })
}
