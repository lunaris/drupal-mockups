define [
  'jquery'
  'underscore'
  'backbone'

  'models/mockup'
  'views/mockup'
], ($, _, Backbone, Mockup, MockupView) ->
  initialize = ->
    mockup = new Mockup '1, 3 ,2,5  , 6, 4'
    mockup.addSpan 2, 3

    ###
    mockup.addSpan 3, 4
    mockup.addSpan 1, 2
    ###

    mockupView = new MockupView { model: mockup }
    mockupView.render()

  return {
    initialize: initialize
  }
