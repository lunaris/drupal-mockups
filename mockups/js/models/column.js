define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var Column = Backbone.Model.extend({
    defaults: function() {
      return {
        offset: 0,
        width: 0
      }
    },
  });

  return Column;
});
