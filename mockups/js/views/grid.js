define([
  'jquery',
  'underscore',
  'backbone',

  'models/grid',

  'views/column'
], function($, _, Backbone, Grid, ColumnView) {
  var GridView = Backbone.View.extend({
    tagName: 'div',
    className: 'grid',

    render: function() {
      var self = this;

      self.$el.empty();
      _.each(self.model.get('columns'), function(column) {
        self.$el.append(new ColumnView({ model: column }).render().el);
      });

      return self;
    }
  });

  return GridView;
});
