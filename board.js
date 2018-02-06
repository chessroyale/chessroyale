$(document).ready(function() {
	$('<div/>', {
		'id': 'container'
	}).appendTo('body');
	$('<div/>', {
		'id': 'time',
		'class': 'clock'
	}).appendTo('#container');
	$('<div/>', {
		'id': 'score',
		'class': 'scoreCard'
	}).appendTo('#container');
	$('<div/>', {
		'id': 'board'
	}).appendTo('#container');
	$('<div/>', {
		'id': 'piecesCon',
		'class': 'piecesCon'
	}).appendTo('#container');
	for(i=0; i < 14;i++){
		$('<div/>', {
				'id': 'line' + i,
				'class': 'line'
			}).appendTo('#board');
		var id = 'line' + i;
		for(j=0; j < 5; j++) {
			$('<div/>', {
				'id': 'squareX' + (j + 1) + 'Y' + (i + 1),
				'class': 'square'
			}).appendTo('#' + id);
			
		}
	}
	$('#container').prepend('<img id="clash" src="img/clash.jpg" />')
})