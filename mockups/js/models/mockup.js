define([
  'underscore',
  'backbone',

  'models/grid',
  'models/span'
], function(_, Backbone, Grid, Span) {
  var Mockup = Backbone.Model.extend({
    defaults: function() {
      return {
        grid: new Grid(),
        spans: new Array()
      }
    },

    initialize: function(source) {
      this.set({ grid: new Grid(source) });
    },

    addSpan: function(span, location) {
      var columns = this.get('grid').get('columns');
      var offset = columns[location - 1].get('offset');

      var width = 0;
      for (var i = 0; i < span; i++) {
        width += columns[location - 1 + i].get('width');
      }

      this.get('spans').
        push(new Span({ offset: offset, width: width }));
    }
  });

  return Mockup;
});
