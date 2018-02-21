$(window).on('load', function(){
	$(".container").mixItUp({
	selectors: {
			target:'.mix',
			filter:'.filter',
		},
		animation: {
			enable:true,
			duration:700
		 }
	});

	$('.controls .catalog__btn').on('click', function(){
		$('.controls .catalog__btn').removeClass('active');
		$(this).addClass('active');
	});
});
