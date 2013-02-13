define [
  'jquery'
  'underscore'
  'backbone'

  'views/span'

  'jquery/ui/draggable'
  'jquery/ui/resizable'
], ($, _, Backbone, SpanView) ->
  ResizableSpanView = SpanView.extend
    className: 'span'

    render: ->
      @constructor.__super__.render.apply @, _.rest arguments

      @$el.resizable
        handles: 'e, w'
        resize: (e, ui) =>
          elementLeft = ui.element.position().left
          elementWidth = ui.element.width()
          elementRight = elementLeft + elementWidth

          pxPerPercent = @options.parent.width() / 100

          grid = @options.grid
          columnCount = width = 0
          firstColumn = null

          _.each grid.columns, (column) ->
            offset = (column.get 'offset') * pxPerPercent
            if offset >= elementLeft && offset < elementRight
              firstColumn ?= column
              columnCount++
              width += column.get 'width'

          width += (columnCount - 1) * grid.gutter
          @model.set
            offset: firstColumn.get 'offset'
            width: width

          ui.element.css
            left: "#{firstColumn.get 'offset'}%"
            width: "#{width}%"

      return @
