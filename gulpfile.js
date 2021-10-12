const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();


// où j'ai trouvé mes functions
// https://medium.com/swlh/setting-up-gulp-4-0-2-for-bootstrap-sass-and-browsersync-7917f5f5d2c5




//compile scss into css
// j'apelle ma function style elle créé un fichier style et le mets dans le dossier css
function style() {
    return gulp.src('scss/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
}



// j'apelle ma function watch pour que mes mod en js, html, scss se fasse automatiquement
function watch() {
    browserSync.init({
        server: {
           baseDir: "./",
        //    repertoir auquel je me trouve
           index: "/index.html"
        }
    });
    gulp.watch('./scss/*.scss', style)
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/*.js').on('change', browserSync.reload);
}
exports.style = style;
exports.default = watch;