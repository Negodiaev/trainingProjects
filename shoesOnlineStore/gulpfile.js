'use strict';

var gulp        = require('gulp'),
		watch       = require('gulp-watch'),
		prefixer    = require('gulp-autoprefixer'),
		uglify      = require('gulp-uglify'),
		sass        = require('gulp-sass'),
		sourcemaps  = require('gulp-sourcemaps'),
		rigger      = require('gulp-rigger'),
		cleanCSS    = require('gulp-clean-css'),
		imagemin    = require('gulp-imagemin'),
		pngquant    = require('imagemin-pngquant'),
		rimraf      = require('rimraf'),
		browserSync = require('browser-sync'),
		reload      = browserSync.reload;

var path = {
	build: {
		html: 'build/',
		js: 'build/js/',
		css: 'build/css/',
		img: 'build/images/',
		fonts: 'build/fonts/',
		upload: 'build/upload',
		otherImages: 'build/',
		myScss: 'build/scss/'
	},
	src: {
		html: 'src/**/*.html',
		js: 'src/js/**/*.js',
		style: 'src/scss/style.scss',
		img: 'src/images/**/*.*',
		fonts: 'src/fonts/**/*.*',
		upload: 'src/upload/**/*.*',
		otherImages: 'src/*.+(png|jpg|jpeg|gif|ico)',
		myScss: 'src/scss/**/*.*'
	},
	watch: {
		html: 'src/**/*.html',
		js: 'src/js/**/*.js',
		style: 'src/scss/**/*.scss',
		img: 'src/images/**/*.*',
		fonts: 'src/fonts/**/*.*',
		upload: 'src/upload/**/*.*',
		otherImages: 'src/*.+(png|jpg|jpeg|gif|ico)',
		myScss: 'src/scss/**/*.*'
	},
	clean: './build'
};

var config = {
	server: {
		baseDir: "./build"
	},
	// tunnel: true,
	host: 'localhost',
	port: 9000,
	logPrefix: "Alex",
	notify: false
};

gulp.task('webserver', function () {
	browserSync(config);
});

gulp.task('clean', function (cb) {
	rimraf(path.clean, cb);
});

gulp.task('html:build', function () {
	gulp.src(path.src.html) 
		.pipe(rigger())
		.pipe(gulp.dest(path.build.html))
		.pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
	gulp.src(path.src.js)
		.pipe(rigger())
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.build.js))
		.pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
	gulp.src(path.src.style)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(prefixer())
		.pipe(cleanCSS())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.build.css))
		.pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
	gulp.src(path.src.img)
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()],
			interlaced: true
		}))
		.pipe(gulp.dest(path.build.img))
		.pipe(reload({stream: true}));
});

gulp.task('upload:build', function () {
	gulp.src(path.src.upload)
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()],
			interlaced: true
		}))
		.pipe(gulp.dest(path.build.upload))
		.pipe(reload({stream: true}));
});

gulp.task('otherImages:build', function () {
	gulp.src(path.src.otherImages)
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()],
			interlaced: true
		}))
		.pipe(gulp.dest(path.build.otherImages))
		.pipe(reload({stream: true}));
});

gulp.task('myScss:build', function() {
	gulp.src(path.src.myScss)
		.pipe(gulp.dest(path.build.myScss))
});

gulp.task('fonts:build', function() {
		gulp.src(path.src.fonts)
			.pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
	'html:build',
	'js:build',
	'style:build',
	'fonts:build',
	'image:build',
	'upload:build',
	'otherImages:build',
	'myScss:build'
]);


gulp.task('watch', function(){
	watch([path.watch.html], function(event, cb) {
		gulp.start('html:build');
	});
	watch([path.watch.style], function(event, cb) {
		gulp.start('style:build');
	});
	watch([path.watch.js], function(event, cb) {
		gulp.start('js:build');
	});
	watch([path.watch.img], function(event, cb) {
		gulp.start('image:build');
	});
	watch([path.watch.fonts], function(event, cb) {
		gulp.start('fonts:build');
	});
	watch([path.watch.upload], function(event, cb) {
		gulp.start('upload:build');
	});
	watch([path.watch.otherImages], function(event, cb) {
		gulp.start('otherImages:build');
	});
	watch([path.watch.myScss], function(event, cb) {
		gulp.start('myScss:build');
	});
});


gulp.task('default', ['build', 'webserver', 'watch']);