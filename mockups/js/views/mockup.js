define([
  'jquery',
  'underscore',
  'backbone',

  'models/mockup'
], function($, _, Backbone, Mockup) {
  var MockupView = Backbone.View.extend({
    el: $('.mockups'),
    render: function() {
      this.$el.append('Test: ' + this.model.get('columns'));
    }
  });

  return MockupView;
});
