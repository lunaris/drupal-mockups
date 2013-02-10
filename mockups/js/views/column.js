define([
  'jquery',
  'underscore',
  'backbone',

  'models/column',

  'views/box'
], function($, _, Backbone, Column, BoxView) {
  var ColumnView = BoxView.extend({
    className: 'column',

    render: function() {
      this.constructor.__super__.render.apply(this, _.rest(arguments));

      this.$el.css({
        padding: this.model.get('padding')
      });

      return this;
    }
  });

  return ColumnView;
});
