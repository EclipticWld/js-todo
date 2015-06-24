var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

// links in project
var path = {
    src: {
       html: 'app/*.html',
        css: 'app/*.css',
        js: 'app/*.js'
    },
    watch: {
        html: 'app/*.html',
        css: 'app/*.css',
        js: 'app/*.js'
    }
};

// Server configuration
var serverConfig = {
    server: {baseDir: "./app"},
    watchOptions: {debounceDelay: 1000},
    tunnel: false,
    host: 'localhost',
    port: 3003,
    logPrefix: "NHK_Says:"
};

// Run web server
gulp.task('serve', function () {
    browserSync.init(serverConfig);
});

// dev reload
gulp.task('html:app', function () {
    gulp.src(path.src.html)
        .pipe(reload({stream:true}));
});
gulp.task('css:app', function () {
    gulp.src(path.src.css)
        .pipe(reload({stream:true}));
});
gulp.task('js:app', function () {
    gulp.src(path.src.js)
        .pipe(reload({stream:true}));
});

gulp.task('dev', ['html:app', 'css:app', 'js:app']);

gulp.task('watch', function () {
    gulp.watch([path.watch.html], function(event, cb) {
        gulp.start('html:app');
    });
    gulp.watch([path.watch.css], function(event, cb) {
        gulp.start('css:app');
    });
    gulp.watch([path.watch.js], function(event, cb) {
        gulp.start('js:app');
    });
});

gulp.task('default', ['dev', 'serve', 'watch']);
