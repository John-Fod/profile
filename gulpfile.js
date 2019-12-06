const babel = require('gulp-babel');
const browserSync = require('browser-sync');
const cleanCss = require('gulp-clean-css');
const gulp = require('gulp');
// const liveReload = require('gulp-livereload');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

const server = browserSync.create();

function copy() {
    return gulp.src([
        'app/*.html',
        'app/**/*.jpg'
    ])
    .pipe(gulp.dest('build'))
}

function processCss(){
    return gulp.src('app/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(cleanCss({compatibility: 'ie8'}))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('build/styles'));
}

function processJs(){
    return gulp.src('app/scripts/*.js')
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(uglify())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('build/scripts'));
}

function reload(done){
    server.reload();
    done();
}

function serve() {
    return server.init(
        {
            server: 'build',
            open: true,
            port: 3000
        }
    )
    // return browserSync.init({
    //     baseDir: './',
    //     server: 'build',
    //     open: false,
    //     port: 3000
    // });
}

function watch() {
    gulp.watch('app/scripts/*.js', gulp.series(processJs, reload));
    gulp.watch('app/styles/*.scss', gulp.series(processCss, reload));
    gulp.watch(['app/*.html', 'app/**/*.jpg'], gulp.series(copy, reload));
}


gulp.task('buildAndServe', gulp.series(copy, processCss, processJs, gulp.parallel(serve, watch)));
gulp.task('copy', copy);
gulp.task('processCss', processCss);
gulp.task('processJs', processJs);
gulp.task('reload', reload);
gulp.task('watch', watch);
