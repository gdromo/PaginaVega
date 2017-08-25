(function($) {
  $.fn.stickyHeader = function() {
    var $that = $(this);
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
            $('#header').addClass("sticky");
            $('#header').find('.dropdown-menu').addClass("dropdown-menu-right");
        } else {
            $('#header').removeClass("sticky");
            $('#header').find('.dropdown-menu').removeClass("dropdown-menu-right");
        }
    });
  };
})(jQuery);
$('#header').stickyHeader();

