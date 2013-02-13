define [
  'jquery'
  'underscore'
  'backbone'

  'models/mockup'
  'views/mockup'
], ($, _, Backbone, Mockup, MockupView) ->
  initialize = ->
    mockup = new Mockup
      source:
        columns: '1, 3 ,2,5  , 6, 4'
        gutter: '.1'

    mockup.addSpan 2, 4

    ###
    mockup.addSpan 3, 4
    mockup.addSpan 1, 2
    ###

    mockupView = new MockupView { model: mockup }
    ($ '.mockups').append mockupView.render().el

    mockup = new Mockup
      source:
        columns: 8
        gutter: '.25'

    mockup.addSpan 2, 1
    mockup.addSpan 4, 3

    mockupView = new MockupView { model: mockup }
    ($ '.mockups').append mockupView.render().el

  return {
    initialize: initialize
  }
