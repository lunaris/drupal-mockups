define [
  'underscore'
  'backbone'

  'models/grid'
  'models/span'
], (_, Backbone, Grid, Span) ->
  Mockup = Backbone.Model.extend
    initialize: ->
      source = @get 'source'

      @grid = new Grid source
      @spans = []

    addSpan: (span, location) ->
      columns = @grid.columns
      offset = columns[location - 1].get 'offset'

      width = (span - 1) * @grid.gutter
      width += columns[location - 1 + i].get 'width' for i in _.range(span)

      @spans.push new Span { offset: offset, width: width }
