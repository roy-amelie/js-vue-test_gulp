const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

function defaultTask(cb) {
    gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
    cb();
  }
  
  exports.default = defaultTask