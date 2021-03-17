let mix = require('laravel-mix');

mix.setPublicPath('./dist')
  .sass('src/scss/index.scss', 'dist/css/')
  .sass('src/scss/privacy.scss', 'dist/css/')
  .options({
    processCssUrls: false
  })
  .copy('src/scss/fonts/poppins/*.*', './dist/fonts/poppins/')
  .copy('src/*.html', './dist/')
  .copy('src/static/*.*', './dist/')
  .copy('src/images/*.*', './dist/images/')
  .browserSync({
    server: {
      baseDir: "./dist",
      index: "index.html"
    },
    files: [
      'scss/**/*.scss',
      '**/*.html'
    ]
  });
