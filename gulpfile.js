/**
 * Created by lisheng on 15/6/28.
 */
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
	return gulp.src('stylesheets/screen.css')
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('dist/assets/css'))

		//.pipe(sass({ style: 'expanded' }))
		//.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		//.pipe(gulp.dest('dist/assets/css'))
		//.pipe(rename({suffix: '.min'}))
		//.pipe(minifycss())
		//.pipe(gulp.dest('dist/assets/css'))
		//.pipe(notify({ message: 'Styles task complete' }));
});