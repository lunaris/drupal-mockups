(function($, Drupal, window, document, undefined) {
  function addColumnsForm($mockup) {
    var $form = $('<form class="mockup-columns-form" />');
    var $input = $('<input type="text" />');

    $input.keypress(function(e) {
      var $this = $(this);
      var value = $this.val() + String.fromCharCode(e.which);
      var columns = parseInt(value);

      $('.mockup-container .mockup-row', $mockup).each(function() {
        var $this = $(this);
        $this.empty();

        var i = 0;
        for (i = 0; i < columns; i++) {
          addColumn($this);
        }

        var width = 100 / columns;
        $('.mockup-column', $this).css('width', width + "%");
      });
    });

    $input.appendTo($form);
    $form.appendTo($mockup);
  }

  function addColumn($row) {
    $('<div class="mockup-column" />').appendTo($row);
  }

  function addRow($container) {
    var $row = $('<div class="mockup-row" />');
    addColumn($row);
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
        addColumnsForm($this);
      });
    }
  };
})(jQuery, Drupal, this, this.document);
