var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    include      = require('gulp-include'),
    sourcemaps   = require('gulp-sourcemaps'),
    notify       = require("gulp-notify")


gulp.task('scss', function() {
    gulp.src('src/scss/*.scss')
        .pipe( sourcemaps.init())
        .pipe(sass({errLogToConsole: true}))

        .pipe( sourcemaps.write('.'))

        .pipe( gulp.dest('css/'))
        .pipe( notify("scss compiled"))
        .pipe( reload({stream:true}));
});


gulp.task('js', function() {
    gulp.src('src/js/main.js')
        .pipe(include())
        .on('error', console.log)
        .pipe(gulp.dest('js/'))
        .pipe(notify("js compiled"))
        .pipe(reload({stream:true}));
});


gulp.task('copy', function() {
    gulp.src('src/img/**/*')
        .pipe(gulp.dest('img/'))
        .pipe(reload({stream:true}));
        
    gulp.src('src/root/**/*')
        .pipe(gulp.dest('/'))
        .pipe(reload({stream:true}));
});


gulp.task('done', function () {
    notify("gulp run successful");
});

// use task
gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', ['scss']);
    gulp.watch('src/js/**/*', ['js']);
});

gulp.task('default',['scss','js','copy','done']);