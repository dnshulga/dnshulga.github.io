document.addEventListener("DOMContentLoaded", function () {
	/*****fixed header */
	let headerComp = document.querySelector('.header');

	window.addEventListener('scroll', function () {
		lessHeader();
	});

	var lessHeader = function lessHeader() {
		if (window.pageYOffset > 0) headerComp.classList.add('less');
		else headerComp.classList.remove('less');
	};
	lessHeader();

	/*section about tabs*/
	let tab = function () {
		let tabNav = document.querySelectorAll('.tabs-nav__item'),
			tabContent = document.querySelectorAll('.tab'),
			tabName;

		tabNav.forEach(item => {
			item.addEventListener('click', selectTabNav)
		});

		function selectTabNav() {
			tabNav.forEach(item => {
				item.classList.remove('is-active');
			});
			this.classList.add('is-active');
			tabName = this.getAttribute('data-tab-name');
			selectTabContent(tabName);
		}

		function selectTabContent(tabName) {
			tabContent.forEach(item => {
				item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
			})
		}
	};
	tab();



  /*** the modal form*/
	  let 	modal = document.getElementById("modal-form-js"),
			modalContent = document.querySelector('.modal-form__content'),
			modalTitle = document.querySelector('.modal-form__title'),
			showBtn = document.querySelectorAll(".open-modal-js"),

			modalDemo = document.getElementById("modal__demo-form-js"),
			showBtnDemo = document.querySelectorAll(".open-demo--js"),

			modalConsult = document.getElementById("modal__consult-form-js"),
			showBtnConsult = document.querySelector(".open-consult--js"),	
			
			menuBar = document.querySelector('.header__inner'),
			menuBtn = document.querySelector('.header__menu-btn'),
			menuSubstrate = document.querySelector('.header__menu-subtstrate'),
			
			body = document.body;
	
	/******mobile menu */
	let openMenu = function () {
		menuBar.classList.toggle('active');
		menuBtn.classList.toggle('active');
		menuSubstrate.classList.toggle('active');
		body.classList.toggle('over-hide');
	};
	menuBtn.addEventListener('click', openMenu);		

	let closeMenu = function () {
		menuBar.classList.remove('active');
		menuBtn.classList.remove('active');
		menuSubstrate.classList.remove('active');
		body.classList.remove('over-hide');
	};
	menuSubstrate.addEventListener('click', closeMenu);


	/*****modal cards order */
  for (var i = 0; i < showBtn.length; i++) {
    let el = showBtn[i]
    el.addEventListener('click', event => {
      event.preventDefault();
	  modalContent.dataset.modalClass = el.dataset.modalClass;
      modalTitle.innerHTML = el.dataset.title;
      modal.classList.toggle('active');
	  body.classList.add('over-hide');

    });
  };


  /*****modal demo order */

  for (var i = 0; i < showBtnDemo.length; i++) {
    let el = showBtnDemo[i]
    el.addEventListener('click', event => {
		event.preventDefault();
		modalDemo.classList.toggle('active');
		body.classList.add('over-hide');
		menuBar.classList.remove('active');
		menuBtn.classList.remove('active');
		menuSubstrate.classList.remove('active');
    });
  };

  /*****modal consult order */
  if (showBtnConsult) {
    showBtnConsult.addEventListener('click', event => {
		event.preventDefault();
		modalConsult.classList.toggle('active');
		body.classList.add('over-hide');
	  });
  };


	
  window.onclick = function (event) {
    if (event.target == modalDemo) {
	  modalDemo.classList.remove('active');
      body.classList.remove('over-hide');
	};
	if (event.target == modal) {
		modal.classList.remove('active');
		modalContent.classList.remove(modalContent.dataset.modalClass);
		body.classList.remove('over-hide');
	  };
	  if (event.target == modalConsult) {
		modalConsult.classList.remove('active');
		body.classList.remove('over-hide');
	  };
  };
 

  $(".sidebar__field-btn--js").on('click', function() { 		
	$(".sidebar__field-list").slideUp(200);			
	$(this).closest('.sidebar .sidebar__field').find('.sidebar__field-list').stop().slideToggle(200);
	$(this).toggleClass('active').parent().siblings().children().removeClass('active');
	});



  $(function () {
	let show = 'show';
	
	$('.input-form').on('checkval', function () {
	  let label = $(this).next('span');
	  if(this.value !== '') {
		label.addClass(show);
	  } else {
		label.removeClass(show);
	  }
	}).on('keyup', function () {
	  $(this).trigger('checkval');
	}); 
  });


	new fullpage('#fullpage', {
		lazyLoading: true,
		scrollBar: true,
		normalScrollElements: "#modal-form-js, #modal__demo-form-js, #modal__consult-form-js",
		responsiveWidth: 1240,

	});


});