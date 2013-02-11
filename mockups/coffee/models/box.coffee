define [
  'underscore'
  'backbone'
], (_, Backbone) ->
  Box = Backbone.Model.extend
    defaults: ->
      offset: 0
      width: 0
