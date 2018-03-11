function playGame(){
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
            } else if ($(selected).children('div.bench').length > 0){
               alert('No se puede seleccionar pieza suplente');
   			/*} else if ($(selected).children()[0].dataset.piece == "opawn" ||
   						$(selected).children()[0].dataset.piece == "omage" ||
   						$(selected).children()[0].dataset.piece == "ochampion" ||
   						$(selected).children()[0].dataset.piece == "ospy" ||
   						$(selected).children()[0].dataset.piece == "ogral" ||
   						$(selected).children()[0].dataset.piece == "oking"  ){
   				alert('No puedes seleccionar pieza rival');*/
            } else if ($(selected).children('div.prisoner').length > 0){
               payRansom(selected);
   			} else if ($(selected).children('div.frozen').length > 0){
               alert('Pieza congelada');
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
               	$("*").removeClass('availiableAttack');
   				$(savedSquare).removeClass('selected');
   				savedPiece = undefined;
   				savedSquare = undefined;
   			} else {
   				if ($(selected).children()[0] != undefined) {
                  if ($(savedPiece).hasClass('frozen')) {
                     console.log('No se puede atacar con pieza congelada');
                  } else {
                     switch($(savedPiece)[0].dataset.side){
                        case "orange":
                           if ($(selected).children()[0].id == "ppawn" ||
                              $(selected).children()[0].id == "pmage" ||
                              $(selected).children()[0].id == "pchampion" ||
                              $(selected).children()[0].id == "pspy" ||
                              $(selected).children()[0].id == "pmageBench" ||
                              $(selected).children()[0].id == "pchampionBench" ||
                              $(selected).children()[0].id == "pspyBench" ||
                              $(selected).children()[0].id == "pgral" ||
                              $(selected).children()[0].id == "pking"){
                              //alert('Atacando!');
                              attackingEnemy($(selected), savedPiece);
                           } else {
                              //alert('Esa casilla ya está ocupada');
                              savedSquare = $(selected)[0];
                              savedPiece = $(selected).children()[0];
                              $("*").removeClass('selected');
                              $("*").removeClass('availiableMove');
                              $("*").removeClass('availiableAttack');
                              $(selected).addClass('selected');
                              availiableMovements(savedSquare, savedPiece);
                              console.log(savedSquare);
                              console.log(savedPiece);
                           }
                        break;
                        case "purple":
                           if ($(selected).children()[0].id == "opawn" ||
                              $(selected).children()[0].id == "omage" ||
                              $(selected).children()[0].id == "ochampion" ||
                              $(selected).children()[0].id == "ospy" ||
                              $(selected).children()[0].id == "omageBench" ||
                              $(selected).children()[0].id == "ochampionBench" ||
                              $(selected).children()[0].id == "ospyBench" ||
                              $(selected).children()[0].id == "ogral" ||
                              $(selected).children()[0].id == "oking"){
                              //alert('Atacando!');
                              attackingEnemy($(selected), savedPiece);
                           } else {
                              //alert('Esa casilla ya está ocupada');
                              savedSquare = $(selected)[0];
                              savedPiece = $(selected).children()[0];
                              $("*").removeClass('selected');
                              $("*").removeClass('availiableMove');
                                 $("*").removeClass('availiableAttack');
                              $(selected).addClass('selected');
                              availiableMovements(savedSquare, savedPiece);
                              console.log(savedSquare);
                              console.log(savedPiece);
                           }
                        break;
                     }
                  }                       					
   				} else if ($(selected).hasClass('availiableMove')){
                  if (!$(savedPiece).hasClass('active')){
                     $(savedPiece).addClass('active');
                  }
   					$(savedPiece).remove();
   					$(savedPiece).appendTo($(selected));
                  cooldown(savedPiece, 750);
   					$(savedSquare).removeClass('selected');
   					//$(selected).addClass('selected');
   					$("*").removeClass('availiableMove');
                  	$("*").removeClass('availiableAttack');
   					savedPiece = undefined;
   					savedSquare = undefined;
                  countPieces();
   				} else {
   					alert('Movimiento no permitido');
   				}
   			}
   			
   		}

	});

};
//});