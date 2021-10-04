const postcss = require('gulp-postcss'); // postcss
const gulp = require('gulp');
const csswring = require('csswring'); // 压缩css
const stylus = require('gulp-stylus'); // 预处理器
const cssnext = require('postcss-cssnext'); // 尝鲜语法
// const autoprefixer = require('autoprefixer'); // 前缀兼容，已经被cssnext集成

function compile() {
  const processors = [
    // csswring,
    cssnext({
      browsers: ['last 2 version'],
    })
  ];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
}

gulp.task('css', compile);

gulp.task('watch:css', () => {
  gulp.watch(['./src/*.css'], compile);
})