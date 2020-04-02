$(document).ready(function(){
	//disable chevrons
	var element = document.querySelector('.header__menu-bar>ul');
	if( (element.offsetHeight < element.scrollHeight) || (element.offsetWidth < element.scrollWidth)){
	   // your element have overflow
	}
	else{
	 	$('.chevron').hide();
	 	//('.header__menu-bar>ul').addClass('no-scroll');
	}


	//scrolling submenus
	$('.menu-bar__sub-link').each(function(){
		var flag = false;

		$(this).click(function(){

		
			if (!flag) {
				$(this).find('.header__menu-sub').slideDown();
				$(this).get(0).scrollIntoView();
				$('.header__menu-bar>ul').addClass('no-scroll');
				$('.chevron').addClass('no-chevron');

				flag = true;
			}	
			else {
				$('.header__menu-sub').slideUp();
				$(this).get(0).scrollIntoView();
				$('.header__menu-bar>ul').removeClass('no-scroll');
				$('.chevron').removeClass('no-chevron');

				flag = false;
			}
		});
	});


});