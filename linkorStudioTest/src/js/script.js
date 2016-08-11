$(document).ready(function(){

	//nojs
	$('body').removeClass('no-js');

	//------------------------------------------------------------------------//

	//fakelink
	$('a[href="#"]').on('click', function(event) {
		event.preventDefault();
	});

	//------------------------------------------------------------------------//

	//drop down menu
	//$('.menu li').has('ul').addClass('dropdown');
	//$('.menu li').hover(function(){$('ul',this).slideDown(0);},function(){$('ul',this).slideUp(0);});
	//doubleTapToGo
	//$('.menu > li:has(ul)').doubleTapToGo();

	//------------------------------------------------------------------------//

	//placeholder
	$('input[placeholder], textarea[placeholder]').placeholder();

	//------------------------------------------------------------------------//

});//document ready

$(window).load(function() {

	//load

});//window load