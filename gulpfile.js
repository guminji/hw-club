/**
 * Created by guminji on 2018/3/13.
 */
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),
    watch = require('gulp-watch');

//定义一个testLess任务（自定义任务名称）
gulp.task('less', function () {
    gulp.src('less/*.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('css')); //将会在src/css下生成index.css
});

gulp.task('default',['testLess', 'elseTask']); //定义默认任务
gulp.task('watch', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    return watch('less/*.less', function () {
        gulp.start('less')
    });
});
