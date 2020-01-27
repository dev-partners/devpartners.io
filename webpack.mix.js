let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('resources/js/app.js', 'js/')
    .sass('resources/scss/app.scss', 'css/')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')],
    })

if (mix.inProduction()) {
    mix.purgeCss({
        paths: ['./index.html', './js/components/', '_site'],
        folders: ['src'],
        extractorPattern: /[A-Za-z0-9-_:!\/]+/g
    });
}
