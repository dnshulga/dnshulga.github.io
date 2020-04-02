$(document).ready(function(){
	//disable chevrons
	var element = document.querySelector('.header__menu-bar>ul');
	if( (element.offsetHeight < element.scrollHeight) || (element.offsetWidth < element.scrollWidth)){
	   // your element have overflow
	}
	else{
	 	$('.chevron').hide();
	}


	//scrolling submenus
	$('.menu-bar__sub-link').click(function(){
		var pos = $('.header__menu-bar>ul').position(); //find an offset

		$(this).get(0).scrollIntoView();
	});


});