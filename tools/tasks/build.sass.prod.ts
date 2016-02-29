import {join} from 'path';
import {APP_SRC, TMP_DIR} from '../config';

export = function buildSassProd(gulp, plugins, option) {
  return function () {
    return gulp.src(join(APP_SRC, '**', '*.scss'))
      .pipe(plugins.sass().on('error', plugins.sass.logError))
      .pipe(gulp.dest(TMP_DIR));
  };
}
