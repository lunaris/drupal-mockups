define([
  'underscore',
  'backbone',

  'models/column-set'
], function(_, Backbone, ColumnSet) {
  var MockupModel = Backbone.Model.extend({
    defaults: function() {
      return {
        columnSet: new ColumnSet()
      }
    },

    initialize: function(source) {
      this.set({ columnSet: new ColumnSet(source) });
    }
  });

  return MockupModel;
});
