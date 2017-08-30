var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync');


gulp.task('deleteDistFolder', function(){
    return del('./docs');
});

gulp.task('previewDist', function(){
   
    browserSync.init({
        notify: false,
        server: {
            baseDir: 'docs'
        }
    })
});

gulp.task('copyInonsFolder', ['deleteDistFolder'], function(){
   return gulp.src('./app/assets/images/icons/**/*')
            .pipe(gulp.dest('./docs/assets/images/icons'));
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function(){
    var pathToCopy = [
        "./app/**",
        "!./app/assets/images/**",
        "!./app/assets/scripts/**",
        "!./app/assets/styles/**",
        "!./app/temp",
        "!./app/temp/**"
    ]
    
   return gulp.src(pathToCopy) 
            .pipe(gulp.dest('./docs'));
});

gulp.task('optimizeImages', ['deleteDistFolder', 'styles', 'scripts'], function(){
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
            .pipe(imagemin({
                progressive: true, // opatmizes jpg images even further
                interlaced: true, // for gif images
                multipass: true // for svg files
            }))
            .pipe(gulp.dest('./docs/assets/images'));
})

gulp.task('usemin', ['deleteDistFolder'], function(){
   return gulp.src('./app/index.html')
            .pipe(usemin({
                css: [function(){ return rev() }, function(){ return cssnano() }],
                js: [function (){ return rev() }, function(){ return uglify() }]
            }))
            .pipe(gulp.dest('./docs'));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'usemin', 'copyInonsFolder']);

