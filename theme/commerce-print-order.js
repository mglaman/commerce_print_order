(function($) {
Drupal.behaviors.commercePrintOrders = {
  attach: function (context, settings) {
    window.print();
  }
};
})(jQuery);
