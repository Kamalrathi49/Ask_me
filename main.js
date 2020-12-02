$(document).ready(function() {
	
	var pathname = window.location.pathname;
	$('.navbar-nav > li >  a[href="'+pathname+'"]').css({'border-bottom':'.3rem solid #F50057'});

	if(pathname == '/profile/' || pathname == '/drop/'){
		$('.navbar').hide()
		$('#section-footer').hide()
		$('#section-footer1').hide()
	}

	if(pathname == '/welcome/'){
		$('#section-footer').hide()
		$('#section-footer1').hide()
	}
})

if($('.navbar-toggler-icon').is(':visible')){
	$('.navbar-brand').css({'left':'50%','transform':'translateX(-50%)','margin-top':'0rem'})
	$('.nav-link').css({'margin-top':'0rem'})
}

function response(x) {
	if (x.matches) { 
		$('.search .search__box').attr("placeholder", "Search Questions, Doubts & Images");
	} else {
		$('.search .search__box').attr("placeholder", "Search");
	}
}
  
var x = window.matchMedia("(min-width: 700px)")
response(x) 
x.addListener(response)
