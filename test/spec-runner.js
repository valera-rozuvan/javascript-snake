// Requirejs Configuration Options
require.config({
  // to set the default folder
  baseUrl: '../src/js',
  // paths: maps ids with paths (no extension)
  paths: {
      'jasmine': ['../../test/lib/jasmine'],
      'jasmine-html': ['../../test/lib/jasmine-html'],
      'jasmine-boot': ['../../test/lib/boot'],

      // Our specs
      'field-spec': '../../test/specs/field.spec',

      // Our library paths
      'init': 'init'
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

require(['jasmine-boot'], function () {
  require(['field-spec'], function(){
    console.log('About to trigger Jasmine...');
    window.onload();
    console.log('done');
  })
});
