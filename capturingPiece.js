function capturingPiece(enemyPiece){
	var parent = enemyPiece[0];
	var prisoner = parent.children[0];

	switch(parent.children[0].dataset.side){
		case "orange":
			var cellOne = $('#squareX4Y14')[0];
			var cellTwo = $('#squareX5Y14')[0];
			var cellThree = $('#squareX5Y13')[0];
			
			if ($(cellOne).children().length == 0) {
				$(prisoner).removeClass('active');
				$(prisoner).addClass('prisoner');
				$(prisoner).appendTo(cellOne);
				capturedTime(prisoner);
				countPieces();
			} else {
				if ($(cellTwo).children().length == 0) {
					var firstPrisoner = $(cellOne).children()[0];
					$(firstPrisoner).appendTo(cellTwo);
					$(prisoner).removeClass('active');
					$(prisoner).addClass('prisoner');
					$(prisoner).appendTo(cellOne);
					capturedTime(prisoner);
					countPieces();
				} else {
					if ($(cellThree).children().length == 0) {
						var firstPrisoner = $(cellTwo).children()[0];
						$(firstPrisoner).appendTo(cellThree);
						var secondPrisoner = $(cellOne).children()[0];
						$(secondPrisoner).appendTo(cellTwo);
						$(prisoner).removeClass('active');
						$(prisoner).addClass('prisoner');
						$(prisoner).appendTo(cellOne);
						capturedTime(prisoner);
						countPieces();
					} else {
						var firstPrisoner = $(cellThree).children()[0];
						cellThree.removeChild(firstPrisoner);
						var secondPrisoner = $(cellTwo).children()[0];
						$(secondPrisoner).appendTo(cellThree);
						var thirdPrisoner = $(cellOne).children()[0];
						$(thirdPrisoner).appendTo(cellTwo);
						$(prisoner).removeClass('active');
						$(prisoner).addClass('prisoner');
						$(prisoner).appendTo(cellOne);
						capturedTime(prisoner);
						collectRansom(firstPrisoner);
					}
				}
			}	
		break;
		case "purple":
			var cellOne = $('#squareX2Y1')[0];
			var cellTwo = $('#squareX1Y1')[0];
			var cellThree = $('#squareX1Y2')[0];
			
			if ($(cellOne).children().length == 0) {
				$(prisoner).removeClass('active');
				$(prisoner).addClass('prisoner');
				$(prisoner).appendTo(cellOne);
				capturedTime(prisoner);
				countPieces();
			} else {
				if ($(cellTwo).children().length == 0) {
					var firstPrisoner = $(cellOne).children()[0];
					$(firstPrisoner).appendTo(cellTwo);
					$(prisoner).removeClass('active');
					$(prisoner).addClass('prisoner');
					$(prisoner).appendTo(cellOne);
					capturedTime(prisoner);
					countPieces();
				} else {
					if ($(cellThree).children().length == 0) {
						var firstPrisoner = $(cellTwo).children()[0];
						$(firstPrisoner).appendTo(cellThree);
						var secondPrisoner = $(cellOne).children()[0];
						$(secondPrisoner).appendTo(cellTwo);
						$(prisoner).removeClass('active');
						$(prisoner).addClass('prisoner');
						$(prisoner).appendTo(cellOne);
						capturedTime(prisoner);
						countPieces();
					} else {
						var firstPrisoner = $(cellThree).children()[0];
						cellThree.removeChild(firstPrisoner);
						var secondPrisoner = $(cellTwo).children()[0];
						$(secondPrisoner).appendTo(cellThree);
						var thirdPrisoner = $(cellOne).children()[0];
						$(thirdPrisoner).appendTo(cellTwo);
						$(prisoner).removeClass('active');
						$(prisoner).addClass('prisoner');
						$(prisoner).appendTo(cellOne);
						capturedTime(prisoner);
						collectRansom(firstPrisoner);						
					}
				}
			}	
		break;
	}

				
}