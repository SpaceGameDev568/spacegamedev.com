/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    require('cssnano'),
  ]
}

module.exports = config