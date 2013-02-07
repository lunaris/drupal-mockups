define([
  'jquery',
  'underscore',
  'backbone',

  'models/mockup'
], function($, _, Backbone, Mockup) {
  var MockupView = Backbone.View.extend({
    el: $('.mockups'),
    render: function() {
      console.log(this.model.get('columnSet'));
      this.$el.append('Test: ' + this.model.get('columnSet').get('columns'));
    }
  });

  return MockupView;
});
