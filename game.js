$(document).ready(function(){
	//$('.square').on('click', function(){
	//	console.log($('.square').attr('id'));
	//})

	var savedSquare;
	var savedPiece;

	$(".square").click(function(e){
   		e.preventDefault();
   		e.stopPropagation();
   		var selectedAlpha = '#' + $(this)[0].id;
   		var selected = $(selectedAlpha)[0];
   		console.log(selected);
   		
   		

   		//Check if there is saved square
   		if (savedSquare == undefined) {
   			//Check if there is piece in square
   			if ( $(selected).children().length == 0 ) {
   				alert('Seleccioná una pieza');
   			} else if ($(selected).children()[0].dataset.piece == "wpawn" ||
   						$(selected).children()[0].dataset.piece == "whorse" ||
   						$(selected).children()[0].dataset.piece == "wtower" ||
   						$(selected).children()[0].dataset.piece == "wbishop" ||
   						$(selected).children()[0].dataset.piece == "wqueen" ||
   						$(selected).children()[0].dataset.piece == "wking"  ){
   				alert('No puedes seleccionar pieza rival');
   			} else {
   				console.log('Tiene pieza');
   				if (savedPiece == undefined){
   					savedSquare = $(selected)[0];
   					savedPiece = $(selected).children()[0];
   					$("*").removeClass('selected');
   					$(selected).addClass('selected');
   					availiableMovements(savedSquare, savedPiece);
   					console.log(savedSquare);
   					console.log(savedPiece);
   				}
   			}
   		} else {
   			//Check if the saved square and the clicked square are the same
   			if (selected === savedSquare) {
   				$("*").removeClass('selected');
   				$("*").removeClass('availiableMove');
   				$(savedSquare).removeClass('selected');
   				savedPiece = undefined;
   				savedSquare = undefined;
   			} else {
   				if ($(selected).children()[0] != undefined) {
   					if ($(selected).children()[0].dataset.piece == "wpawn" ||
   						$(selected).children()[0].dataset.piece == "whorse" ||
   						$(selected).children()[0].dataset.piece == "wtower" ||
   						$(selected).children()[0].dataset.piece == "wbishop" ||
   						$(selected).children()[0].dataset.piece == "wqueen" ||
   						$(selected).children()[0].dataset.piece == "wking"  ){
   						//alert('Atacando!');
   						attackingEnemy($(selected), savedPiece);
   					} else {
   						alert('Esa casilla ya está ocupada');
   					}
   				} else if ($(selected).hasClass('availiableMove')){
   					$(savedPiece).remove();
   					$(savedPiece).appendTo($(selected));
   					$(savedSquare).removeClass('selected');
   					//$(selected).addClass('selected');
   					$("*").removeClass('availiableMove');
   					savedPiece = undefined;
   					savedSquare = undefined;
   				} else {
   					alert('Movimiento no permitido');
   				}
   			}
   			
   		}

   		function availiableMovements(savedSquare, savedPiece) {
   			var x = savedSquare.dataset.x;
   			var y = savedSquare.dataset.y;

   			switch(savedPiece.dataset.piece) {
   				case "ppawn": 
   					var availiableMove2 = "#squareX" + x + "Y" + (y - 1);
   					var availiableMove9 = "#squareX" + x + "Y" + (y - 2);
   					var availiableMove7 = "#squareX" + x + "Y" + (y * 1 + 1);
   					var availiableMove11 = "#squareX" + x + "Y" + (y * 1 + 2);
   					var availiableMove4 = "#squareX" + (x - 1) + "Y" + y;
   					var availiableMove12 = "#squareX" + (x - 2) + "Y" + y;
   					var availiableMove5 = "#squareX" + (x * 1 + 1) + "Y" + y;
   					var availiableMove10 = "#squareX" + (x * 1 + 2) + "Y" + y;
   					var availiableMove1 = "#squareX" + (x - 1) + "Y" + (y - 1);
   					var availiableMove3 = "#squareX" + (x * 1 + 1) + "Y" + (y - 1);
   					var availiableMove6 = "#squareX" + (x - 1) + "Y" + (y * 1 + 1);
   					var availiableMove8 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 1);
   					break;
   				case "ptower":
   					var availiableMove2 = "#squareX" + x + "Y" + (y - 1);
   					var availiableMove9 = "#squareX" + x + "Y" + (y - 2);
   					var availiableMove7 = "#squareX" + x + "Y" + (y * 1 + 1);
   					var availiableMove11 = "#squareX" + x + "Y" + (y * 1 + 2);
   					var availiableMove4 = "#squareX" + (x - 1) + "Y" + y;
   					var availiableMove12 = "#squareX" + (x - 2) + "Y" + y;
   					var availiableMove5 = "#squareX" + (x * 1 + 1) + "Y" + y;
   					var availiableMove10 = "#squareX" + (x * 1 + 2) + "Y" + y;
   					break;
   				case "pbishop":
   					var availiableMove1 = "#squareX" + (x - 1) + "Y" + (y - 1);
   					var availiableMove3 = "#squareX" + (x * 1 + 1) + "Y" + (y - 1);
   					var availiableMove6 = "#squareX" + (x - 1) + "Y" + (y * 1 + 1);
   					var availiableMove8 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 1);
   					var availiableMove16 = "#squareX" + (x - 2) + "Y" + (y - 2);
   					var availiableMove13 = "#squareX" + (x * 1 + 2) + "Y" + (y - 2);
   					var availiableMove15 = "#squareX" + (x - 2) + "Y" + (y * 1 + 2);
   					var availiableMove14 = "#squareX" + (x * 1 + 2) + "Y" + (y * 1 + 2);
   					break;
   				case "phorse":
					var availiableMove2 = "#squareX" + (x - 1) + "Y" + (y - 2);
   					var availiableMove7 = "#squareX" + (x * 1 + 1) + "Y" + (y - 2);
   					var availiableMove4 = "#squareX" + (x - 1) + "Y" + (y * 1 + 2);
   					var availiableMove5 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 2);
   					var availiableMove1 = "#squareX" + (x - 2) + "Y" + (y - 1);
   					var availiableMove3 = "#squareX" + (x * 1 + 2) + "Y" + (y - 1);
   					var availiableMove6 = "#squareX" + (x - 2) + "Y" + (y * 1 + 1);
   					var availiableMove8 = "#squareX" + (x * 1 + 2) + "Y" + (y * 1 + 1);
   					break;
   				case "pqueen":
   					var availiableMove2 = "#squareX" + x + "Y" + (y - 1);
   					var availiableMove9 = "#squareX" + x + "Y" + (y - 2);
   					var availiableMove7 = "#squareX" + x + "Y" + (y * 1 + 1);
   					var availiableMove11 = "#squareX" + x + "Y" + (y * 1 + 2);
   					var availiableMove4 = "#squareX" + (x - 1) + "Y" + y;
   					var availiableMove12 = "#squareX" + (x - 2) + "Y" + y;
   					var availiableMove5 = "#squareX" + (x * 1 + 1) + "Y" + y;
   					var availiableMove10 = "#squareX" + (x * 1 + 2) + "Y" + y;
   					var availiableMove1 = "#squareX" + (x - 1) + "Y" + (y - 1);
   					var availiableMove3 = "#squareX" + (x * 1 + 1) + "Y" + (y - 1);
   					var availiableMove6 = "#squareX" + (x - 1) + "Y" + (y * 1 + 1);
   					var availiableMove8 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 1);
   					var availiableMove16 = "#squareX" + (x - 2) + "Y" + (y - 2);
   					var availiableMove13 = "#squareX" + (x * 1 + 2) + "Y" + (y - 2);
   					var availiableMove15 = "#squareX" + (x - 2) + "Y" + (y * 1 + 2);
   					var availiableMove14 = "#squareX" + (x * 1 + 2) + "Y" + (y * 1 + 2);
   					break;
   				case "pking":
   					var availiableMove2 = "#squareX" + x + "Y" + (y - 1);
   					var availiableMove7 = "#squareX" + x + "Y" + (y * 1 + 1);
   					var availiableMove4 = "#squareX" + (x - 1) + "Y" + y;
   					var availiableMove5 = "#squareX" + (x * 1 + 1) + "Y" + y;
   					var availiableMove1 = "#squareX" + (x - 1) + "Y" + (y - 1);
   					var availiableMove3 = "#squareX" + (x * 1 + 1) + "Y" + (y - 1);
   					var availiableMove6 = "#squareX" + (x - 1) + "Y" + (y * 1 + 1);
   					var availiableMove8 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 1);
   					break;
   				default:
   					console.log('error');
   				;
   			}

   			$(availiableMove1).addClass('availiableMove availiableAttack');
   			$(availiableMove2).addClass('availiableMove availiableAttack');
   			$(availiableMove3).addClass('availiableMove availiableAttack');
   			$(availiableMove4).addClass('availiableMove availiableAttack');
   			$(availiableMove5).addClass('availiableMove availiableAttack');
   			$(availiableMove6).addClass('availiableMove availiableAttack');
   			$(availiableMove7).addClass('availiableMove availiableAttack');
   			$(availiableMove8).addClass('availiableMove availiableAttack');
   			$(availiableMove9).addClass('availiableMove availiableAttack');
   			$(availiableMove10).addClass('availiableMove availiableAttack');
   			$(availiableMove11).addClass('availiableMove availiableAttack');
   			$(availiableMove12).addClass('availiableMove availiableAttack');
   			$(availiableMove13).addClass('availiableMove availiableAttack');
   			$(availiableMove14).addClass('availiableMove availiableAttack');
   			$(availiableMove15).addClass('availiableMove availiableAttack');
   			$(availiableMove16).addClass('availiableMove availiableAttack');

   			for(i=0; i < 14;i++){
				for(j=0; j < 5; j++) {
					var id = '#squareX' + (j + 1) + 'Y' + (i + 1);
	   			if ($(id).children()[0] != undefined){
   					$(id).removeClass('availiableMove');
   					}
   				}
   			}
   		};


   		function attackingEnemy(enemy, savedPiece){
   			if (enemy.hasClass('availiableAttack')) {
   				console.log('Atacando!');

   				var enemyPiece = enemy[0].children[0];

   				var life = enemyPiece.dataset.life;
   				console.log(life);
   				var attack = savedPiece.dataset.attack;
   				console.log(attack);
   				var damage = savedPiece.dataset.damage;
   				console.log(damage);

   				var newLife = life - attack;
   				var newBarValue = (newLife * 112)/damage;
   				
   				$(enemyPiece).attr('data-life', newLife);

   				$(enemyPiece.children[1]).css('width', newBarValue);

   				var midLife = 60*1.12;
   				var lowLife = 30*1.12;
   				if (newBarValue < lowLife) {
   					$(enemyPiece.children[1]).css('background-color', 'red');
   				} else if (newBarValue < midLife) {
   					$(enemyPiece.children[1]).css('background-color', 'yellow');
   				}


   				if (enemyPiece.dataset.life <= 0) {
   					$(enemy[0]).empty();
   				}
   			}
   		};


	});


});