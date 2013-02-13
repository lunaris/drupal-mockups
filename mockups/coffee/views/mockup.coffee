define [
  'jquery'
  'underscore'
  'backbone'

  'models/mockup'

  'views/grid'
  'views/span/resizable'
], ($, _, Backbone, Mockup, GridView, ResizableSpanView) ->
  MockupView = Backbone.View.extend
    tagName: 'div'
    className: 'mockup'
    id: -> "mockup-#{@model.id}"

    initialize: ->
      _.bindAll @, 'render', 'renderGrid', 'renderSpans'

    render: ->
      @$el.empty()
      @renderGrid()
      @renderSpans()

      return @

    renderGrid: ->
      gridView = new GridView { model: @model.grid }
      @$el.append gridView.render().el

    renderSpans: ->
      $spans = $ '<div class="spans" />'
      _.each @model.spans, (span) =>
        view = new ResizableSpanView
          model: span
          grid: @model.grid
          parent: $spans

        $spans.append view.render().el

      @$el.append $spans
