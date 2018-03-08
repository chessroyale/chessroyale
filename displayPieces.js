function displayPieces(){
	var pieces = [{"id": "oking",
							"url": "img/pieces/oking.png",
							"class": "piece",
							"piece": "king",
							"side": "orange",
							"value": 100,
							"life": 60,
							"attack": kingAttack,
							"type": kingType},
							{"id": "ogral",
							"url": "img/pieces/ogral.png",
							"class": "piece",
							"piece": "gral",
							"side": "orange",
							"value": 80,
							"life": 50,
							"attack": gralAttack,
							"type": gralType},
							{"id": "omage",
							"url": "img/pieces/omage.png",
							"class": "piece",
							"piece": "mage",
							"side": "orange",
							"value": 50,
							"life": 30,
							"attack": mageAttack,
							"type": mageType},
							{"id": "opawn",
							"url": "img/pieces/opawn.png",
							"class": "piece",
							"piece": "pawn",
							"side": "orange",
							"value": 20,
							"life": 15,
							"attack": pawnAttack,
							"type": pawnType},
							{"id": "ospy",
							"url": "img/pieces/ospy.png",
							"class": "piece",
							"piece": "spy",
							"side": "orange",
							"value": 50,
							"life": 20,
							"attack": spyAttack,
							"type": spyType},
							{"id": "ochampion",
							"url": "img/pieces/ochampion.png",
							"class": "piece",
							"piece": "champion",
							"side": "orange",
							"value": 50,
							"life": 40,
							"attack": championAttack,
							"type": championType},
							{"id": "pking",
							"url": "img/pieces/pking.png",
							"class": "piece",
							"piece": "king",
							"side": "purple",
							"value": 100,
							"life": 60,
							"attack": kingAttack,
							"type": kingType},
							{"id": "pgral",
							"url": "img/pieces/pgral.png",
							"class": "piece",
							"piece": "gral",
							"side": "purple",
							"value": 80,
							"life": 50,
							"attack": gralAttack,
							"type": gralType},
							{"id": "pmage",
							"url": "img/pieces/pmage.png",
							"class": "piece",
							"piece": "mage",
							"side": "purple",
							"value": 50,
							"life": 30,
							"attack": mageAttack,
							"type": mageType},
							{"id": "ppawn",
							"url": "img/pieces/ppawn.png",
							"class": "piece",
							"piece": "pawn",
							"side": "purple",
							"value": 20,
							"life": 15,
							"attack": pawnAttack,
							"type": pawnType},
							{"id": "pspy",
							"url": "img/pieces/pspy.png",
							"class": "piece",
							"piece": "spy",
							"side": "purple",
							"value": 50,
							"life": 20,
							"attack": spyAttack,
							"type": spyType},
							{"id": "pchampion",
							"url": "img/pieces/pchampion.png",
							"class": "piece",
							"piece": "champion",
							"side": "purple",
							"value": 50,
							"life": 40,
							"attack": championAttack,
							"type": championType}]

	var benchPieces = [{"id": "omageBench",
							"url": "img/pieces/omage.png",
							"class": "piece",
							"piece": "mage",
							"side": "orange",
							"value": 50,
							"life": 30,
							"attack": mageBenchAttack,
							"type": mageBenchType},
							{"id": "ospyBench",
							"url": "img/pieces/ospy.png",
							"class": "piece",
							"piece": "spy",
							"side": "orange",
							"value": 50,
							"life": 20,
							"attack": spyBenchAttack,
							"type": spyBenchType},
							{"id": "ochampionBench",
							"url": "img/pieces/ochampion.png",
							"class": "piece",
							"piece": "champion",
							"side": "orange",
							"value": 50,
							"life": 40,
							"attack": championBenchAttack,
							"type": championBenchType},
							{"id": "pmageBench",
							"url": "img/pieces/pmage.png",
							"class": "piece",
							"piece": "mage",
							"side": "purple",
							"value": 50,
							"life": 30,
							"attack": mageBenchAttack,
							"type": mageBenchType},
							{"id": "pspyBench",
							"url": "img/pieces/pspy.png",
							"class": "piece",
							"piece": "spy",
							"side": "purple",
							"value": 50,
							"life": 20,
							"attack": spyBenchAttack,
							"type": spyBenchType},
							{"id": "pchampionBench",
							"url": "img/pieces/pchampion.png",
							"class": "piece",
							"piece": "champion",
							"side": "purple",
							"value": 50,
							"life": 40,
							"attack": championBenchAttack,
							"type": championBenchType}]

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

	var bench = ['#squareX4Y1',
					'#squareX5Y1',
					'#squareX5Y2',
					'#squareX1Y13',
					'#squareX1Y14',
					'#squareX2Y14']


	for(i=0; i < pieces.length; i++) {
		$('<div/>', {
		'id': pieces[i].id,
		'class': pieces[i].class,
		'data-piece': pieces[i].piece,
		'data-side': pieces[i].side,
		'data-value': pieces[i].value,
		'data-life': pieces[i].life,
		'data-attack': pieces[i].attack,
		'data-damage': pieces[i].life,
		'data-type': pieces[i].type
		}).appendTo(initialPositions[i]);
		$('<img/>', {
			'id': pieces[i].id + 'img',
			'src': pieces[i].url,
			'class': 'pieceimg'
		}).appendTo($('#'+ pieces[i].id));

		$('#'+ pieces[i].id).addClass('active');
	}

	for(i=0; i < benchPieces.length; i++) {
		$('<div/>', {
		'id': benchPieces[i].id,
		'class': benchPieces[i].class,
		'data-piece': benchPieces[i].piece,
		'data-side': benchPieces[i].side,
		'data-value': benchPieces[i].value,
		'data-life': benchPieces[i].life,
		'data-attack': benchPieces[i].attack,
		'data-damage': benchPieces[i].life,
		'data-type': benchPieces[i].type
		}).appendTo(bench[i]);
		$('<img/>', {
			'id': benchPieces[i].id + 'img',
			'src': benchPieces[i].url,
			'class': 'pieceimg'
		}).appendTo($('#'+ benchPieces[i].id));

		$('#'+ benchPieces[i].id).addClass('bench');
	}

	for(i=0; i < 14;i++){
		for(j=0; j < 5; j++) {
			var id = '#squareX' + (j + 1) + 'Y' + (i + 1);
			if ($(id).children()[0] != undefined){
   					$('<div/>', {
					'id': "lifebar" + $(id).children()[0].dataset.piece,
					'class': 'lifebar'
					}).appendTo($(id).children()[0]);

					switch($(id).children()[0].dataset.type) {
						case 'melee':
							$('<img/>', {
								'id': $(id).children()[0].dataset.piece + "MeleeAttack",
								'class': 'attackType',
								'src': 'img/pieces/melee.png'
							}).appendTo($(id).children()[0]);
							break;
						case 'ranged':
							$('<img/>', {
								'id': $(id).children()[0].dataset.piece + "RangedAttack",
								'class': 'attackType',
								'src': 'img/pieces/ranged.png'
							}).appendTo($(id).children()[0]);
							break;
						case 'magic':
							$('<img/>', {
								'id': $(id).children()[0].dataset.piece + "MagicAttack",
								'class': 'attackType',
								'src': 'img/pieces/magic.png'
							}).appendTo($(id).children()[0]);
							break;
					}
			}
		}
	}
}