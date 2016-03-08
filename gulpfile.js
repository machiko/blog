var elixir = require('laravel-elixir');
var paths = {
	'js': {
		'jquery': './node_modules/jquery/dist/jquery.js',
		'bootstrap': './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
	}
};

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix
    .sass(['app.scss'], 'resources/assets/css/app.css')
    .styles(['bootstrap.css', 'bootstrap-material-design.css', 'ripples.css', 'material.css', 'app.css'])
    .scripts(['jquery.js', 'bootstrap.js', 'material.min.js', 'bootstrap-mdl.js', 'ripples.js', 'app.js'])
    .version(['css/all.css', 'js/all.js']);
});
