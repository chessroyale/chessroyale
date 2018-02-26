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
		'id': 'howto',
		'type': 'button',
		'class': 'button',
		'text': 'Cómo se juega'
	}).appendTo('#container');

	$('<button/>', {
		'id': 'launcher',
		'type': 'button',
		'class': 'button',
		'text': 'Jugar'
	}).appendTo('#container');

	$('#howto').on('click', function(){
		$('#launcher').fadeOut('fast');
		tutorial();
	});

	$('#launcher').on('click', function(){
		$('#logo').fadeOut('slow');
		$('#howto').fadeOut('slow');
		$('#launcher').fadeOut('slow', function(){
			choosePieces();
		});

	});
})