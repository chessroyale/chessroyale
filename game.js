//$(document).ready(function(){
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
   			} else if ($(selected).children()[0].dataset.piece == "opawn" ||
   						$(selected).children()[0].dataset.piece == "ohorse" ||
   						$(selected).children()[0].dataset.piece == "otower" ||
   						$(selected).children()[0].dataset.piece == "obishop" ||
   						$(selected).children()[0].dataset.piece == "oqueen" ||
   						$(selected).children()[0].dataset.piece == "oking"  ){
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
   					if ($(selected).children()[0].dataset.piece == "opawn" ||
   						$(selected).children()[0].dataset.piece == "ohorse" ||
   						$(selected).children()[0].dataset.piece == "otower" ||
   						$(selected).children()[0].dataset.piece == "obishop" ||
   						$(selected).children()[0].dataset.piece == "oqueen" ||
   						$(selected).children()[0].dataset.piece == "oking"  ){
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

   		


   		


	});


//});