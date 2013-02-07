require.config({
  paths: {
    backbone: 'libraries/backbone/backbone-min',
    underscore: 'libraries/underscore/underscore-min',
    jQuery: '/misc/jquery',
    templates: '../templates'
  }
});

require([
  'mockup'
], function(Mockup) {
  Mockup.initialise();
});
