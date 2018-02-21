function choosePieces(){
	$('<h1/>', {
		'class': 'title',
		'text': 'Choose your pieces'
	}).appendTo('#container');

	$('<p/>', {
		'id': 'firstOption',
		'class': 'classOption',
		'text': 'Melee'
	}).appendTo('#container');

	$('<p/>', {
		'id': 'secondOption',
		'class': 'classOption',
		'text': 'Ranged'
	}).appendTo('#container');

	$('<p/>', {
		'id': 'thirdOption',
		'class': 'classOption',
		'text': 'Magic'
	}).appendTo('#container');

	var pieces = [
					[{"url": "img/pieces/pking.png",
					"piece": "king",
					"type": "melee"},
					{"url": "img/pieces/pking.png",
					"piece": "king",
					"type": "ranged"},
					{"url": "img/pieces/pking.png",
					"piece": "king",
					"type": "magic"}],
					[{"url": "img/pieces/pqueen.png",
					"piece": "queen",
					"type": "melee"},
					{"url": "img/pieces/pqueen.png",
					"piece": "queen",
					"type": "ranged"},
					{"url": "img/pieces/pqueen.png",
					"piece": "queen",
					"type": "magic"}],
					[{"url": "img/pieces/pbishop.png",
					"piece": "bishop",
					"type": "melee"},
					{"url": "img/pieces/pbishop.png",
					"piece": "bishop",
					"type": "ranged"},
					{"url": "img/pieces/pbishop.png",
					"piece": "bishop",
					"type": "magic"}],
					[{"url": "img/pieces/phorse.png",
					"piece": "horse",
					"type": "melee"},
					{"url": "img/pieces/phorse.png",
					"piece": "horse",
					"type": "ranged"},
					{"url": "img/pieces/phorse.png",
					"piece": "horse",
					"type": "magic"}],
					[{"url": "img/pieces/ptower.png",
					"piece": "tower",
					"type": "melee"},
					{"url": "img/pieces/ptower.png",
					"piece": "tower",
					"type": "ranged"},
					{"url": "img/pieces/ptower.png",
					"piece": "tower",
					"type": "magic"}],
					[{"url": "img/pieces/ppawn.png",
					"piece": "pawn",
					"type": "melee"},
					{"url": "img/pieces/ppawn.png",
					"piece": "pawn",
					"type": "ranged"},
					{"url": "img/pieces/ppawn.png",
					"piece": "pawn",
					"type": "magic"}]		
				]

	for(i=0; i < 6;i++){
		$('<div/>', {
				'id': 'pieceLine' + i,
				'class': 'pieceType'
			}).appendTo('#container');
		var lineId = '#pieceLine' + i;

		for(j=0; j < 3; j++) {
			$('<img/>', {
				'id': 'piece' + i + j,
				'class': 'selectionPiece',
				'src': pieces[i][j].url,
				'data-piece': pieces[i][j].piece,
				'data-type': pieces[i][j].type
			}).appendTo(lineId);

			//var squareId = '#squareX' + (j + 1) + 'Y' + (i + 1);
		}

	}

	$('.selectionPiece').mouseenter(function(){
   		$(this).attr('src', 'img/pieces/o' + this.dataset.piece + '.png')
   	})

   	$('.selectionPiece').mouseleave(function(){
   		$(this).attr('src', 'img/pieces/p' + this.dataset.piece + '.png')
   	})
	
	$(".selectionPiece").click(function(e){
   		e.preventDefault();
   		e.stopPropagation();
   		var selectedAlpha = '#' + $(this)[0].id;
   		var selected = $(selectedAlpha)[0];
   		console.log(selected);   		
   	});

   	$('<button/>', {
		'id': 'selectionDone',
		'type': 'button',
		'class': 'button',
		'text': "Let's play"
	}).appendTo('#container')

	$('#selectionDone').on('click', function(){
		$('.title').fadeOut('slow');
		$('.classOption').fadeOut('slow');
		$('.pieceType').fadeOut('slow');
		$('#selectionDone').fadeOut('slow', function(){
			drawBoard();
		});

	});
};