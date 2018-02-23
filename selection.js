var kingType;
var queenType;
var bishopType;
var horseType;
var towerType;
var pawnType;
var kingAttack;
var queenAttack;
var bishopAttack;
var horseAttack;
var towerAttack;
var pawnAttack;

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
					"attack": 20,
					"type": "melee"},
					{"url": "img/pieces/pking.png",
					"piece": "king",
					"attack": 14,
					"type": "ranged"},
					{"url": "img/pieces/pking.png",
					"piece": "king",
					"attack": 8,
					"type": "magic"}],
					[{"url": "img/pieces/pqueen.png",
					"piece": "queen",
					"attack": 7,
					"type": "melee"},
					{"url": "img/pieces/pqueen.png",
					"piece": "queen",
					"attack": 5,
					"type": "ranged"},
					{"url": "img/pieces/pqueen.png",
					"piece": "queen",
					"attack": 3,
					"type": "magic"}],
					[{"url": "img/pieces/pbishop.png",
					"piece": "bishop",
					"attack": 15,
					"type": "melee"},
					{"url": "img/pieces/pbishop.png",
					"piece": "bishop",
					"attack": 11,
					"type": "ranged"},
					{"url": "img/pieces/pbishop.png",
					"piece": "bishop",
					"attack": 6,
					"type": "magic"}],
					[{"url": "img/pieces/phorse.png",
					"piece": "horse",
					"attack": 10,
					"type": "melee"},
					{"url": "img/pieces/phorse.png",
					"piece": "horse",
					"attack": 7,
					"type": "ranged"},
					{"url": "img/pieces/phorse.png",
					"piece": "horse",
					"attack": 4,
					"type": "magic"}],
					[{"url": "img/pieces/ptower.png",
					"piece": "tower",
					"attack": 10,
					"type": "melee"},
					{"url": "img/pieces/ptower.png",
					"piece": "tower",
					"attack": 7,
					"type": "ranged"},
					{"url": "img/pieces/ptower.png",
					"piece": "tower",
					"attack": 4,
					"type": "magic"}],
					[{"url": "img/pieces/ppawn.png",
					"piece": "pawn",
					"attack": 5,
					"type": "melee"},
					{"url": "img/pieces/ppawn.png",
					"piece": "pawn",
					"attack": 3,
					"type": "ranged"},
					{"url": "img/pieces/ppawn.png",
					"piece": "pawn",
					"attack": 1,
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
				'data-type': pieces[i][j].type,
				'data-attack': pieces[i][j].attack
			}).appendTo(lineId);
		}

	}

	
	
	$(".selectionPiece").click(function(e){
   		e.preventDefault();
   		e.stopPropagation();
   		var selectedAlpha = '#' + $(this)[0].id;
   		var selected = $(selectedAlpha)[0];
   		console.log(selected);

   		switch(selected.dataset.piece){
   			case "king":
   				if (kingType == undefined) {
   					kingType = selected.dataset.type;
   					kingAttack = selected.dataset.attack;
   					$(selected).attr('src', 'img/pieces/o' + selected.dataset.piece + '.png');
   					$(selected).addClass('selectedPiece');
   					console.log(kingType);
   				} else {
   					alert("Ya seleccionaste un tipo de Rey");
   				}
   				break;
   			case "queen":
   				if (queenType == undefined) {
   					queenType = selected.dataset.type;
   					queenAttack = selected.dataset.attack;
   					$(selected).attr('src', 'img/pieces/o' + selected.dataset.piece + '.png');
   					$(selected).addClass('selectedPiece');
   					console.log(queenType);
   				} else {
   					alert("Ya seleccionaste un tipo de General");
   				}
   				break;
   			case "bishop":
   				if (bishopType == undefined) {
   					bishopType = selected.dataset.type;
   					bishopAttack = selected.dataset.attack;
   					$(selected).attr('src', 'img/pieces/o' + selected.dataset.piece + '.png');
   					$(selected).addClass('selectedPiece');
   					console.log(bishopType);
   				} else {
   					alert("Ya seleccionaste un tipo de Espía");
   				}
   				break;
   			case "horse":
   				if (horseType == undefined) {
   					horseType = selected.dataset.type;
   					horseAttack = selected.dataset.attack;
   					$(selected).attr('src', 'img/pieces/o' + selected.dataset.piece + '.png');
   					$(selected).addClass('selectedPiece');
   					console.log(horseType);
   				} else {
   					alert("Ya seleccionaste un tipo de Caballero");
   				}
   				break;
   			case "tower":
   				if (towerType == undefined) {
   					towerType = selected.dataset.type;
   					towerAttack = selected.dataset.attack;
   					$(selected).attr('src', 'img/pieces/o' + selected.dataset.piece + '.png');
   					$(selected).addClass('selectedPiece');
   					console.log(towerType);
   				} else {
   					alert("Ya seleccionaste un tipo de Campeón");
   				}
   				break;
   			case "pawn":
   				if (pawnType == undefined) {
   					pawnType = selected.dataset.type;
   					pawnAttack = selected.dataset.attack;
   					$(selected).attr('src', 'img/pieces/o' + selected.dataset.piece + '.png');
   					$(selected).addClass('selectedPiece');
   					console.log(pawnType);
   				} else {
   					alert("Ya seleccionaste un tipo de Escudero");
   				}
   				break;
   			default:
   				console.log('error');
   		}   		
   	});

   	$('.selectionPiece').mouseenter(function(){
   		//if (this.dataset.piece + "Type" == undefined) {
   			$(this).attr('src', 'img/pieces/o' + this.dataset.piece + '.png')
   		//}
   	})

   	$('.selectionPiece').mouseleave(function(){
   		if (!$(this).hasClass('selectedPiece')) {
   			$(this).attr('src', 'img/pieces/p' + this.dataset.piece + '.png')
   		}
   	})

   	$('<button/>', {
		'id': 'selectionDone',
		'type': 'button',
		'class': 'button',
		'text': "Let's play"
	}).appendTo('#container')

	$('#selectionDone').on('click', function(){
		if (kingType == undefined ||
			queenType == undefined ||
			bishopType == undefined ||
			horseType == undefined ||
			towerType == undefined ||
			pawnType == undefined){
			alert('No seleccionaste todas las piezas');
		} else {
			$('.title').fadeOut('slow');
			$('.classOption').fadeOut('slow');
			$('.pieceType').fadeOut('slow');
			$('#selectionDone').fadeOut('slow', function(){
				drawBoard();
				playGame();
			});
		}
		

	});
};