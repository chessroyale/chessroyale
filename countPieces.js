function countPieces(){
	var orangePieces = [];
	var purplePieces = [];
	for(i=0; i < 14;i++){
		for(j=0; j < 5; j++) {
			var id = '#squareX' + (j + 1) + 'Y' + (i + 1);
			var piece = $(id).children()[0];
			if (piece != undefined){
   				console.log(piece);
   				if ($(piece).hasClass('active')){
   					switch(piece.dataset.side){
   						case "orange":
   							orangePieces.push(piece);
   						break;
   						case "purple":
   							purplePieces.push(piece);
   						break;
   					}
   				}
			}			
		}
	}

	if (orangePieces != undefined) {
		console.log(orangePieces.length);
		if (orangePieces.length >= 6){
			for(i=0; i < 14;i++){
				for(j=0; j < 5; j++) {
					var id = '#squareX' + (j + 1) + 'Y' + (i + 1);
					var piece = $(id).children()[0];
					if (piece != undefined){
		   				if ($(id).hasClass('bench') && piece.dataset.side == 'orange'){
		   					if (!$(piece).hasClass('bench')){
		   						$(piece).addClass('bench');
		   					}		   					
		   				}
					}			
				}
			}
		}
		if (orangePieces.length < 6) {
			for(i=0; i < 14;i++){
				for(j=0; j < 5; j++) {
					var id = '#squareX' + (j + 1) + 'Y' + (i + 1);
					var piece = $(id).children()[0];
					if (piece != undefined){
		   				console.log(piece);
		   				if ($(piece).hasClass('bench') && piece.dataset.side == 'orange'){
		   					$(piece).removeClass('bench');
		   				}
					}			
				}
			}
		}
		if (orangePieces.length <3) {
			alert('Perdiste el juego');
		}	
	}
	
	if (purplePieces != undefined) {
		console.log(orangePieces.length);
		if (purplePieces.length >= 6){

		}
		if (orangePieces.length < 6) {
			for(i=0; i < 14;i++){
				for(j=0; j < 5; j++) {
					var id = '#squareX' + (j + 1) + 'Y' + (i + 1);
					var piece = $(id).children()[0];
					if (piece != undefined){
		   				console.log(piece);
		   				if ($(piece).hasClass('bench') && piece.dataset.side == 'purple'){
		   					$(piece).removeClass('bench');
		   				}
					}			
				}
			}
		}
		if (purplePieces.length <3) {
			alert('Perdiste el juego');
		}	
	}
}