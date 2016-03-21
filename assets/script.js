$(document).ready(function(){
	$('.btn-with-link').each(function(){
		$(this).on('click', function(){
			window.open($(this).data('url'));
		});
	});
});