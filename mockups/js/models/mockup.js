define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var MockupModel = Backbone.Model.extend({
    defaults: {
      columns: 12
    }
  });

  return MockupModel;
});
