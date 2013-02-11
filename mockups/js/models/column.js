define([
  'underscore',
  'backbone',

  'models/box'
], function(_, Backbone, Box) {
  var Column = Box.extend({
    defaults: {
      padding: 0
    },

    initialize: function() {
      this.constructor.__super__.initialize.apply(this, _.rest(arguments));
    }
  });

  return Column;
});
