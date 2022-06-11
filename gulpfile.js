import gulp from 'gulp';
import browser from 'browser-sync';

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Reload

const reload = (done) => {
  browser.reload();
  done();
}

const watcher = () => {
  gulp.watch('source/*.html', gulp.series(reload));
}

// Default

export default gulp.series(
  server,
  watcher
);
