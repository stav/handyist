module.exports = function (config) {
  config.setServerOptions({
    watch: ['_site/**/*.css']
  })

  config.addPassthroughCopy({
    'vendor/fa/_lib/webfonts': 'webfonts',
    'vendor/fa/_lib/css': 'css',
    'public/img': 'img',
  })

  return {
    dir: {
      input: 'src'
    }
  }
}
