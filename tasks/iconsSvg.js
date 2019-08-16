// sprite.icon.svg

const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin'); // Minify SVG
const cheerio = require('gulp-cheerio'); // manipulate XML files
const replace = require('gulp-replace'); // String Replace
const gulpIf = require('gulp-if');
const plumber = require('gulp-plumber');


module.exports = () => (
  gulp.src('app/assets/icons/svg/**/*.svg')
  .pipe(svgmin({
    js2svg: {
      pretty: true
    }
  }))
  // remove all fill, style and stroke declarations in out shapes
  .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: {xmlMode: true}
  }))

  // cheerio plugin create unnecessary string '&gt;', so replace it.
  .pipe(replace('&gt;', '>'))

  .pipe(plumber())

  // build svg sprite
  .pipe(svgSprite({
    mode: {
      symbol: {
        dest: '.',
        bust: false,
        sprite: 'sprite.svg',
        layout: 'vertical',
        render: {
          scss: {
            dest: 'svg-size.scss',
            template: 'svg-sprite-template'
          }
        }
      }
    }
  }))
  .pipe(gulpIf('*.svg', gulp.dest('public/assets/img'), gulp.dest('app/styles/helpers')))
);
