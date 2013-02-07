define([
  'jquery',
  'underscore',
  'backbone',

  'models/mockup',

  'views/grid'
], function($, _, Backbone, Mockup, GridView) {
  var MockupView = Backbone.View.extend({
    el: $('.mockups'),

    initialize: function() {
      _.bindAll(this, 'render', 'renderGrid');
    },

    render: function() {
      this.renderGrid();
    },

    renderGrid: function() {
      var grid = this.model.get('grid');
      var gridView = new GridView({ model: grid });

      this.$el.html(gridView.render().el);
    }
  });

  return MockupView;
});
