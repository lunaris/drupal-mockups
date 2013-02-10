define([
  'jquery',
  'underscore',
  'backbone',

  'models/box'
], function($, _, Backbone, Box) {
  var BoxView = Backbone.View.extend({
    tagName: 'div',
    className: 'box',

    initialize: function() {
      _.bindAll('render');
    },

    render: function() {
      this.$el.css({
        left: this.model.get('offset') + '%',
        position: 'absolute',
        top: 0,
        width: this.model.get('width') + '%'
      });

      return this;
    }
  });

  return BoxView;
});
