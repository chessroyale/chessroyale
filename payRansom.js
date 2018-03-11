function payRansom(recovered){
	countPieces();
	console.log(recovered);

	var recoveredPiece = $(recovered).children()[0];

	var purpleScore = $('#purpleGoldValue')[0].dataset.score;
	var orangeScore = $('#orangeGoldValue')[0].dataset.score;

	$(recoveredPiece).removeClass('prisoner');

	var amountTime = $(recoveredPiece)[0].dataset.captured;

	switch($(recoveredPiece)[0].dataset.side){
		case "orange":
			$(recoveredPiece)[0].dataset.value = $(recoveredPiece)[0].dataset.value * amountTime;
			var pieceValue = $(recoveredPiece)[0].dataset.value;
			if (orangeScore < pieceValue){
				alert('No tenés oro suficiente');
				$(recoveredPiece).addClass('prisoner');
			} else {
				var orangeLowerScore = orangeScore - pieceValue;
				payingRansom();
			}
		break;
		case "purple":
			$(recoveredPiece)[0].dataset.value = $(recoveredPiece)[0].dataset.value * amountTime;
			var pieceValue = $(recoveredPiece)[0].dataset.value;
			if (purpleScore < pieceValue){
				alert('No tenés oro suficiente');
				$(recoveredPiece).addClass('prisoner');
			} else {
				var purpleLowerScore = purpleScore - pieceValue;
				payingRansom();
			}
		break;
	}

	function payingRansom() {
		switch($(recoveredPiece)[0].dataset.side){
			case "orange":
				var benchOne = $('#squareX5Y2')[0];
				var benchTwo = $('#squareX4Y1')[0];
				var benchThree = $('#squareX5Y1')[0];
							

				if ($(benchOne).children().length == 0) {
					$(recoveredPiece).appendTo(benchOne);
					countPieces();
					changeScore();
				} else {
					if ($(benchTwo).children().length == 0) {
						$(recoveredPiece).appendTo(benchTwo);
						countPieces();
						changeScore();
					} else {
						if ($(benchThree).children().length == 0) {
							$(recoveredPiece).appendTo(benchThree);
							countPieces();
							changeScore();
						} else {
							alert('Libera la zona de suplentes');
						}
					} 
				}	
			break;
			case "purple":
				var benchOne = $('#squareX1Y13')[0];
				var benchTwo = $('#squareX1Y14')[0];
				var benchThree = $('#squareX2Y14')[0];
				
				if ($(benchOne).children().length == 0) {
					$(recoveredPiece).appendTo(benchOne);
					countPieces();
					changeScore();
				} else {
					if ($(benchTwo).children().length == 0) {
						$(recoveredPiece).appendTo(benchTwo);
						countPieces();
						changeScore();
					} else {
						if ($(benchThree).children().length == 0) {
							$(recoveredPiece).appendTo(benchThree);
							countPieces();
							changeScore();
						} else {
							alert('Libera la zona de suplentes');
						}
					} 
				}	
			break;
		}
	}

	function changeScore(){
		$(recoveredPiece)[0].dataset.captured = 0;

		$(recoveredPiece).removeClass('prisoner');

		$(recoveredPiece)[0].dataset.value = $(recoveredPiece)[0].dataset.value * amountTime;
		$($(recoveredPiece).children()[1]).css('width', 100);
		$($(recoveredPiece).children()[1]).css('background-color', 'green');

		switch($(recoveredPiece)[0].dataset.piece) {
			case "king":
				$(recoveredPiece)[0].dataset.life = 60;			
			break;
			case "gral":
				$(recoveredPiece)[0].dataset.life = 50;
			break;
			case "spy":
				$(recoveredPiece)[0].dataset.life = 20;
			break;
			case "mage":
				$(recoveredPiece)[0].dataset.life = 30;
			break;
			case "champion":
				$(recoveredPiece)[0].dataset.life = 40;
			break;
			case "pawn":
				$(recoveredPiece)[0].dataset.life = 15;
			break;
		}

		switch($(recoveredPiece)[0].dataset.side){
			case "orange":
				var currentScore = $('#purpleGoldValue')[0].dataset.score;
				var currentValue = $(recoveredPiece)[0].dataset.value;
				var newScore = (currentScore * 1) + (currentValue * 1);
				$('#purpleGoldValue')[0].dataset.score = newScore; 
				$('#orangeGoldValue')[0].dataset.score = orangeLowerScore; 
				$('#purpleGoldValue').html(newScore); 
				$('#orangeGoldValue').html(orangeLowerScore); 
			break;
			case "purple":
				var currentScore = $('#orangeGoldValue')[0].dataset.score;
				var currentValue = $(recoveredPiece)[0].dataset.value;
				var newScore = (currentScore * 1) + (currentValue * 1);
				$('#orangeGoldValue')[0].dataset.score = newScore; 
				$('#purpleGoldValue')[0].dataset.score = purpleLowerScore; 
				$('#orangeGoldValue').html(newScore); 
				$('#purpleGoldValue').html(purpleLowerScore); 
			break;
		}			
	}	
}