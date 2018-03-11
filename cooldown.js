function cooldown(savedPiece, frozenTime) {
	$(savedPiece).addClass('frozen');
	$('<div/>', {
		'id': 'icewall',
		'class': 'icewall'
	}).appendTo(savedPiece);
	$('#icewall').fadeOut(frozenTime, function(){
		$(savedPiece).removeClass('frozen');
		$('.piece .icewall').remove();
	});
	
}