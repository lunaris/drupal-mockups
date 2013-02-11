define [
  'jquery'
  'underscore'
  'backbone'

  'models/box'
], ($, _, Backbone, Box) ->
  BoxView = Backbone.View.extend
    tagName: 'div'
    className: 'box'

    initialize: ->
      _.bindAll @, 'render'

    render: ->
      @$el.css
        left: "#{@model.get 'offset'}%"
        position: 'absolute'
        top: 0
        width: "#{@model.get 'width'}%"

      return @
