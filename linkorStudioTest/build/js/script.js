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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcblx0Ly9ub2pzXHJcblx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCduby1qcycpO1xyXG5cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG5cdC8vZmFrZWxpbmtcclxuXHQkKCdhW2hyZWY9XCIjXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0fSk7XHJcblxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcblx0Ly9kcm9wIGRvd24gbWVudVxyXG5cdC8vJCgnLm1lbnUgbGknKS5oYXMoJ3VsJykuYWRkQ2xhc3MoJ2Ryb3Bkb3duJyk7XHJcblx0Ly8kKCcubWVudSBsaScpLmhvdmVyKGZ1bmN0aW9uKCl7JCgndWwnLHRoaXMpLnNsaWRlRG93bigwKTt9LGZ1bmN0aW9uKCl7JCgndWwnLHRoaXMpLnNsaWRlVXAoMCk7fSk7XHJcblx0Ly9kb3VibGVUYXBUb0dvXHJcblx0Ly8kKCcubWVudSA+IGxpOmhhcyh1bCknKS5kb3VibGVUYXBUb0dvKCk7XHJcblxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcblx0Ly9wbGFjZWhvbGRlclxyXG5cdCQoJ2lucHV0W3BsYWNlaG9sZGVyXSwgdGV4dGFyZWFbcGxhY2Vob2xkZXJdJykucGxhY2Vob2xkZXIoKTtcclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxufSk7Ly9kb2N1bWVudCByZWFkeVxyXG5cclxuXHJcbi8vdmFsaWRhdGlvbiBmb3JtXHJcbihmdW5jdGlvbigpIHtcclxuXHJcblx0dmFyIHNlbGVjdE9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3Qtb25lJyksXHJcblx0XHRcdGlucHV0T25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LW9uZScpLFxyXG5cdFx0XHRpbnB1dFR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC10d28nKSxcclxuXHRcdFx0aW5wdXRUaHJlZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC10aHJlZScpLFxyXG5cdFx0XHRpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYWxjLWlucHV0JyksXHJcblx0XHRcdGZvcm1SZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1yZXN1bHQnKTtcclxuXHJcblx0ZnVuY3Rpb24gdmFsaWRhdGVGb3JtKGVsZW0pIHtcclxuXHJcblx0XHRlbGVtLm9uY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgZmllbGRWYWwgPSBwYXJzZUludCh0aGlzLnZhbHVlLnRyaW0oKSksXHJcblx0XHRcdFx0XHRyZXN1bHROdW1iZXIgPSAwO1xyXG5cclxuXHRcdFx0dGhpcy52YWx1ZSA9IGZpZWxkVmFsO1xyXG5cclxuXHRcdFx0aWYgKGlzTmFOKHRoaXMudmFsdWUpKSB7XHJcblx0XHRcdFx0dGhpcy52YWx1ZSA9ICcnO1xyXG5cdFx0XHRcdHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9ICfQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0YfQuNGB0LvQvic7XHJcblx0XHRcdFx0dGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZXJyb3ItbWVzc2FnZS1hY3RpdmUnKTtcclxuXHRcdFx0XHRyZXN1bHROdW1iZXIgPSAnJztcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGlmIChmaWVsZFZhbCA8IDEpIHtcclxuXHRcdFx0XHR0aGlzLnZhbHVlID0gJyc7XHJcblx0XHRcdFx0dGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gJ9CS0LLQtdC00LjRgtC1INGH0LjRgdC70L4g0LHQvtC70YzRiNC1IDAnO1xyXG5cdFx0XHRcdHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2Vycm9yLW1lc3NhZ2UtYWN0aXZlJyk7XHJcblx0XHRcdFx0cmVzdWx0TnVtYmVyID0gJyc7XHJcblx0XHRcdH0gZWxzZSBpZiAoZmllbGRWYWwgPiA5OTk5KSB7XHJcblx0XHRcdFx0dGhpcy52YWx1ZSA9ICcnO1xyXG5cdFx0XHRcdHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9ICfQodC70LjRiNC60L7QvCDQsdC+0LvRjNGI0L7QtSDRh9C40YHQu9C+JztcclxuXHRcdFx0XHR0aGlzLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdlcnJvci1tZXNzYWdlLWFjdGl2ZScpO1xyXG5cdFx0XHRcdHJlc3VsdE51bWJlciA9ICcnO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yLW1lc3NhZ2UtYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdHJlc3VsdE51bWJlciA9ICgoK3NlbGVjdE9uZS52YWx1ZSAqIDEwKSAtICgraW5wdXRUd28udmFsdWUpICsgKyhpbnB1dFRocmVlLnZhbHVlKSkgKiArKGlucHV0T25lLnZhbHVlKSAvIDEwMCA7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKChyZXN1bHROdW1iZXIgPiAwKSAmJiAoZWxlbS52YWx1ZSA+IDApKSB7XHJcblx0XHRcdFx0XHRmb3JtUmVzdWx0LmlubmVySFRNTCA9IHBhcnNlSW50KHJlc3VsdE51bWJlcik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGZvcm1SZXN1bHQuaW5uZXJIVE1MID0gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFxyXG5cdFx0dmFyIGlucCA9IGlucHV0c1tpXTtcclxuXHJcblx0XHR2YWxpZGF0ZUZvcm0oaW5wKTtcclxuXHJcblx0fVxyXG5cclxuXHR2YWxpZGF0ZUZvcm0oc2VsZWN0T25lKTtcclxuXHJcbn0pKCk7Il0sImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
