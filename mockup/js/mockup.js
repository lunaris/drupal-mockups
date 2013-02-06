(function($, Drupal, window, document, undefined) {
  function addColumnsForm($row) {
    var $form = $('<form class="mockup-columns-form" />');
    var $input = $('<input type="text" />');

    $input.keypress(function(e) {
      var $this = $(this);
      var value = $this.val() + String.fromCharCode(e.which);
      var columns = parseInt(value);

      $('.mockup-column', $row).remove();

      var i = 0;
      for (i = 0; i < columns; i++) {
        addColumn($row);
      }

      var width = 100 / columns;
      $('.mockup-column', $row).css('width', width + "%");
    });

    $input.appendTo($form);
    $form.appendTo($row);
  }

  function addColumn($row) {
    $('<div class="mockup-column" />').prependTo($row);
  }

  function addRow($container) {
    var $row = $('<div class="mockup-row" />');
    addColumn($row);
    addColumnsForm($row);
    $row.appendTo($container);
  }

  function addContainer($mockup) {
    var $container = $('<div class="mockup-container clearfix" />');
    addRow($container);
    $container.appendTo($mockup);
  }

  Drupal.behaviors.mockup = {
    attach: function(context, settings) {
      $('.mockup').each(function() {
        var $this = $(this);

        addContainer($this);
      });
    }
  };
})(jQuery, Drupal, this, this.document);
