const eslint = require('eslint')
const path = require('path')
const pkg = require('./package.json')

module.exports = {
  bugs: pkg.bugs.url,
  cmd: 'lint',
  cwd: '',
  eslint: eslint,
  eslintConfig: { configFile: path.join(__dirname, 'eslintrc.json') },
  homepage: pkg.homepage,
  tagline: 'Honesty in small things is not a small thing.',
  version: pkg.version
}