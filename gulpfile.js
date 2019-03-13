var gulp = require('gulp');
var sass = require('gulp-sass');
var merge = require('gulp-merge-json');

var jsonConcat = require('gulp-json-concat');


gulp.task('sass', function(){
  return gulp.src('src/index.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('src/'))
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('src/*.scss',['sass']);
});


gulp.task('json',function() {
  gulp.src('./*.json')
  .pipe(merge({
    concatArrays: true,
  }))
  .pipe(gulp.dest('./dist'));
});

 
gulp.task('json', function () {
  return gulp.src('db/**/*.json')
    .pipe(jsonConcat('db.json',function(data){
      return new Buffer(JSON.stringify(data));
    }))
    .pipe(gulp.dest('dist/json'));
});