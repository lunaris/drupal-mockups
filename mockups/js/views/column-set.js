define([
  'jquery',
  'underscore',
  'backbone',

  'models/column-set'
], function($, _, Backbone, ColumnSet) {
  var ColumnSetView = Backbone.View.extend({
    el: $('.mockups'),
    render: function() {
      var $columnSet = $('<div class="column-set" />');

      _.each(this.model.get('widths'), function(width) {
        $('<div class="column"/>').css({
          width: width + '%'
        }).appendTo($columnSet);
      });

      $columnSet.appendTo(this.$el);
    }
  });

  return ColumnSetView;
});
