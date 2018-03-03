function capturingPiece(enemyPiece){
	var parent = enemyPiece[0];
	var prisoner = parent.children[0];
	var cellOne = $('#squareX4Y14')[0];
	var cellTwo = $('#squareX5Y14')[0];
	var cellThree = $('#squareX5Y13')[0];
	
	if ($(cellOne).children().length == 0) {
		$(prisoner).appendTo(cellOne);
	} else {
		if ($(cellTwo).children().length == 0) {
			var firstPrisoner = $(cellOne).children()[0];
			$(firstPrisoner).appendTo(cellTwo);
			$(prisoner).appendTo(cellOne);
		} else {
			if ($(cellThree).children().length == 0) {
				var firstPrisoner = $(cellTwo).children()[0];
				$(firstPrisoner).appendTo(cellThree);
				var secondPrisoner = $(cellOne).children()[0];
				$(secondPrisoner).appendTo(cellTwo);
				$(prisoner).appendTo(cellOne);
			} else {
				var firstPrisoner = $(cellThree).children()[0];
				cashRescue(firstPrisoner);
				cellThree.removeChild(firstPrisoner);
				var secondPrisoner = $(cellTwo).children()[0];
				$(secondPrisoner).appendTo(cellThree);
				var thirdPrisoner = $(cellOne).children()[0];
				$(thirdPrisoner).appendTo(cellTwo);
				$(prisoner).appendTo(cellOne);
			}
		}
	}				
}