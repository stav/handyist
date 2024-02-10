module.exports = function (config) {
  config.setServerOptions({
    watch: ['dist/**/*.css']
  })

  config.addPassthroughCopy({
    'public/img': 'img',
    'vendor/google': '/', // https://search.google.com/search-console
    'vendor/fa/_lib/css': 'css',
    'vendor/fa/_lib/webfonts': 'webfonts',
  })

  return {
    dir: {
      input: 'src',
      output: 'dist',
    }
  }
}
