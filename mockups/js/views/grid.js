define([
  'jquery',
  'underscore',
  'backbone',

  'models/grid'
], function($, _, Backbone, Grid) {
  var GridView = Backbone.View.extend({
    tagName: 'div',
    className: 'grid',

    render: function() {
      var self = this;

      self.$el.empty();
      _.each(self.model.get('widths'), function(width) {
        $('<div class="column" />').
          css({ width: width + '%' }).
          appendTo(self.$el);
      });

      return self;
    }
  });

  return GridView;
});
