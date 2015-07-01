'use strict';

var gulp = require('gulp'),
	mocha = require('gulp-mocha'),
	eslint = require('gulp-eslint'),
	jade = require('gulp-jade'),
	path = require('path'),
	clean = require('gulp-clean'),
  gutil = require('gulp-util'),
  bower = require('bower'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  minifyCss = require('gulp-minify-css'),
  rename = require('gulp-rename'),
  sh = require('shelljs');
 

gulp.task('default', ['test', 'sass'], function () {
    console.log('READDDDY TO RUMMMMBLE')
});

var paths = {
  sass: ['./app/scss/**/*.scss']
};

gulp.task('sass', function(done) {
  gulp.src('./app/scss/ionic.app.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./app/www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./app/www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});





gulp.task('test', ['lint'], function() {
	console.log('*****TESTING*****');
  return gulp.src(['test/*.js'], { read: false })
    .pipe(mocha({
      reporter: 'spec',
      globals: {
      	chai: require('chai'),
        assert: require('chai').assert,
        expect: require('chai').expect,
        should: require('chai').should()
      }
    }));
});


gulp.task('lint', function () {
	console.log('*****LINTING*****');
    return gulp.src(['server/**/*.js', 'app/www/js/**/*.js', 'test/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});


gulp.task('sync', function() {
    browserSync.init({
        server: {
            baseDir: "./server/"
        }
    });
});


gulp.task('clean', function () {
    return gulp.src('./dist', {read: false})
        .pipe(clean());
});


// gulp.task('compile', ['clean'], function() {
//   gulp.src('./client/assets/css/*.less')
//       .pipe(less({
//         paths: [ path.join(__dirname, 'less', 'includes') ]
//       }))
//       .pipe(gulp.dest('./dist/css'));

//   gulp.src('./client/**/*.jade')
//     .pipe(jade())
//     .pipe(gulp.dest('./dist/'))
// });



gulp.task('integrate', function() {
	console.log('\n');
	console.log('*****DEV TEAM TASKS******');
	console.log('1. ensure that you have latest known-good code. ("git pull --rebase upstream master")');
	console.log('2. make sure git status is clean');
	console.log('3. build on your box ("gulp")');
	console.log('4. push to YOUR repository ("git push origin staging")');
  console.log('5. Create pull request to STAGING branch of upstream repo');
	console.log('\n');
	console.log('*****SCRUM MASTER TASKS******')
	console.log('6. build on integrated box')
	console.log('\ta. walk to integration box ("git checkout staging")');
	console.log('\tb. git pull origin staging');
	console.log('\tc. gulp');
	console.log('\td. If gulp fails, stop and start over');
	console.log('7. git checkout master');
	console.log('8. git merge staging --no-ff --log');
	console.log('9. merge into master branch in remote repo ("git push origin master"')
	console.log('10. switch back to staging');
});