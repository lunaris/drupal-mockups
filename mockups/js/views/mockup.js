define([
  'jquery',
  'underscore',
  'backbone',

  'models/mockup',

  'views/grid',
  'views/span'
], function($, _, Backbone, Mockup, GridView, SpanView) {
  var MockupView = Backbone.View.extend({
    el: $('.mockups'),

    initialize: function() {
      _.bindAll(this, 'render', 'renderGrid', 'renderSpans');
    },

    render: function() {
      this.$el.empty();
      this.renderGrid();
      this.renderSpans();
    },

    renderGrid: function() {
      var grid = this.model.get('grid');
      var gridView = new GridView({ model: grid });

      this.$el.append(gridView.render().el);
    },

    renderSpans: function() {
      var spans = this.model.get('spans');

      var $spans = $('<div class="spans" />');
      _.each(spans, function(span) {
        var renderedSpan = new SpanView({ model: span }).render();
        $spans.append(renderedSpan.$el);
      });

      this.$el.append($spans);
    }
  });

  return MockupView;
});
