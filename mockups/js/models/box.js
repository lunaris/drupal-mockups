define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var Box = Backbone.Model.extend({
    defaults: function() {
      return {
        offset: 0,
        width: 0
      }
    },
  });

  return Box;
});
