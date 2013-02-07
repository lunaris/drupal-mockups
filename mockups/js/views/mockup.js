define([
  'jquery',
  'underscore',
  'backbone',

  'models/mockup',

  'views/column-set'
], function($, _, Backbone, Mockup, ColumnSetView) {
  var MockupView = Backbone.View.extend({
    el: $('.mockups'),

    initialize: function() {
      _.bindAll(this, 'render', 'renderColumnSet');
    },

    render: function() {
      this.renderColumnSet();
    },

    renderColumnSet: function() {
      var columnSet = this.model.get('columnSet');
      var columnSetView = new ColumnSetView({ model: columnSet });

      this.$el.html(columnSetView.render().el);
    }
  });

  return MockupView;
});
