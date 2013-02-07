define([
  'jquery',
  'underscore',
  'backbone',

  'models/column-set',
  'models/mockup'
], function($, _, Backbone, ColumnSet, Mockup) {
  var MockupView = Backbone.View.extend({
    el: $('.mockups'),
    render: function() {
      var columnSet = new ColumnSet("1, 3,  2 , 5,6,  4");
      console.log(columnSet);
      this.$el.append('Test: ' + columnSet);
    }
  });

  return MockupView;
});
