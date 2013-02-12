define [
  'jquery'
  'underscore'
  'backbone'

  'models/grid'

  'views/column'
], ($, _, Backbone, Grid, ColumnView) ->
  GridView = Backbone.View.extend
    tagName: 'div'
    className: 'grid'

    initialize: ->
      _.bindAll @, 'render'

    render: ->
      @$el.empty()
      _.each @model.columns, (column) =>
        @$el.append (new ColumnView { model: column }).render().el

      return @
