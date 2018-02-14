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
		var lineId = '#line' + i;
		for(j=0; j < 5; j++) {
			$('<div/>', {
				'id': 'squareX' + (j + 1) + 'Y' + (i + 1),
				'class': 'square',
				'data-x': j + 1,
				'data-y': i + 1
			}).appendTo(lineId);
			var squareId = '#squareX' + (j + 1) + 'Y' + (i + 1);
		}
	}

	var hidden = ['#squareX1Y1',
					'#squareX2Y1',
					'#squareX4Y1',
					'#squareX5Y1',
					'#squareX1Y2',
					'#squareX5Y2',
					'#squareX1Y13',
					'#squareX5Y13',
					'#squareX1Y14',
					'#squareX2Y14',
					'#squareX4Y14',
					'#squareX5Y14']

	for(i=0; i < hidden.length; i++) {
		$(hidden[i]).addClass('hidden');
	}

	var red = ['#squareX3Y1',
				'#squareX2Y2',
				'#squareX4Y2',
				'#squareX2Y13',
				'#squareX4Y13',
				'#squareX3Y14']

	for(i=0; i < red.length; i++) {
		$(red[i]).addClass('red');
	}

	var yellow = ['#squareX3Y2',
					'#squareX1Y3',
					'#squareX2Y3',
					'#squareX3Y3',
					'#squareX4Y3',
					'#squareX5Y3',
					'#squareX1Y4',
					'#squareX5Y4',
					'#squareX1Y11',
					'#squareX5Y11',
					'#squareX1Y12',
					'#squareX2Y12',
					'#squareX3Y12',
					'#squareX4Y12',
					'#squareX5Y12',
					'#squareX3Y13']

	for(i=0; i < yellow.length; i++) {
		$(yellow[i]).addClass('yellow');
	}

	var green = ['#squareX2Y4',
					'#squareX3Y4',
					'#squareX4Y4',
					'#squareX1Y5',
					'#squareX2Y5',
					'#squareX3Y5',
					'#squareX4Y5',
					'#squareX5Y5',
					'#squareX1Y6',
					'#squareX2Y6',
					'#squareX4Y6',
					'#squareX5Y6',
					'#squareX1Y7',
					'#squareX5Y7',
					'#squareX1Y8',
					'#squareX5Y8',
					'#squareX1Y9',
					'#squareX2Y9',
					'#squareX4Y9',
					'#squareX5Y9',
					'#squareX1Y10',
					'#squareX2Y10',
					'#squareX3Y10',
					'#squareX4Y10',
					'#squareX5Y10',
					'#squareX2Y11',
					'#squareX3Y11',
					'#squareX4Y11']

	for(i=0; i < green.length; i++) {
		$(green[i]).addClass('green');
	}

	var blue = ['#squareX3Y6',
				'#squareX2Y7',
				'#squareX3Y7',
				'#squareX4Y7',
				'#squareX2Y8',
				'#squareX3Y8',
				'#squareX4Y8',
				'#squareX3Y9']
	
	for(i=0; i < blue.length; i++) {
		$(blue[i]).addClass('blue');
	}

	var pieces = [{"id": "wking",
							"url": "img/pieces/wking.png",
							"class": "piece"},
							{"id": "wqueen",
							"url": "img/pieces/wqueen.png",
							"class": "piece"},
							{"id": "whorse",
							"url": "img/pieces/whorse.png",
							"class": "piece"},
							{"id": "wpawn",
							"url": "img/pieces/wpawn.png",
							"class": "piece"},
							{"id": "wbishop",
							"url": "img/pieces/wbishop.png",
							"class": "piece"},
							{"id": "wtower",
							"url": "img/pieces/wtower.png",
							"class": "piece"},
							{"id": "bking",
							"url": "img/pieces/bking.png",
							"class": "piece"},
							{"id": "bqueen",
							"url": "img/pieces/bqueen.png",
							"class": "piece"},
							{"id": "bhorse",
							"url": "img/pieces/bhorse.png",
							"class": "piece"},
							{"id": "bpawn",
							"url": "img/pieces/bpawn.png",
							"class": "piece"},
							{"id": "bbishop",
							"url": "img/pieces/bbishop.png",
							"class": "piece"},
							{"id": "btower",
							"url": "img/pieces/btower.png",
							"class": "piece"}]

	var initialPositions = ['#squareX3Y1',
							'#squareX3Y3',
							'#squareX5Y3',
							'#squareX1Y3',
							'#squareX2Y2',
							'#squareX4Y2',
							'#squareX3Y14',
							'#squareX3Y12',
							'#squareX1Y12',
							'#squareX5Y12',
							'#squareX4Y13',
							'#squareX2Y13']


	for(i=0; i < pieces.length; i++) {
		$('<img/>', {
		'id': pieces[i].id,
		'src': pieces[i].url,
		'class': pieces[i].class,
		'data-piece': pieces[i].id
		}).appendTo(initialPositions[i]);
	}
})