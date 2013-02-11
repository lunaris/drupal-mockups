define [
  'underscore'
  'backbone'

  'models/box'
], (_, Backbone, Box) ->
  Column = Box.extend
    defaults: ->
      padding: 0

    initialize: ->
      @constructor.__super__.initialize.apply @, _.rest arguments
