let scene = $('#scene').get(0);
let parallaxInstance = new Parallax(scene);

(function($) {
	$('.btn').click(function() {
		if ($(this).hasClass('.btn__liked')) {
			$(this).removeClass('btn__liked');
		} else {
			$(this).addClass('btn__liked');
		}
	});
})(jQuery);
