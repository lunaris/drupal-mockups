define([
  'underscore',
  'backbone',

  'models/grid'
], function(_, Backbone, Grid) {
  var MockupModel = Backbone.Model.extend({
    defaults: function() {
      return {
        grid: new Grid()
      }
    },

    initialize: function(source) {
      this.set({ grid: new Grid(source) });
    }
  });

  return MockupModel;
});
