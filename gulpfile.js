// required
var gulp  = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer'); // adds vendor prefixes

// Sass
var input = './sass/**/*.scss';
var output = '.';
var sassOptions = {
	errLogToConsole: true,
	outputStyle: 'expanded'
};


gulp.task('build', function () {
	return gulp
		.src(input)
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(gulp.dest(output));
});


gulp.task('watch', function() {
  gulp.watch(input, ['build']);
});