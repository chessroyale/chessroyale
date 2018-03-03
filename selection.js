var kingType;
var gralType;
var spyType;
var mageType;
var championType;
var pawnType;
var kingAttack;
var gralAttack;
var spyAttack;
var mageAttack;
var championAttack;
var pawnAttack;

function choosePieces(){
	$('<h1/>', {
		'class': 'title',
		'text': 'Elegí tus tropas'
	}).appendTo('#container');

	$('<p/>', {
		'id': 'firstOption',
		'class': 'classOption',
		'text': 'Melee'
	}).appendTo('#container');

	$('<p/>', {
		'id': 'secondOption',
		'class': 'classOption',
		'text': 'A distancia'
	}).appendTo('#container');

	$('<p/>', {
		'id': 'thirdOption',
		'class': 'classOption',
		'text': 'Mágico'
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
					[{"url": "img/pieces/pgral.png",
					"piece": "gral",
					"attack": 7,
					"type": "melee"},
					{"url": "img/pieces/pgral.png",
					"piece": "gral",
					"attack": 5,
					"type": "ranged"},
					{"url": "img/pieces/pgral.png",
					"piece": "gral",
					"attack": 3,
					"type": "magic"}],
					[{"url": "img/pieces/pspy.png",
					"piece": "spy",
					"attack": 15,
					"type": "melee"},
					{"url": "img/pieces/pspy.png",
					"piece": "spy",
					"attack": 11,
					"type": "ranged"},
					{"url": "img/pieces/pspy.png",
					"piece": "spy",
					"attack": 6,
					"type": "magic"}],
					[{"url": "img/pieces/pmage.png",
					"piece": "mage",
					"attack": 10,
					"type": "melee"},
					{"url": "img/pieces/pmage.png",
					"piece": "mage",
					"attack": 7,
					"type": "ranged"},
					{"url": "img/pieces/pmage.png",
					"piece": "mage",
					"attack": 4,
					"type": "magic"}],
					[{"url": "img/pieces/pchampion.png",
					"piece": "champion",
					"attack": 10,
					"type": "melee"},
					{"url": "img/pieces/pchampion.png",
					"piece": "champion",
					"attack": 7,
					"type": "ranged"},
					{"url": "img/pieces/pchampion.png",
					"piece": "champion",
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
   			case "gral":
   				if (gralType == undefined) {
   					gralType = selected.dataset.type;
   					gralAttack = selected.dataset.attack;
   					$(selected).attr('src', 'img/pieces/o' + selected.dataset.piece + '.png');
   					$(selected).addClass('selectedPiece');
   					console.log(gralType);
   				} else {
   					alert("Ya seleccionaste un tipo de General");
   				}
   				break;
   			case "spy":
   				if (spyType == undefined) {
   					spyType = selected.dataset.type;
   					spyAttack = selected.dataset.attack;
   					$(selected).attr('src', 'img/pieces/o' + selected.dataset.piece + '.png');
   					$(selected).addClass('selectedPiece');
   					console.log(spyType);
   				} else {
   					alert("Ya seleccionaste un tipo de Espía");
   				}
   				break;
   			case "mage":
   				if (mageType == undefined) {
   					mageType = selected.dataset.type;
   					mageAttack = selected.dataset.attack;
   					$(selected).attr('src', 'img/pieces/o' + selected.dataset.piece + '.png');
   					$(selected).addClass('selectedPiece');
   					console.log(mageType);
   				} else {
   					alert("Ya seleccionaste un tipo de Mago");
   				}
   				break;
   			case "champion":
   				if (championType == undefined) {
   					championType = selected.dataset.type;
   					championAttack = selected.dataset.attack;
   					$(selected).attr('src', 'img/pieces/o' + selected.dataset.piece + '.png');
   					$(selected).addClass('selectedPiece');
   					console.log(championType);
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
		'text': "Elegir suplentes"
	}).appendTo('#container')

	$('#selectionDone').on('click', function(){
		if (kingType == undefined ||
			gralType == undefined ||
			spyType == undefined ||
			mageType == undefined ||
			championType == undefined ||
			pawnType == undefined){
			alert('No seleccionaste todas las piezas');
		} else {
			$('.title').fadeOut('slow');
			$('.classOption').fadeOut('slow');
			$('.pieceType').fadeOut('slow');
			$('#selectionDone').fadeOut('slow', function(){
				chooseBenchPieces();
			});
		}
		

	});
};