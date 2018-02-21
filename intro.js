$(document).ready(function(){
	$('<div/>', {
		'id': 'container'
	}).appendTo('body');

	$('<img/>', {
		'id': 'logo',
		'class': 'logo',
		'src': 'img/logo.png'
	}).appendTo('#container');

	$('<button/>', {
		'id': 'launcher',
		'type': 'button',
		'class': 'button',
		'text': 'Launch game'
	}).appendTo('#container')

	$('#launcher').on('click', function(){
		$('#logo').fadeOut('slow');
		$('#launcher').fadeOut('slow', function(){
			choosePieces();
		});

	});
})