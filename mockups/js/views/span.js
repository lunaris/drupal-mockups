define([
  'jquery',
  'underscore',
  'backbone',

  'views/box'
], function($, _, Backbone, BoxView) {
  var SpanView = BoxView.extend({
    className: 'span',
  });

  return SpanView;
});
