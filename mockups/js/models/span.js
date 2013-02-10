define([
  'underscore',
  'backbone',

  'models/box'
], function(_, Backbone, Box) {
  var Span = Box.extend({
    initialize: function() {
      this.constructor.__super__.initialize(this, _.rest(arguments));
    }
  });

  return Span;
});
