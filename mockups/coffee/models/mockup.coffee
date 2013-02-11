define [
  'underscore'
  'backbone'

  'models/grid'
  'models/span'
], (_, Backbone, Grid, Span) ->
  Mockup = Backbone.Model.extend
    defaults: ->
      grid: new Grid
      spans: []

    initialize: (source) ->
      @set { grid: new Grid source }

    addSpan: (span, location) ->
      grid = @get 'grid'
      columns = grid.get 'columns'
      offset = columns[location - 1].get 'offset'

      width = (span - 1) * (grid.get 'gutter')
      width += columns[location - 1 + i].get 'width' for i in _.range(span)

      (@get 'spans').push new Span { offset: offset, width: width }
