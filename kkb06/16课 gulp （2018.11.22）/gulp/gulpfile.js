const gulp=require('gulp');
const less=require('gulp-less');
const sourcemaps=require('gulp-sourcemaps');
const concat=require('gulp-concat');
const cssmin=require('gulp-cssmin');

gulp.task('less', ()=>{
  return gulp
    .src(['./src/less/**/*.less'])
    .pipe(sourcemaps.init())
    .pipe(concat('main.less.min.css'))
    .pipe(less())
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('default', ['less']);
