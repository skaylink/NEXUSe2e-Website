$(function() {

	var getNavigationHeight = $('#nav-global').height();
	// grab the initial top offset of the navigation 
	var sticky_navigation_offset_top = $('#nav-global').offset().top;
	
	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var sticky_navigation = function(){
		var scroll_top = $(window).scrollTop(); // our current vertical position from the top
		
		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > sticky_navigation_offset_top) { 
			$('#branding').css('margin-bottom',getNavigationHeight+'px');
			$('#nav-global').css({ 'position': 'fixed', 'top':0 });
		} else {
			$('#nav-global').css({ 'position': 'relative' });
			$('#branding').removeAttr('style');
		}   
	};
	
	function checkLeftNavbar(){
		var leftNav = $('#nav');
		if(leftNav.length == 0){
			$('#main').addClass('noNavbar');
			$('#main').css('display','table-cell');
		}else{
			$('#main').css('display','table-cell');
		}
	}
	
	// run our function on load
	sticky_navigation();
	checkLeftNavbar();
	
	// and run it again every time you scroll
	$(window).scroll(function() {
		 sticky_navigation();
	});
	
});