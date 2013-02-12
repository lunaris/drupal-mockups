define [
  'underscore'
  'backbone'

  'models/column'
], (_, Backbone, Column) ->
  _isPositive = (x) ->
    return (_.isFinite x) and (x > 0)

  _symmetricColumns = (columnCount) ->
    1 for i in _.range columnCount

  _initialize = (columns, gutterSource) ->
    multiples = []
    singleColumnCount = columnCount = 0

    _.each columns, (column) ->
      multiple = parseInt column
      if _isPositive multiple
        multiples.push multiple
        singleColumnCount += multiple
        columnCount++

    gutter = parseFloat gutterSource
    gutter = if _isPositive gutter then gutter else 0

    gutterColumnCount = gutter * (columnCount - 1)
    singleColumnWidth = 100 / (singleColumnCount + gutterColumnCount)
    gutterWidth = gutter * singleColumnWidth

    @columns = []
    offset = 0

    _.each multiples, (multiple) =>
      width = singleColumnWidth * multiple

      @columns.push new Column
        offset: offset
        width: width

      offset += width + gutterWidth

    @columnCount = columnCount
    @gutter = gutterWidth

    @set
      columns: multiples.join ', '
      gutter: gutterSource

  Grid = Backbone.Model.extend
    defaults: ->
      columns: '12'
      gutter: '.1'

    initialize: ->
      columnsSource = @get 'columns'
      if _isPositive columns
        columns = _symmetricColumns columnsSource
      else if _.isString columnsSource
        if (columnsSource.indexOf ',') isnt -1
          columns = columnsSource.split ','
        else
          columnCount = parseInt columnsSource
          if _isPositive columnCount
            columns = _symmetricColumns columnCount

      columns ?= _symmetricColumns(12)
      _initialize.call @, columns, @get 'gutter'
