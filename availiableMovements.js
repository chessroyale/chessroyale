   function availiableMovements(savedSquare, savedPiece, enemyPiece) {
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

            $(availiableMove1).addClass('availiableMove');
            $(availiableMove2).addClass('availiableMove');
            $(availiableMove3).addClass('availiableMove');
            $(availiableMove4).addClass('availiableMove');
            $(availiableMove5).addClass('availiableMove');
            $(availiableMove6).addClass('availiableMove');
            $(availiableMove7).addClass('availiableMove');
            $(availiableMove8).addClass('availiableMove');
            $(availiableMove9).addClass('availiableMove');
            $(availiableMove10).addClass('availiableMove');
            $(availiableMove11).addClass('availiableMove');
            $(availiableMove12).addClass('availiableMove');
            $(availiableMove13).addClass('availiableMove');
            $(availiableMove14).addClass('availiableMove');
            $(availiableMove15).addClass('availiableMove');
            $(availiableMove16).addClass('availiableMove');

            for(i=0; i < 14;i++){
            for(j=0; j < 5; j++) {
               var id = '#squareX' + (j + 1) + 'Y' + (i + 1);
               if ($(id).children()[0] != undefined){
                  $(id).removeClass('availiableMove');
                  }
               }
            }
         };
