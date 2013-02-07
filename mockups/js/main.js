require.config({
  paths: {
    'backbone': 'libraries/backbone/backbone.min',
    'jquery': '/misc/jquery',
    'underscore': 'libraries/underscore/underscore.min'
  }
});

require([
  'mockups'
], function(Mockups) {
  Mockups.initialise();
});
