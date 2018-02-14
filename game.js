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
   				console.log('No puedes seleccionar pieza rival');
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
   				$("*").removeClass('availiable');
   				$(savedSquare).removeClass('selected');
   				savedPiece = undefined;
   				savedSquare = undefined;
   			} else {
   				if ($(selected).children()[0] != undefined) {
   					alert('Esa casilla ya está ocupada');
   				} else if ($(selected).hasClass('availiable')){
   					$(savedPiece).remove();
   					$(savedPiece).appendTo($(selected));
   					$(savedSquare).removeClass('selected');
   					$(selected).addClass('selected');
   					$("*").removeClass('availiable');
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
   				case "bpawn": 
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
   					$(availiableMove1).addClass('availiable');
   					$(availiableMove2).addClass('availiable');
   					$(availiableMove3).addClass('availiable');
   					$(availiableMove4).addClass('availiable');
   					$(availiableMove5).addClass('availiable');
   					$(availiableMove6).addClass('availiable');
   					$(availiableMove7).addClass('availiable');
   					$(availiableMove8).addClass('availiable');
   					$(availiableMove9).addClass('availiable');
   					$(availiableMove10).addClass('availiable');
   					$(availiableMove11).addClass('availiable');
   					$(availiableMove12).addClass('availiable');
   					break;
   				case "btower":
   					var availiableMove2 = "#squareX" + x + "Y" + (y - 1);
   					var availiableMove9 = "#squareX" + x + "Y" + (y - 2);
   					var availiableMove7 = "#squareX" + x + "Y" + (y * 1 + 1);
   					var availiableMove11 = "#squareX" + x + "Y" + (y * 1 + 2);
   					var availiableMove4 = "#squareX" + (x - 1) + "Y" + y;
   					var availiableMove12 = "#squareX" + (x - 2) + "Y" + y;
   					var availiableMove5 = "#squareX" + (x * 1 + 1) + "Y" + y;
   					var availiableMove10 = "#squareX" + (x * 1 + 2) + "Y" + y;
   					$(availiableMove2).addClass('availiable');
   					$(availiableMove4).addClass('availiable');
   					$(availiableMove5).addClass('availiable');
   					$(availiableMove7).addClass('availiable');
   					$(availiableMove9).addClass('availiable');
   					$(availiableMove10).addClass('availiable');
   					$(availiableMove11).addClass('availiable');
   					$(availiableMove12).addClass('availiable');
   					break;
   				case "bbishop":
   					var availiableMove1 = "#squareX" + (x - 1) + "Y" + (y - 1);
   					var availiableMove3 = "#squareX" + (x * 1 + 1) + "Y" + (y - 1);
   					var availiableMove6 = "#squareX" + (x - 1) + "Y" + (y * 1 + 1);
   					var availiableMove8 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 1);
   					var availiableMove18 = "#squareX" + (x * 1 + 3) + "Y" + (y - 3);
   					var availiableMove24 = "#squareX" + (x - 3) + "Y" + (y * 1 - 3);
   					var availiableMove22 = "#squareX" + (x - 3) + "Y" + (y * 1 + 3);
   					var availiableMove20 = "#squareX" + (x * 1 + 3) + "Y" + (y * 1 + 3);
   					var availiableMove16 = "#squareX" + (x - 2) + "Y" + (y - 2);
   					var availiableMove13 = "#squareX" + (x * 1 + 2) + "Y" + (y - 2);
   					var availiableMove15 = "#squareX" + (x - 2) + "Y" + (y * 1 + 2);
   					var availiableMove14 = "#squareX" + (x * 1 + 2) + "Y" + (y * 1 + 2);
   					$(availiableMove1).addClass('availiable');
   					$(availiableMove3).addClass('availiable');
   					$(availiableMove6).addClass('availiable');
   					$(availiableMove8).addClass('availiable');
   					$(availiableMove13).addClass('availiable');
   					$(availiableMove14).addClass('availiable');
   					$(availiableMove15).addClass('availiable');
   					$(availiableMove16).addClass('availiable');
   					$(availiableMove18).addClass('availiable');
   					$(availiableMove20).addClass('availiable');
   					$(availiableMove22).addClass('availiable');
   					$(availiableMove24).addClass('availiable');
   					break;
   				case "bhorse":
					var availiableMove2 = "#squareX" + (x - 1) + "Y" + (y - 2);
   					var availiableMove7 = "#squareX" + (x * 1 + 1) + "Y" + (y - 2);
   					var availiableMove4 = "#squareX" + (x - 1) + "Y" + (y * 1 + 2);
   					var availiableMove5 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 2);
   					var availiableMove1 = "#squareX" + (x - 2) + "Y" + (y - 1);
   					var availiableMove3 = "#squareX" + (x * 1 + 2) + "Y" + (y - 1);
   					var availiableMove6 = "#squareX" + (x - 2) + "Y" + (y * 1 + 1);
   					var availiableMove8 = "#squareX" + (x * 1 + 2) + "Y" + (y * 1 + 1);
   					$(availiableMove1).addClass('availiable');
   					$(availiableMove2).addClass('availiable');
   					$(availiableMove3).addClass('availiable');
   					$(availiableMove4).addClass('availiable');
   					$(availiableMove5).addClass('availiable');
   					$(availiableMove6).addClass('availiable');
   					$(availiableMove7).addClass('availiable');
   					$(availiableMove8).addClass('availiable');
   					break;
   				case "bqueen":
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
   					var availiableMove17 = "#squareX" + x + "Y" + (y - 3);
   					var availiableMove18 = "#squareX" + (x * 1 + 3) + "Y" + (y - 3);
   					var availiableMove21 = "#squareX" + x + "Y" + (y * 1 + 3);
   					var availiableMove24 = "#squareX" + (x - 3) + "Y" + (y * 1 - 3);
   					var availiableMove23 = "#squareX" + (x - 3) + "Y" + y;
   					var availiableMove22 = "#squareX" + (x - 3) + "Y" + (y * 1 + 3);
   					var availiableMove19 = "#squareX" + (x * 1 + 3) + "Y" + y;
   					var availiableMove20 = "#squareX" + (x * 1 + 3) + "Y" + (y * 1 + 3);
   					var availiableMove16 = "#squareX" + (x - 2) + "Y" + (y - 2);
   					var availiableMove13 = "#squareX" + (x * 1 + 2) + "Y" + (y - 2);
   					var availiableMove15 = "#squareX" + (x - 2) + "Y" + (y * 1 + 2);
   					var availiableMove14 = "#squareX" + (x * 1 + 2) + "Y" + (y * 1 + 2);
   					$(availiableMove1).addClass('availiable');
   					$(availiableMove2).addClass('availiable');
   					$(availiableMove3).addClass('availiable');
   					$(availiableMove4).addClass('availiable');
   					$(availiableMove5).addClass('availiable');
   					$(availiableMove6).addClass('availiable');
   					$(availiableMove7).addClass('availiable');
   					$(availiableMove8).addClass('availiable');
   					$(availiableMove9).addClass('availiable');
   					$(availiableMove10).addClass('availiable');
   					$(availiableMove11).addClass('availiable');
   					$(availiableMove12).addClass('availiable');
   					$(availiableMove13).addClass('availiable');
   					$(availiableMove14).addClass('availiable');
   					$(availiableMove15).addClass('availiable');
   					$(availiableMove16).addClass('availiable');
   					$(availiableMove17).addClass('availiable');
   					$(availiableMove18).addClass('availiable');
   					$(availiableMove19).addClass('availiable');
   					$(availiableMove20).addClass('availiable');
   					$(availiableMove21).addClass('availiable');
   					$(availiableMove22).addClass('availiable');
   					$(availiableMove23).addClass('availiable');
   					$(availiableMove24).addClass('availiable');
   					break;
   				case "bking":
   					var availiableMove2 = "#squareX" + x + "Y" + (y - 1);
   					var availiableMove7 = "#squareX" + x + "Y" + (y * 1 + 1);
   					var availiableMove4 = "#squareX" + (x - 1) + "Y" + y;
   					var availiableMove5 = "#squareX" + (x * 1 + 1) + "Y" + y;
   					var availiableMove1 = "#squareX" + (x - 1) + "Y" + (y - 1);
   					var availiableMove3 = "#squareX" + (x * 1 + 1) + "Y" + (y - 1);
   					var availiableMove6 = "#squareX" + (x - 1) + "Y" + (y * 1 + 1);
   					var availiableMove8 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 1);
   					$(availiableMove1).addClass('availiable');
   					$(availiableMove2).addClass('availiable');
   					$(availiableMove3).addClass('availiable');
   					$(availiableMove4).addClass('availiable');
   					$(availiableMove5).addClass('availiable');
   					$(availiableMove6).addClass('availiable');
   					$(availiableMove7).addClass('availiable');
   					$(availiableMove8).addClass('availiable');
   					break;
   				default:
   					console.log('error');
   				;
   			}
   		};



   		

	});


});