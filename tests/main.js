// Requirejs Configuration Options
require.config({
	// to set the default folder
	baseUrl: '../app', 
	// paths: maps ids with paths (no extension)
	paths: {
		'jasmine': ['../tests/lib/jasmine'],
		'jasmine-html': ['../tests/lib/jasmine-html'],
		'jasmine-boot': ['../tests/lib/boot'],
		'specs': ['../specs']
	},
	// shim: makes external libraries compatible with requirejs (AMD)
	shim: {
		'jasmine-html': {
			deps : ['jasmine']
		},
		'jasmine-boot': {
			deps : ['jasmine', 'jasmine-html']
		}
	}
});

require(['jasmine-boot'], ()=>{
	require([
			'specs/base.spec',
			'specs/model.spec',
		], function(){
		// trigger Jasmine
		window.onload();
	})
});
