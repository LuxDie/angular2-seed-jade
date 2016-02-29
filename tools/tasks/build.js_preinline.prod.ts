import {join} from 'path';
import {APP_SRC, TMP_DIR} from '../config';

export = function buildJs_preinlineProd(gulp, plugins) {
  return function () {
    return gulp.src([
        join(APP_SRC, '**', '*.ts'),
        '!' + join(APP_SRC, '**/*.spec.ts'),
        '!' + join(APP_SRC, '**/*.e2e.ts')
      ])
      .pipe(gulp.dest(TMP_DIR));
  };
}
