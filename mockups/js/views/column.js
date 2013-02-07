define([
  'jquery',
  'underscore',
  'backbone',

  'models/column'
], function($, _, Backbone, Column) {
  var ColumnView = Backbone.View.extend({
    tagName: 'div',
    className: 'column',

    initialize: function() {
      _.bindAll('render');
    },

    render: function() {
      this.$el.css({ width: this.model.get('width') + '%' });
      return this;
    }
  });

  return ColumnView;
});
