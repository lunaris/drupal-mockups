require.config
  paths:
    backbone: 'libraries/backbone/backbone.min'
    jquery: 'libraries/jquery/jquery.min'
    underscore: 'libraries/underscore/underscore.min'

require [
  'mockups'
], (Mockups) ->
  Mockups.initialize()
