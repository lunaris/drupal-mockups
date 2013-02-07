define([
  'jquery',
  'underscore',
  'backbone',

  'models/mockup',
  'views/mockup'
], function($, _, Backbone, Mockup, MockupView) {
  var initialize = function() {
    var mockup = new Mockup('1, 3 ,2,5  , 6, 4');
    var mockupView = new MockupView({ model: mockup });
    mockupView.render();
  }

  return {
    initialize: initialize
  }
});
