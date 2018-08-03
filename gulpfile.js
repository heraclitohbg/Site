var gulp = require('gulp');
var sass = require('gulp-sass');

var arq_scss = ['node_modules/bootstrap/scss/*.scss','src/scss/*.scss'];
var arq_css = 'src/css';

gulp.task('sass', function(){
    return gulp.src(arq_scss)
    .pipe(sass()) // converter sass em css
    .pipe(gulp.dest(arq_css));
});

gulp.task('watch', function(){
    gulp.watch([arq_scss],['sass']);
});

gulp.task('default',['sass','watch']);

