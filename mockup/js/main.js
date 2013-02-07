require.config({
  paths: {
    'backbone': 'libraries/backbone/backbone.min',
    'jquery': '/misc/jquery',
    'underscore': 'libraries/underscore/underscore.min'
  }
});

require([
  'mockup'
], function(Mockup) {
  Mockup.initialise();
});
