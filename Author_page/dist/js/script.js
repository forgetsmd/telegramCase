$(document).ready(function(){
	$('input.form__input').focus(function() {
		console.log('1')
		$(this).closest('div.form__item').find('span.form__span').removeClass('form__span_active').eq($(this).index()).addClass('form__span_active');
	})
	$('input.form__input').blur(function() {
		console.log('2')
		$(this).closest('div.form__item').find('span.form__span').eq($(this).index()).removeClass('form__span_active');
	})
});
