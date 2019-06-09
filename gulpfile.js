const { watch } = require('gulp');
const browserSync = require('browser-sync');

exports.default = reload;

function reload() {
  browserSync.init({
    server: './'
  });

  watch('./*').on('change', browserSync.reload);
}
