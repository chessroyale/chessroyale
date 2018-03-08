var spyBenchType;
var mageBenchType;
var championBenchType;
var spyBenchAttack;
var mageBenchAttack;
var championBenchAttack;

function chooseBenchPieces(){
	$('<h1/>', {
		'class': 'title',
		'text': 'Elegí tus tropas suplentes'
	}).appendTo('#container');

	$('<p/>', {
		'id': 'benchFirstOption',
		'class': 'classOption',
		'text': 'Melee'
	}).appendTo('#container');

	$('<p/>', {
		'id': 'benchSecondOption',
		'class': 'classOption',
		'text': 'A distancia'
	}).appendTo('#container');

	$('<p/>', {
		'id': 'benchThirdOption',
		'class': 'classOption',
		'text': 'Mágico'
	}).appendTo('#container');

	var pieces = [
					[{"url": "img/pieces/pspy.png",
					"piece": "spy",
					"attack": 15,
					"type": "meleeBench"},
					{"url": "img/pieces/pspy.png",
					"piece": "spy",
					"attack": 11,
					"type": "ranged"},
					{"url": "img/pieces/pspy.png",
					"piece": "spy",
					"attack": 6,
					"type": "magicBench"}],
					[{"url": "img/pieces/pmage.png",
					"piece": "mage",
					"attack": 10,
					"type": "meleeBench"},
					{"url": "img/pieces/pmage.png",
					"piece": "mage",
					"attack": 7,
					"type": "rangedBench"},
					{"url": "img/pieces/pmage.png",
					"piece": "mage",
					"attack": 4,
					"type": "magicBench"}],
					[{"url": "img/pieces/pchampion.png",
					"piece": "champion",
					"attack": 10,
					"type": "meleeBench"},
					{"url": "img/pieces/pchampion.png",
					"piece": "champion",
					"attack": 7,
					"type": "rangedBench"},
					{"url": "img/pieces/pchampion.png",
					"piece": "champion",
					"attack": 4,
					"type": "magicBench"}]		
				]

	for(i=0; i < 3;i++){
		$('<div/>', {
				'id': 'benchPieceLine' + i,
				'class': 'pieceType'
			}).appendTo('#container');
		var lineId = '#benchPieceLine' + i;

		for(j=0; j < 3; j++) {
			$('<img/>', {
				'id': 'benchPiece' + i + j,
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
   			case "spy":
   				if (spyBenchType == undefined) {
   					spyBenchType = selected.dataset.type;
   					spyBenchAttack = selected.dataset.attack;
   					$(selected).attr('src', 'img/pieces/o' + selected.dataset.piece + '.png');
   					$(selected).addClass('selectedPiece');
   					console.log(spyBenchType);
   				} else {
   					spyBenchType = undefined;
   					spyBenchAttack = undefined;
   					$(selected).attr('src', 'img/pieces/p' + selected.dataset.piece + '.png');
   					$(selected).removeClass('selectedPiece');
   					console.log(spyBenchType);
   				}
   				break;
   			case "mage":
   				if (mageBenchType == undefined) {
   					mageBenchType = selected.dataset.type;
   					mageBenchAttack = selected.dataset.attack;
   					$(selected).attr('src', 'img/pieces/o' + selected.dataset.piece + '.png');
   					$(selected).addClass('selectedPiece');
   					console.log(mageBenchType);
   				} else {
   					mageBenchType = undefined;
   					mageBenchAttack = undefined;
   					$(selected).attr('src', 'img/pieces/p' + selected.dataset.piece + '.png');
   					$(selected).removeClass('selectedPiece');
   					console.log(mageBenchType);
   				}
   				break;
   			case "champion":
   				if (championBenchType == undefined) {
   					championBenchType = selected.dataset.type;
   					championBenchAttack = selected.dataset.attack;
   					$(selected).attr('src', 'img/pieces/o' + selected.dataset.piece + '.png');
   					$(selected).addClass('selectedPiece');
   					console.log(championBenchType);
   				} else {
   					championBenchType = undefined;
   					championBenchAttack = undefined;
   					$(selected).attr('src', 'img/pieces/p' + selected.dataset.piece + '.png');
   					$(selected).removeClass('selectedPiece');
   					console.log(championBenchType);
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
		'id': 'benchSelectionDone',
		'type': 'button',
		'class': 'button',
		'text': "¡Todo listo!"
	}).appendTo('#container')

	$('#benchSelectionDone').on('click', function(){
		if (spyBenchType == undefined ||
			mageBenchType == undefined ||
			championBenchType == undefined){
			alert('No seleccionaste todas las piezas');
		} else {
			$('.title').fadeOut('slow');
			$('.classOption').fadeOut('slow');
			$('.pieceType').fadeOut('slow');
			$('#benchSelectionDone').fadeOut('slow', function(){
				countdown();
				drawBoard();
			});
		}
		

	});
};