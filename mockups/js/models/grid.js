define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  function _isPositive(x) {
    return _.isFinite(x) && x > 0;
  }

  function _initializeSymmetric(columns) {
    this.set({ columns: columns, source: new String(columns) });

    var width = 100 / columns;
    for (var i = 0; i < columns; i++) {
      this.get('widths').push(width);
    }
  }

  var Grid = Backbone.Model.extend({
    defaults: function() {
      return {
        columns: 0,
        source: '',
        widths: new Array()
      }
    },

    initialize: function(source) {
      if (_isPositive(source)) {
        _initializeSymmetric.call(this, source);
      } else if (_.isString(source)) {
        if (source.indexOf(',') !== -1) {
          var self = this;

          var multiples = new Array();
          var singleColumns = 0;
          var columns = 0;

          _.each(source.split(','), function(multiple) {
            var multiple = parseInt(multiple);
            if (_isPositive(multiple)) {
              multiples.push(multiple);
              singleColumns += multiple;
              columns++;
            }
          });

          var singleColumnWidth = 100 / singleColumns;
          _.each(multiples, function(multiple) {
            self.get('widths').push(singleColumnWidth * multiple);
          });

          self.set({
            columns: columns,
            source: multiples.join(', ')
          });
        } else {
          var columns = parseInt(source);
          if (_isPositive(columns)) {
            _initializeSymmetric.call(this, columns);
          }
        }
      }
    }
  });

  return Grid;
});
