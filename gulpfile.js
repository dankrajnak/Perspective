var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');


gulp.task('default', ['js']);

gulp.task('build', function () {
    return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('build'));
});

gulp.task('buildAll', function(){
    return gulp.src(['src/**/!(main)*.js', 'src/main.js'])
        .pipe(concat('all.js'))    
        .pipe(babel())
        .pipe(gulp.dest('build'));
})

gulp.task('dist', function(){
    return gulp.src(['vendor/**/*.js', 'build/all.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
})

gulp.task('watch', function(){
    runSequence('build', 'buildAll', 'dist');
    gulp.watch('src/**/*.js', function(){
        runSequence('build', 'buildAll', 'dist');
    });
})