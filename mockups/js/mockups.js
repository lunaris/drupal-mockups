define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var initialise = function() {
    console.log("Really?");
    console.log("This will never work");
  }

  return {
    initialise: initialise
  }
});
