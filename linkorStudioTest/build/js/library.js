/* library */

/* placeholder */
(function(b){function d(a){this.input=a;a.attr("type")=="password"&&this.handlePassword();b(a[0].form).submit(function(){if(a.hasClass("placeholder")&&a[0].value==a.attr("placeholder"))a[0].value=""})}d.prototype={show:function(a){if(this.input[0].value===""||a&&this.valueIsPlaceholder()){if(this.isPassword)try{this.input[0].setAttribute("type","text")}catch(b){this.input.before(this.fakePassword.show()).hide()}this.input.addClass("placeholder");this.input[0].value=this.input.attr("placeholder")}},hide:function(){if(this.valueIsPlaceholder()&&this.input.hasClass("placeholder")&&(this.input.removeClass("placeholder"),this.input[0].value="",this.isPassword)){try{this.input[0].setAttribute("type","password")}catch(a){}this.input.show();this.input[0].focus()}},valueIsPlaceholder:function(){return this.input[0].value==this.input.attr("placeholder")},handlePassword:function(){var a=this.input;a.attr("realType","password");this.isPassword=!0;if(b.browser.msie&&a[0].outerHTML){var c=b(a[0].outerHTML.replace(/type=(['"])?password\1/gi,"type=$1text$1"));this.fakePassword=c.val(a.attr("placeholder")).addClass("placeholder").focus(function(){a.trigger("focus");b(this).hide()});b(a[0].form).submit(function(){c.remove();a.show()})}}};var e=!!("placeholder"in document.createElement("input"));b.fn.placeholder=function(){return e?this:this.each(function(){var a=b(this),c=new d(a);c.show(!0);a.focus(function(){c.hide()});a.blur(function(){c.show(!1)});b.browser.msie&&(b(window).load(function(){a.val()&&a.removeClass("placeholder");c.show(!0)}),a.focus(function(){if(this.value==""){var a=this.createTextRange();a.collapse(!0);a.moveStart("character",0);a.select()}}))})}})(jQuery);

/* doubleTapToGo */
;(function($,window,document,undefined ){$.fn.doubleTapToGo=function(params ){if(!('ontouchstart' in window ) &&!navigator.msMaxTouchPoints &&!navigator.userAgent.toLowerCase().match(/windows phone os 7/i ) ) return false;this.each(function(){var curItem=false;$(this ).on('click',function(e ){var item=$(this );if(item[ 0 ] !=curItem[ 0 ] ){e.preventDefault();curItem=item;}});$(document ).on('click touchstart MSPointerDown',function(e ){var resetItem=true,parents=$(e.target ).parents();for(var i=0;i<parents.length;i++)if(parents[ i ]==curItem[ 0 ] )resetItem=false;if(resetItem )curItem=false;});});return this;};})(jQuery,window,document );
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsaWJyYXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGxpYnJhcnkgKi9cclxuXHJcbi8qIHBsYWNlaG9sZGVyICovXHJcbihmdW5jdGlvbihiKXtmdW5jdGlvbiBkKGEpe3RoaXMuaW5wdXQ9YTthLmF0dHIoXCJ0eXBlXCIpPT1cInBhc3N3b3JkXCImJnRoaXMuaGFuZGxlUGFzc3dvcmQoKTtiKGFbMF0uZm9ybSkuc3VibWl0KGZ1bmN0aW9uKCl7aWYoYS5oYXNDbGFzcyhcInBsYWNlaG9sZGVyXCIpJiZhWzBdLnZhbHVlPT1hLmF0dHIoXCJwbGFjZWhvbGRlclwiKSlhWzBdLnZhbHVlPVwiXCJ9KX1kLnByb3RvdHlwZT17c2hvdzpmdW5jdGlvbihhKXtpZih0aGlzLmlucHV0WzBdLnZhbHVlPT09XCJcInx8YSYmdGhpcy52YWx1ZUlzUGxhY2Vob2xkZXIoKSl7aWYodGhpcy5pc1Bhc3N3b3JkKXRyeXt0aGlzLmlucHV0WzBdLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInRleHRcIil9Y2F0Y2goYil7dGhpcy5pbnB1dC5iZWZvcmUodGhpcy5mYWtlUGFzc3dvcmQuc2hvdygpKS5oaWRlKCl9dGhpcy5pbnB1dC5hZGRDbGFzcyhcInBsYWNlaG9sZGVyXCIpO3RoaXMuaW5wdXRbMF0udmFsdWU9dGhpcy5pbnB1dC5hdHRyKFwicGxhY2Vob2xkZXJcIil9fSxoaWRlOmZ1bmN0aW9uKCl7aWYodGhpcy52YWx1ZUlzUGxhY2Vob2xkZXIoKSYmdGhpcy5pbnB1dC5oYXNDbGFzcyhcInBsYWNlaG9sZGVyXCIpJiYodGhpcy5pbnB1dC5yZW1vdmVDbGFzcyhcInBsYWNlaG9sZGVyXCIpLHRoaXMuaW5wdXRbMF0udmFsdWU9XCJcIix0aGlzLmlzUGFzc3dvcmQpKXt0cnl7dGhpcy5pbnB1dFswXS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJwYXNzd29yZFwiKX1jYXRjaChhKXt9dGhpcy5pbnB1dC5zaG93KCk7dGhpcy5pbnB1dFswXS5mb2N1cygpfX0sdmFsdWVJc1BsYWNlaG9sZGVyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5wdXRbMF0udmFsdWU9PXRoaXMuaW5wdXQuYXR0cihcInBsYWNlaG9sZGVyXCIpfSxoYW5kbGVQYXNzd29yZDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuaW5wdXQ7YS5hdHRyKFwicmVhbFR5cGVcIixcInBhc3N3b3JkXCIpO3RoaXMuaXNQYXNzd29yZD0hMDtpZihiLmJyb3dzZXIubXNpZSYmYVswXS5vdXRlckhUTUwpe3ZhciBjPWIoYVswXS5vdXRlckhUTUwucmVwbGFjZSgvdHlwZT0oWydcIl0pP3Bhc3N3b3JkXFwxL2dpLFwidHlwZT0kMXRleHQkMVwiKSk7dGhpcy5mYWtlUGFzc3dvcmQ9Yy52YWwoYS5hdHRyKFwicGxhY2Vob2xkZXJcIikpLmFkZENsYXNzKFwicGxhY2Vob2xkZXJcIikuZm9jdXMoZnVuY3Rpb24oKXthLnRyaWdnZXIoXCJmb2N1c1wiKTtiKHRoaXMpLmhpZGUoKX0pO2IoYVswXS5mb3JtKS5zdWJtaXQoZnVuY3Rpb24oKXtjLnJlbW92ZSgpO2Euc2hvdygpfSl9fX07dmFyIGU9ISEoXCJwbGFjZWhvbGRlclwiaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKTtiLmZuLnBsYWNlaG9sZGVyPWZ1bmN0aW9uKCl7cmV0dXJuIGU/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYT1iKHRoaXMpLGM9bmV3IGQoYSk7Yy5zaG93KCEwKTthLmZvY3VzKGZ1bmN0aW9uKCl7Yy5oaWRlKCl9KTthLmJsdXIoZnVuY3Rpb24oKXtjLnNob3coITEpfSk7Yi5icm93c2VyLm1zaWUmJihiKHdpbmRvdykubG9hZChmdW5jdGlvbigpe2EudmFsKCkmJmEucmVtb3ZlQ2xhc3MoXCJwbGFjZWhvbGRlclwiKTtjLnNob3coITApfSksYS5mb2N1cyhmdW5jdGlvbigpe2lmKHRoaXMudmFsdWU9PVwiXCIpe3ZhciBhPXRoaXMuY3JlYXRlVGV4dFJhbmdlKCk7YS5jb2xsYXBzZSghMCk7YS5tb3ZlU3RhcnQoXCJjaGFyYWN0ZXJcIiwwKTthLnNlbGVjdCgpfX0pKX0pfX0pKGpRdWVyeSk7XHJcblxyXG4vKiBkb3VibGVUYXBUb0dvICovXHJcbjsoZnVuY3Rpb24oJCx3aW5kb3csZG9jdW1lbnQsdW5kZWZpbmVkICl7JC5mbi5kb3VibGVUYXBUb0dvPWZ1bmN0aW9uKHBhcmFtcyApe2lmKCEoJ29udG91Y2hzdGFydCcgaW4gd2luZG93ICkgJiYhbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgJiYhbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC93aW5kb3dzIHBob25lIG9zIDcvaSApICkgcmV0dXJuIGZhbHNlO3RoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjdXJJdGVtPWZhbHNlOyQodGhpcyApLm9uKCdjbGljaycsZnVuY3Rpb24oZSApe3ZhciBpdGVtPSQodGhpcyApO2lmKGl0ZW1bIDAgXSAhPWN1ckl0ZW1bIDAgXSApe2UucHJldmVudERlZmF1bHQoKTtjdXJJdGVtPWl0ZW07fX0pOyQoZG9jdW1lbnQgKS5vbignY2xpY2sgdG91Y2hzdGFydCBNU1BvaW50ZXJEb3duJyxmdW5jdGlvbihlICl7dmFyIHJlc2V0SXRlbT10cnVlLHBhcmVudHM9JChlLnRhcmdldCApLnBhcmVudHMoKTtmb3IodmFyIGk9MDtpPHBhcmVudHMubGVuZ3RoO2krKylpZihwYXJlbnRzWyBpIF09PWN1ckl0ZW1bIDAgXSApcmVzZXRJdGVtPWZhbHNlO2lmKHJlc2V0SXRlbSApY3VySXRlbT1mYWxzZTt9KTt9KTtyZXR1cm4gdGhpczt9O30pKGpRdWVyeSx3aW5kb3csZG9jdW1lbnQgKTsiXSwiZmlsZSI6ImxpYnJhcnkuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
