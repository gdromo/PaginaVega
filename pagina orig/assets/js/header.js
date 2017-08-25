(function($) {
  $.fn.stickyHeader = function() {
	var  mn = $(".navbar-muni");
	var  ml = $(".menu-logo");
	var  mc = $("#menu-container");
	   	 mns = "navbar-muni-scrolled";
	   	 mls = "menu-logo-scrolled";
	   	 mcs = "menu-container-scrolled";
	   	 hdr = $('header').height();
	
	$(window).scroll(function() {
		  if( $(this).scrollTop() > hdr ) {
		    mn.addClass(mns);
		    mc.addClass(mcs);
		    ml.addClass(mls);
		    ml.height(55);
		  } else {
		    mn.removeClass(mns);
		    mc.removeClass(mcs);
		    ml.removeClass(mls);
		    ml.height('100%');
		  }
	});	
  };
})(jQuery);
$('#header').stickyHeader();
$('.date_tooltip').tooltip();
$('#successfulPropuesta').modal({
	show: false
})