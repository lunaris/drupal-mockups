define([
  'jquery',
  'underscore',
  'backbone',

  'models/column-set'
], function($, _, Backbone, ColumnSet) {
  var ColumnSetView = Backbone.View.extend({
    tagName: 'div',
    className: 'column-set',

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

  return ColumnSetView;
});
