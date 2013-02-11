define [
  'jquery'
  'underscore'
  'backbone'

  'models/column'

  'views/box'
], ($, _, Backbone, Column, BoxView) ->
  ColumnView = BoxView.extend
    className: 'column'

    render: ->
      @constructor.__super__.render.apply @, _.rest arguments

      @$el.css
        padding: @model.get 'padding'

      return @
