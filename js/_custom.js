document.addEventListener("DOMContentLoaded", function () {


	/****fixed header scroll */
	if (window.screen.width >= 1080) {
		window.onscroll = function () {
			scrollHead()
		};

		function scrollHead() {
			if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
				document.getElementById("header").className = "less";
			} else {
				document.getElementById("header").className = "";
			}
		};
	};


	/**case slider */
	var swiperAudio = new Swiper('.audio-reviews__slider', {
		slidesPerView: 4,
		spaceBetween: 14,
		roundLengths: true,
		navigation: {
			nextEl: '.audio-reviews-next',
			prevEl: '.audio-reviews-prev',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 0
			},
			700: {
				slidesPerView: 2,
				spaceBetween: 15
			},
			900: {
				slidesPerView: 3,
				spaceBetween: 15
			},
			1250: {
				slidesPerView: 4,
				spaceBetween: 15
			}
		}
	});
	/*company slider*/
	var swiperCompany = new Swiper('.company__slider', {
		slidesPerView: 6,
		spaceBetween: 20,
		roundLengths: true,
		navigation: {
			nextEl: '.company-btn-next',
			prevEl: '.company-btn-prev',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 0
			},
			500: {
				slidesPerView: 2,
				spaceBetween: 15
			},
			600: {
				slidesPerView: 3,
				spaceBetween: 15
			},
			730: {
				slidesPerView: 4,
				spaceBetween: 15
			},
			900: {
				slidesPerView: 5,
				spaceBetween: 15
			},
			1250: {
				slidesPerView: 6,
				spaceBetween: 15
			}
		}
	});
	/*input file*/

	(function (document, window, index) {
		var inputs = document.querySelectorAll('.inputfile');
		Array.prototype.forEach.call(inputs, function (input) {
			var label = input.nextElementSibling,
				labelVal = label.innerHTML;

			input.addEventListener('change', function (e) {
				var fileName = '';
				if (this.files && this.files.length > 1)
					fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
				else
					fileName = e.target.value.split('\\').pop();

				if (fileName)
					label.querySelector('span').innerHTML = fileName;
				else
					label.innerHTML = labelVal;
			});

			// Firefox bug fix
			input.addEventListener('focus', function () {
				input.classList.add('has-focus');
			});
			input.addEventListener('blur', function () {
				input.classList.remove('has-focus');
			});
		});
	}(document, window, 0));


	/******tabs */

	let tab = function () {
		let tabNav = document.querySelectorAll('.tabs-nav__item'),
			tabContent = document.querySelectorAll('.tabs-content__item'),
			tabName;

		tabNav.forEach(item => {
			item.addEventListener('click', selectTabNav)
		});

		function selectTabNav() {
			tabNav.forEach(item => {
				item.classList.remove('active');
			});
			this.classList.add('active');
			tabName = this.getAttribute('data-tab-name');
			selectTabContent(tabName);
		}

		function selectTabContent(tabName) {
			tabContent.forEach(item => {
				item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
			})
		}

	};
	tab();


	let menuBar = document.querySelector('.header__menu-bar'),
		menuBtn = document.querySelector('.header__menu-btn'),
		menuBtnClose = document.querySelector('.header__menu-btn--close'),
		menuZindex = document.querySelector('.header__menu '),
		headSearchBtn = document.querySelector('.line-search__btn'),
		headSearchForm = document.querySelector('.header__search-form'),
		headContBtn = document.querySelector('.header__contacts-btn'),
		headContBtnClose = document.querySelector('.header__contacts-btn--close'),
		headContBar = document.querySelector('.header__contacts-bar'),
		headContWrap = document.querySelector('.header__contacts-wrap'),
		substrate = document.querySelector('.substrate'),
		modalButtons = document.querySelectorAll('.modal-open-btn'),
		overlay = document.querySelector('.modal-overlay'),
		closeButtons = document.querySelectorAll('.modal-close-btn');
	body = document.body;



	/*****modals */
	modalButtons.forEach(function (item) {
		/* Назначаем каждой кнопке обработчик клика */
		item.addEventListener('click', function (e) {
			/* Предотвращаем стандартное действие элемента. Так как кнопку разные
			люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
			Нужно подстраховаться. */
			e.preventDefault();
			/* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
			и будем искать модальное окно с таким же атрибутом. */
			var modalId = this.getAttribute('data-modal'),
				modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
			/* После того как нашли нужное модальное окно, добавим классы
			подложке и окну чтобы показать их. */
			modalElem.classList.add('active');
			overlay.classList.add('active');
			body.classList.add('over-hide');
		}); // end click

	}); // end foreach


	closeButtons.forEach(function (item) {

		item.addEventListener('click', function (e) {
			var parentModal = this.closest('.modal');

			parentModal.classList.remove('active');
			overlay.classList.remove('active');
			body.classList.remove('over-hide');
		});

	}); // end foreach


	document.body.addEventListener('keyup', function (e) {
		var key = e.keyCode;

		if (key == 27) {

			document.querySelector('.modal.active').classList.remove('active');
			document.querySelector('.modal-overlay').classList.remove('active');
			body.classList.remove('over-hide');
		};
	}, false);

	if (overlay) {
		overlay.addEventListener('click', function () {
			document.querySelector('.modal.active').classList.remove('active');
			this.classList.remove('active');
			body.classList.remove('over-hide');
		});
	};
	/*****end modal */

	let openMenu = function () {
		menuBtn.classList.toggle('active');
		menuBar.classList.toggle('active');
		menuZindex.classList.toggle('active');
		substrate.classList.toggle('active');
		body.classList.toggle('over-hide');
	};
	menuBtn.addEventListener('click', openMenu);

	let closeMenu = function () {
		menuBtn.classList.remove('active');
		menuBar.classList.remove('active');
		menuZindex.classList.remove('active');
		substrate.classList.remove('active');
		body.classList.remove('over-hide');
	};
	substrate.addEventListener('click', closeMenu);

	menuBtnClose.addEventListener('click', closeMenu);

	let openContact = function () {
		headContBar.classList.toggle('active');
		headContBtn.classList.toggle('active');
		headContWrap.classList.toggle('active');
		substrate.classList.toggle('active');
		body.classList.toggle('over-hide');
	};
	headContBtn.addEventListener('click', openContact);

	let closeContact = function () {
		headContBar.classList.remove('active');
		headContBtn.classList.remove('active');
		headContWrap.classList.remove('active');
		substrate.classList.remove('active');
		body.classList.remove('over-hide');
	};

	substrate.addEventListener('click', closeContact);

	headContBtnClose.addEventListener('click', closeContact);

	/*****header search form */
	if (headSearchBtn) {
		headSearchBtn.addEventListener('click', event => {
			headSearchForm.classList.toggle('active');
		});
	};

	window.addEventListener('keydown', event => {
		if (event.keyCode === 27) closeMenu(event)
	});


	/****language drop list */
	window.onload = function () {
		var menuElem = document.querySelector('.line-lang__btn'),
			titleElem = menuElem.querySelector('.line-lang__title');
		document.onclick = function (event) {
			var target = elem = event.target;
			while (target != this) {
				if (target == menuElem) {
					if (elem.tagName == 'A') titleElem.innerHTML = elem.textContent;
					menuElem.classList.toggle('open')
					return;
				}
				target = target.parentNode;

			}
			menuElem.classList.remove('open');
		}
	};


	/******slider audio player */
	$(function () {
		$('audio').initAudioPlayer();
	});

	/*****footer dropdown list */
	$(".footer__item-btn--js").on('click', function () {
		$(".footer__item-list").slideUp(200);
		$(this).closest('.footer__nav .footer__item').find('.footer__item-list').stop().slideToggle(200);
		$(this).toggleClass('active').parent().siblings().children().removeClass('active');
	});


	/*******custom select */
	var x, i, j, selElmnt, a, b, c;
	/*look for any elements with the class "custom-select":*/
	x = document.getElementsByClassName("custom-select");
	for (i = 0; i < x.length; i++) {
		selElmnt = x[i].getElementsByTagName("select")[0];
		/*for each element, create a new DIV that will act as the selected item:*/
		a = document.createElement("DIV");
		a.setAttribute("class", "select-selected");
		a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
		x[i].appendChild(a);
		/*for each element, create a new DIV that will contain the option list:*/
		b = document.createElement("DIV");
		b.setAttribute("class", "select-items select-hide");
		for (j = 1; j < selElmnt.length; j++) {
			/*for each option in the original select element,
			create a new DIV that will act as an option item:*/
			c = document.createElement("DIV");
			c.innerHTML = selElmnt.options[j].innerHTML;
			c.addEventListener("click", function (e) {
				/*when an item is clicked, update the original select box,
				and the selected item:*/
				var y, i, k, s, h;
				s = this.parentNode.parentNode.getElementsByTagName("select")[0];
				h = this.parentNode.previousSibling;
				for (i = 0; i < s.length; i++) {
					if (s.options[i].innerHTML == this.innerHTML) {
						s.selectedIndex = i;
						h.innerHTML = this.innerHTML;
						y = this.parentNode.getElementsByClassName("same-as-selected");
						for (k = 0; k < y.length; k++) {
							y[k].removeAttribute("class");
						}
						this.setAttribute("class", "same-as-selected");
						break;
					}
				}
				h.click();
			});
			b.appendChild(c);
		}
		x[i].appendChild(b);
		a.addEventListener("click", function (e) {
			/*when the select box is clicked, close any other select boxes,
			and open/close the current select box:*/
			e.stopPropagation();
			closeAllSelect(this);
			this.nextSibling.classList.toggle("select-hide");
			this.classList.toggle("select-arrow-active");
		});
	}

	function closeAllSelect(elmnt) {
		/*a function that will close all select boxes in the document,
		except the current select box:*/
		var x, y, i, arrNo = [];
		x = document.getElementsByClassName("select-items");
		y = document.getElementsByClassName("select-selected");
		for (i = 0; i < y.length; i++) {
			if (elmnt == y[i]) {
				arrNo.push(i)
			} else {
				y[i].classList.remove("select-arrow-active");
			}
		}
		for (i = 0; i < x.length; i++) {
			if (arrNo.indexOf(i)) {
				x[i].classList.add("select-hide");
			}
		}
	}
	/*if the user clicks anywhere outside the select box,
	then close all select boxes:*/
	document.addEventListener("click", closeAllSelect);




	/*****moving dom element*****/
	if ($(window).width() <= 768) {
		$('.desc-card__text-subtitle').after($('.desc-card__document'));
	};


	/******drop down list for header menu ********/

	// .classList() Polyfill for older browser - IE9 again...
	! function () {
		function t(t) {
			this.element = t
		}
		var e = function (t) {
				return RegExp("(^| )" + t + "( |$)")
			},
			n = function (t, e, n) {
				for (var i = 0; i < t.length; i++) e.call(n, t[i])
			}
		t.prototype = {
			add: function () {
				n(arguments, function (t) {
					this.contains(t) || (this.element.className += " " + t)
				}, this)
			},
			remove: function () {
				n(arguments, function (t) {
					this.element.className = this.element.className.replace(e(t), "")
				}, this)
			},
			toggle: function (t) {
				return this.contains(t) ? (this.remove(t), !1) : (this.add(t), !0)
			},
			contains: function (t) {
				return e(t).test(this.element.className)
			},
			replace: function (t, e) {
				this.remove(t), this.add(e)
			}
		}, "classList" in Element.prototype || Object.defineProperty(Element.prototype, "classList", {
			get: function () {
				return new t(this)
			}
		}), window.DOMTokenList && null == DOMTokenList.prototype.replace && (DOMTokenList.prototype.replace = t.prototype.replace)
	}()

	// .closest() Polyfill for browsers that supports document.querySelectorAll() - IE9 again...
	if (window.Element && !Element.prototype.closest) {
		Element.prototype.closest =
			function (s) {
				var matches = (this.document || this.ownerDocument).querySelectorAll(s),
					i,
					el = this;
				do {
					i = matches.length;
					while (--i >= 0 && matches.item(i) !== el) {};
				} while ((i < 0) && (el = el.parentElement));
				return el;
			};
	}

	// Dropdown Select Toggle
	var activeClass = "active";
	var forEach = function (array, callback, scope) {
		for (var i = 0; i < array.length; i++) {
			callback.call(scope, i, array[i]); // passes back stuff we need from the array
		}
	};
	forEach(document.querySelectorAll(".header__menu-bar .menu-bar__sub-link"), function (index, value) {
		value.addEventListener('click', function () {
			//console.log(value.classList);
			if (!value.classList.contains(activeClass)) {
				var el = document.querySelectorAll(".header__menu-bar .menu-bar__sub-link");
				var i;
				for (i = 0; i < el.length; i++) {
					el[i].classList.remove(activeClass);
				}
				value.classList.toggle(activeClass);
			} else
			if (value.classList.contains(activeClass)) {
				value.classList.remove(activeClass);
			}
		})
	});
	document.addEventListener('click', function (e) {
		// Dropdown Select Toggle
		var el = document.querySelectorAll(".header__menu-bar .menu-bar__sub-link")
		var e = e ? e : window.event;
		var event_element = e.target ? e.target : e.srcElement;
		if (!event_element.closest(".menu-bar__sub-link")) {
			//console.log(event_element.closest(".dropdown_list"));
			var i;
			for (i = 0; i < el.length; i++) {
				el[i].classList.remove(activeClass);
			}
		}
	}, false);

});