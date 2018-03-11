function collectRansom(recovered){
	countPieces();
	console.log(recovered);

	$(recovered).removeClass('prisoner');

	var amountTime = $(recovered)[0].dataset.captured;
	$(recovered)[0].dataset.captured = 0;

	$(recovered)[0].dataset.value = $(recovered)[0].dataset.value * amountTime;
	$($(recovered).children()[1]).css('width', 100);
	$($(recovered).children()[1]).css('background-color', 'green');

	switch($(recovered)[0].dataset.piece) {
		case "king":
			$(recovered)[0].dataset.life = 60;			
		break;
		case "gral":
			$(recovered)[0].dataset.life = 50;
		break;
		case "spy":
			$(recovered)[0].dataset.life = 20;
		break;
		case "mage":
			$(recovered)[0].dataset.life = 30;
		break;
		case "champion":
			$(recovered)[0].dataset.life = 40;
		break;
		case "pawn":
			$(recovered)[0].dataset.life = 15;
		break;
	}

	switch($(recovered)[0].dataset.side){
		case "orange":
			var currentScore = $('#purpleGoldValue')[0].dataset.score;
			var currentValue = $(recovered)[0].dataset.value;
			var newScore = (currentScore * 1) + (currentValue * 1);
			$('#purpleGoldValue')[0].dataset.score = newScore; 
			$('#purpleGoldValue').html(newScore); 
		break;
		case "purple":
			var currentScore = $('#orangeGoldValue')[0].dataset.score;
			var currentValue = $(recovered)[0].dataset.value;
			var newScore = (currentScore * 1) + (currentValue * 1);
			$('#orangeGoldValue')[0].dataset.score = newScore; 
			$('#orangeGoldValue').html(newScore); 
		break;
	}

	switch($(recovered)[0].dataset.side){
		case "orange":
			var benchOne = $('#squareX5Y2')[0];
			var benchTwo = $('#squareX4Y1')[0];
			var benchThree = $('#squareX5Y1')[0];
						

			if ($(benchOne).children().length == 0) {
				$(recovered).appendTo(benchOne);
				countPieces();
			} else {
				if ($(benchTwo).children().length == 0) {
					$(recovered).appendTo(benchTwo);
					countPieces();
				} else {
					$(recovered).appendTo(benchThree);
					countPieces();					
				}
			}	
		break;
		case "purple":
			var benchOne = $('#squareX1Y13')[0];
			var benchTwo = $('#squareX1Y14')[0];
			var benchThree = $('#squareX2Y14')[0];
			
			if ($(benchOne).children().length == 0) {
				$(recovered).appendTo(benchOne);
				countPieces();
			} else {
				if ($(benchTwo).children().length == 0) {
					$(recovered).appendTo(benchTwo);
					countPieces();
				} else {
					$(recovered).appendTo(benchThree);
					countPieces();
				} 
			}	
		break;
	}
}