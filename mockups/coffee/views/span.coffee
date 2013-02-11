define [
  'jquery'
  'underscore'
  'backbone'

  'views/box'
], ($, _, Backbone, BoxView) ->
  SpanView = BoxView.extend
    className: 'span'
