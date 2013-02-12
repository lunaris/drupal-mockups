define [
  'jquery'
  'underscore'
  'backbone'

  'models/mockup'

  'views/grid'
  'views/span'
], ($, _, Backbone, Mockup, GridView, SpanView) ->
  MockupView = Backbone.View.extend
    el: $ '.mockups'

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
      _.each @model.spans, (span) ->
        renderedSpan = (new SpanView { model: span }).render()
        $spans.append renderedSpan.$el

      @$el.append $spans
