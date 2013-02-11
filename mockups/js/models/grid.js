define([
  'underscore',
  'backbone',

  'models/column'
], function(_, Backbone, Column) {
  function _isPositive(x) {
    return _.isFinite(x) && x > 0;
  }

  function _symmetricColumns(columnCount) {
    var columns = new Array();
    for (var i = 0; i < columnCount; i++) {
      columns.push(1);
    }

    return columns;
  }

  function _initialize(columns, gutter) {
    var self = this;

    var multiples = new Array();
    var singleColumnCount = 0;
    var columnCount = 0;

    _.each(columns, function(column) {
      var multiple = parseInt(column);
      if (_isPositive(multiple)) {
        multiples.push(multiple);
        singleColumnCount += multiple;
        columnCount++;
      }
    });

    var gutter = parseFloat(gutter);
    gutter = _isPositive(gutter) ? gutter : 0;

    var gutterColumnCount = gutter * (columnCount - 1);
    var singleColumnWidth = 100 / (singleColumnCount + gutterColumnCount);
    var gutterWidth = gutter * singleColumnWidth;

    var offset = 0;
    _.each(multiples, function(multiple) {
      var width = singleColumnWidth * multiple;

      self.get('columns').
        push(new Column({ offset: offset, width: width }));

      offset += width + gutterWidth;
    });

    self.set({
      columnCount: columnCount,
      gutter: gutterWidth,
      source: multiples.join(', ')
    });
  }

  var Grid = Backbone.Model.extend({
    defaults: function() {
      return {
        columns: new Array(),
        columnCount: 0,
        gutter: 0,
        source: '',
      }
    },

    initialize: function(source) {
      var columns = _symmetricColumns(12);

      if (_isPositive(source)) {
        columns = _symmetricColumns(source);
      } else if (_.isString(source)) {
        if (source.indexOf(',') !== -1) {
          columns = source.split(',');
        } else {
          var columnCount = parseInt(source);
          if (_isPositive(columnCount)) {
            columns = _symmetricColumns(columnCount);
          }
        }
      }

      _initialize.call(this, columns, 0.5);
    }
  });

  return Grid;
});
