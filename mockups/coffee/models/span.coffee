define [
  'underscore'
  'backbone'

  'models/box'
], (_, Backbone, Box) ->
  Span = Box.extend
    initialize: ->
      @constructor.__super__.initialize @, _.rest arguments
