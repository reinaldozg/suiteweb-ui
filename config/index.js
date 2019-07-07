var path = require('path');

var rootDir = path.resolve("../");					// Root dir
var srcDir = path.resolve("../src");				// Source files
var destDir = path.resolve("../dist");				// Build destination
var npmDir =  path.resolve("../node_modules");		// Npm dir

var config = {
	rootDir: rootDir,
	srcDir: srcDir,
	destDir: destDir,
	npmDir: npmDir,
	port: 4000,
	paths: {}
};

// Vendor libs paths

//jquery.sparkline.js 	= usado para criar graficos em linha.
//flot.js 				= usado para criar graficos.
//jquery.validate.js	= usado para validar formulario.
//jquery.vmap.js		= usado para criar graficos de mapas.
//metisMenu.js			= usado para criar lista acordion.
//nprogress.js			= usado para criar barra de progresso.
//quill.js 				= usado para criar editor de texto personalizado.
//bootstrap-toolkit.js	= usado para criar paginas responsivas.
//Sortable.js			= usado para reordenar uma lista movendo o item com mouse.
//tether.js				= usado para facilitar o posicionamento fixo de um elemento ao outro.
//tinycolor.js 			= usado para manipular cores.
//dropzone.js			= usado para fazer upload de arquivos (arrasta e solta com visualização).
//jquery.touchSwipe.js	= usado para detectar manipulação em dispositivos touch.
//jquery.browser.js		= usado para detectar browser e a versão do mesmo.
//popper.js				= usado para manipular eventos
//raphael.js			= usado para simplificar o trabalho com graficos vetoriais.
//morris.js				= usado para criar graficos (muito bom)
config.paths.vendor = {
	scripts: [
		npmDir + '/jquery/dist/jquery.js',
		npmDir + '/jquery-validation/dist/jquery.validate.js',
		npmDir + '/metismenu/dist/metisMenu.js',
		npmDir + '/nprogress/nprogress.js',	
		npmDir + '/responsive-toolkit/dist/bootstrap-toolkit.js',	
		npmDir + '/tinycolor2/tinycolor.js',	
		npmDir + '/jquery-touchswipe/jquery.touchSwipe.js',
		npmDir + '/jquery.browser/dist/jquery.browser.js',
		npmDir + '/popper.js/dist/umd/popper.js',
		npmDir + '/bootstrap/dist/js/bootstrap.js',
		npmDir + '/morris.js/morris.js',
		npmDir + '/perfect-scrollbar/dist/perfect-scrollbar.js',
	//	npmDir + '/jquery-flot/jquery.flot.js',
	//	npmDir + '/jquery-flot/jquery.flot.resize.js',
	//	npmDir + '/jquery-flot/jquery.flot.pie.js',
	//	npmDir + '/jquery-flot/jquery.flot.time.js',
	//	npmDir + '/jquery.flot.tooltip/js/jquery.flot.tooltip.js',
	//	npmDir + '/jquery-sparkline/jquery.sparkline.js',
	//	npmDir + '/jqvmap/dist/jquery.vmap.js',
	//	npmDir + '/jqvmap/dist/maps/jquery.vmap.world.js',
	//	npmDir + '/quill/dist/quill.js',
	//	npmDir + '/sortablejs/Sortable.js',
	//	npmDir + '/tether/dist/js/tether.js',
	//	npmDir + '/dropzone/dist/dropzone.js',
	//	npmDir + '/raphael/raphael.js',
	],
	styles: [
		npmDir + '/animate.css/animate.css',
		npmDir + '/font-awesome/css/font-awesome.css',
		npmDir + '/jqvmap/dist/jqvmap.css',
		npmDir + '/metismenu/dist/metisMenu.css',
		npmDir + '/nprogress/nprogress.css',
		npmDir + '/dropzone/dist/dropzone.css',
		npmDir + '/quill/dist/quill.core.css',
		npmDir + '/quill/dist/quill.snow.css',
		npmDir + '/morris.js/morris.css',
		npmDir + '/bootstrap/dist/css/bootstrap.css',
		npmDir + '/perfect-scrollbar/css/perfect-scrollbar.css',
	],
	fonts: [
		npmDir + '/font-awesome/fonts/*'
	],
	assets: [],
};

// Application Paths
config.paths.app = {
	scripts: [
		srcDir + "/config.js",
		srcDir + "/**/!(_context|config|main|*-helper)*.js",
		srcDir + "/main.js",
		"!" + srcDir + "/_vendor/**"
	],
	styles: [
		srcDir + "/_main.scss",
		srcDir + "/**/!(_main|_variables|*-theme)*.scss",
	],
	themes: srcDir + "/**/*-theme.scss",
	templates: srcDir + "/**/*.hbs",
	pages: srcDir + "/**/*-page.hbs",
	layouts: srcDir + "/**/*-layout.hbs",
	helpers: [
		srcDir + "/**/*-helper.js",
		rootDir + '/node_modules/handlebars-layouts/index.js',
	],
	assets: srcDir + "/_assets/**/*" 
};


module.exports = config;
