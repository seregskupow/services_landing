const {
	src,
	dest,
	parallel,
	series,
	watch
} = require('gulp');

// Load plugins
const webpack = require('webpack-stream');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const browsersync = require('browser-sync').create();

const styleDest = './dist/css/';
const jsDest = './dist/js/';
const imgDest = './dist/img/';
const libsDest = './dist/libs/';
// Clean assets

function clear() {
	return src('./dist/*', {
					read: false
			})
			.pipe(clean());
}

// JS function 

function js() {
	const source = './src/js/*.js';

	return src(source)
			.pipe(changed(source))
			.pipe(concat('bundle.js'))
			.pipe(uglify())
			.pipe(rename({
					extname: '.min.js'
			}))
			.pipe(dest(jsDest))
			.pipe(browsersync.stream());
}

function libs(){
	const source = './src/libs/**/*';

	return src(source)
		.pipe(dest(libsDest))
}

// CSS function 

function css() {
	const source = './src/styles/main.scss';

	return src(source)
			.pipe(changed(source))
			.pipe(sass())
			.pipe(autoprefixer({
					overrideBrowserslist: ['last 2 versions'],
					cascade: false
			}))
			.pipe(rename({
					extname: '.min.css'
			}))
			.pipe(cssnano())
			.pipe(dest(styleDest))
			.pipe(browsersync.stream());
}

// Optimize images

function img() {
	return src('./src/img/**/*')
			.pipe(imagemin())
			.pipe(dest(imgDest));
}

function reload(done) {
  browsersync.reload();
  done();
}


// Watch files

function watchFiles() {
	watch('./src/styles/*', css);
	watch('./src/js/*', js);
	watch('./src/img/*', img);
	watch('./*.html',reload);
	watch('./src/libs/*', libs);
}

// BrowserSync

function browserSync() {
	browsersync.init({
			server: {
					baseDir: './'
			},
			port: 3000
	});
}

// Tasks to define the execution of the functions simultaneously or in series

exports.watch = parallel(watchFiles, browserSync);
exports.default = series(clear, parallel(js, css, img, libs));
	