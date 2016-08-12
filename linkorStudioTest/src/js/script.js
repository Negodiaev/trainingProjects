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


//validation form
(function() {

	var selectOne = document.getElementById('select-one'),
			inputOne = document.getElementById('input-one'),
			inputTwo = document.getElementById('input-two'),
			inputThree = document.getElementById('input-three'),
			inputs = document.getElementsByClassName('calc-input'),
			formResult = document.querySelector('.form-result');

	function validateForm(elem) {

		elem.onchange = function() {
			
			var fieldVal = parseInt(this.value.trim()),
					resultNumber = 0;

			this.value = fieldVal;

			if (isNaN(this.value)) {
				this.value = '';
				this.nextElementSibling.innerHTML = 'Пожалуйста, введите число';
				this.nextElementSibling.classList.add('error-message-active');
				resultNumber = '';
				return;
			}
			
			if (fieldVal < 1) {
				this.value = '';
				this.nextElementSibling.innerHTML = 'Введите число больше 0';
				this.nextElementSibling.classList.add('error-message-active');
				resultNumber = '';
			} else if (fieldVal > 9999) {
				this.value = '';
				this.nextElementSibling.innerHTML = 'Слишком большое число';
				this.nextElementSibling.classList.add('error-message-active');
				resultNumber = '';
			} else {
				this.nextElementSibling.classList.remove('error-message-active');

				resultNumber = ((+selectOne.value * 10) - (+inputTwo.value) + +(inputThree.value)) * +(inputOne.value) / 100 ;
				
				if ((resultNumber > 0) && (elem.value > 0)) {
					formResult.innerHTML = parseInt(resultNumber);
				} else {
					formResult.innerHTML = 0;
				}
			}

		}

	}

	for (var i = 0; i < inputs.length; i++) {
		
		var inp = inputs[i];

		validateForm(inp);

	}

	validateForm(selectOne);

})();