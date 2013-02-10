define([
  'jquery',
  'underscore',
  'backbone',

  'views/box'
], function($, _, Backbone, BoxView) {
  var ColumnView = BoxView.extend({
    className: 'column',
  });

  return ColumnView;
});
