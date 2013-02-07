define([
  'underscore',
  'backbone',

  'models/column'
], function(_, Backbone, Column) {
  function _isPositive(x) {
    return _.isFinite(x) && x > 0;
  }

  function _initializeSymmetric(columnCount) {
    this.set({
      columnCount: columnCount,
      source: new String(colummCount)
    });

    var width = 100 / columnCount;
    for (var i = 0; i < columnCount; i++) {
      this.get('columns').
        push(new Column({ offset: i * width, width: width }));
    }
  }

  var Grid = Backbone.Model.extend({
    defaults: function() {
      return {
        columns: new Array(),
        columnCount: 0,
        source: '',
      }
    },

    initialize: function(source) {
      if (_isPositive(source)) {
        _initializeSymmetric.call(this, source);
      } else if (_.isString(source)) {
        if (source.indexOf(',') !== -1) {
          var self = this;

          var multiples = new Array();
          var singleColumnCount = 0;
          var columnCount = 0;

          _.each(source.split(','), function(multiple) {
            var multiple = parseInt(multiple);
            if (_isPositive(multiple)) {
              multiples.push(multiple);
              singleColumnCount += multiple;
              columnCount++;
            }
          });

          var singleColumnWidth = 100 / singleColumnCount;
          var offset = 0;
          _.each(multiples, function(multiple) {
            var width = singleColumnWidth * multiple;

            self.get('columns').
              push(new Column({ offset: offset, width: width }));

            offset += width;
          });

          self.set({
            columnCount: columnCount,
            source: multiples.join(', ')
          });
        } else {
          var columnCount = parseInt(source);
          if (_isPositive(columnCount)) {
            _initializeSymmetric.call(this, columnCount);
          }
        }
      }
    }
  });

  return Grid;
});
