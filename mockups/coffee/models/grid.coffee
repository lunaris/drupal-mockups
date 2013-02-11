define [
  'underscore'
  'backbone'

  'models/column'
], (_, Backbone, Column) ->
  _isPositive = (x) ->
    return (_.isFinite x) and (x > 0)

  _symmetricColumns = (columnCount) ->
    1 for i in _.range columnCount

  _initialize = (columns, gutter) ->
    multiples = []
    singleColumnCount = columnCount = 0

    _.each columns, (column) ->
      multiple = parseInt column
      if _isPositive multiple
        multiples.push multiple
        singleColumnCount += multiple
        columnCount++

    gutter = parseFloat gutter
    gutter = if _isPositive gutter then gutter else 0

    gutterColumnCount = gutter * (columnCount - 1)
    singleColumnWidth = 100 / (singleColumnCount + gutterColumnCount)
    gutterWidth = gutter * singleColumnWidth

    offset = 0
    _.each multiples, (multiple) =>
      width = singleColumnWidth * multiple

      (@get 'columns').push new Column
        offset: offset
        width: width

      offset += width + gutterWidth

    @set
      columnCount: columnCount
      gutter: gutterWidth
      source: multiples.join ', '

  Grid = Backbone.Model.extend
    defaults: ->
      columns: []
      columnCount: 0
      gutter: 0
      source: ''

    initialize: (source) ->
      columns = _symmetricColumns(12)

      if _isPositive source
        columns = _symmetricColumns source
      else if _.isString source
        if (source.indexOf ',') isnt -1
          columns = source.split ','
        else
          columnCount = parseInt source
          if _isPositive columnCount
            columns = _symmetricColumns columnCount

      _initialize.call @, columns, 0.5
