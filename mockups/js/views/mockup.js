define([
  'jquery',
  'underscore',
  'backbone',

  'models/mockup',

  'views/column-set'
], function($, _, Backbone, Mockup, ColumnSetView) {
  var MockupView = Backbone.View.extend({
    el: $('.mockups'),
    render: function() {
      var columnSet = this.model.get('columnSet');
      var columnSetView = new ColumnSetView({ model: columnSet });

      columnSetView.render();
    }
  });

  return MockupView;
});
