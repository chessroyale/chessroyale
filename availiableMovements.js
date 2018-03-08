   function availiableMovements(savedSquare, savedPiece) {
            var x = savedSquare.dataset.x;
            var y = savedSquare.dataset.y;

            switch(savedPiece.dataset.piece) {
               case "pawn": 
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
               case "champion":
                  var availiableMove2 = "#squareX" + x + "Y" + (y - 1);
                  var availiableMove9 = "#squareX" + x + "Y" + (y - 2);
                  var availiableMove7 = "#squareX" + x + "Y" + (y * 1 + 1);
                  var availiableMove11 = "#squareX" + x + "Y" + (y * 1 + 2);
                  var availiableMove4 = "#squareX" + (x - 1) + "Y" + y;
                  var availiableMove12 = "#squareX" + (x - 2) + "Y" + y;
                  var availiableMove5 = "#squareX" + (x * 1 + 1) + "Y" + y;
                  var availiableMove10 = "#squareX" + (x * 1 + 2) + "Y" + y;
                  break;
               case "spy":
                  var availiableMove1 = "#squareX" + (x - 1) + "Y" + (y - 1);
                  var availiableMove3 = "#squareX" + (x * 1 + 1) + "Y" + (y - 1);
                  var availiableMove6 = "#squareX" + (x - 1) + "Y" + (y * 1 + 1);
                  var availiableMove8 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 1);
                  var availiableMove16 = "#squareX" + (x - 2) + "Y" + (y - 2);
                  var availiableMove13 = "#squareX" + (x * 1 + 2) + "Y" + (y - 2);
                  var availiableMove15 = "#squareX" + (x - 2) + "Y" + (y * 1 + 2);
                  var availiableMove14 = "#squareX" + (x * 1 + 2) + "Y" + (y * 1 + 2);
                  break;
               case "mage":
                  var availiableMove2 = "#squareX" + (x - 1) + "Y" + (y - 2);
                  var availiableMove7 = "#squareX" + (x * 1 + 1) + "Y" + (y - 2);
                  var availiableMove4 = "#squareX" + (x - 1) + "Y" + (y * 1 + 2);
                  var availiableMove5 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 2);
                  var availiableMove1 = "#squareX" + (x - 2) + "Y" + (y - 1);
                  var availiableMove3 = "#squareX" + (x * 1 + 2) + "Y" + (y - 1);
                  var availiableMove6 = "#squareX" + (x - 2) + "Y" + (y * 1 + 1);
                  var availiableMove8 = "#squareX" + (x * 1 + 2) + "Y" + (y * 1 + 1);
                  break;
               case "gral":
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
               case "king":
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

            if ($(savedSquare).hasClass('bench')){
               switch(savedPiece.dataset.side){
                  case "orange":
                     for(i=0; i < 6;i++){
                        for(j=0; j < 5; j++) {
                           var id = '#squareX' + (j + 1) + 'Y' + (i + 1);
                           $(id).addClass('availiableMove');
                        }
                     }
                  break;
                  case "purple":
                     for(i=7; i < 14;i++){
                        for(j=0; j < 5; j++) {
                           var id = '#squareX' + (j + 1) + 'Y' + (i + 1);
                           $(id).addClass('availiableMove');
                        }
                     }
                  break;
               }
            }

            for(i=0; i < 14;i++){
               for(j=0; j < 5; j++) {
                  var id = '#squareX' + (j + 1) + 'Y' + (i + 1);
                  if ($(id).hasClass('bench') || 
                     $(id).hasClass('prison')){
                     $(id).removeClass('availiableMove');
                  }
               }
            }

            switch(savedPiece.dataset.piece) {
               case "pawn": 
                  switch(savedPiece.dataset.type) {
                     case "melee":
                        var availiableAttack2 = "#squareX" + x + "Y" + (y - 1);
                        var availiableAttack7 = "#squareX" + x + "Y" + (y * 1 + 1);
                        var availiableAttack4 = "#squareX" + (x - 1) + "Y" + y;
                        var availiableAttack5 = "#squareX" + (x * 1 + 1) + "Y" + y;
                        var availiableAttack1 = "#squareX" + (x - 1) + "Y" + (y - 1);
                        var availiableAttack3 = "#squareX" + (x * 1 + 1) + "Y" + (y - 1);
                        var availiableAttack6 = "#squareX" + (x - 1) + "Y" + (y * 1 + 1);
                        var availiableAttack8 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 1);
                        break;
                     case "ranged":
                        var availiableAttack9 = "#squareX" + x + "Y" + (y - 2);
                        var availiableAttack11 = "#squareX" + x + "Y" + (y * 1 + 2);
                        var availiableAttack12 = "#squareX" + (x - 2) + "Y" + y;
                        var availiableAttack10 = "#squareX" + (x * 1 + 2) + "Y" + y;
                        break; 
                     case "magic":
                        var availiableAttack2 = "#squareX" + x + "Y" + (y - 1);
                        var availiableAttack9 = "#squareX" + x + "Y" + (y - 2);
                        var availiableAttack7 = "#squareX" + x + "Y" + (y * 1 + 1);
                        var availiableAttack11 = "#squareX" + x + "Y" + (y * 1 + 2);
                        var availiableAttack4 = "#squareX" + (x - 1) + "Y" + y;
                        var availiableAttack12 = "#squareX" + (x - 2) + "Y" + y;
                        var availiableAttack5 = "#squareX" + (x * 1 + 1) + "Y" + y;
                        var availiableAttack10 = "#squareX" + (x * 1 + 2) + "Y" + y;
                        var availiableAttack1 = "#squareX" + (x - 1) + "Y" + (y - 1);
                        var availiableAttack3 = "#squareX" + (x * 1 + 1) + "Y" + (y - 1);
                        var availiableAttack6 = "#squareX" + (x - 1) + "Y" + (y * 1 + 1);
                        var availiableAttack8 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 1);
                        break;
                     default:
                        console.log("error");     
                  }
                  break;
               case "champion":
                  switch(savedPiece.dataset.type) {
                     case "melee":
                     case "meleeBench":
                        var availiableAttack2 = "#squareX" + x + "Y" + (y - 1);
                        var availiableAttack7 = "#squareX" + x + "Y" + (y * 1 + 1);
                        var availiableAttack4 = "#squareX" + (x - 1) + "Y" + y;
                        var availiableAttack5 = "#squareX" + (x * 1 + 1) + "Y" + y;
                        break;
                     case "ranged":
                     case "rangedBench":
                        var availiableAttack9 = "#squareX" + x + "Y" + (y - 2);
                        var availiableAttack11 = "#squareX" + x + "Y" + (y * 1 + 2);
                        var availiableAttack12 = "#squareX" + (x - 2) + "Y" + y;
                        var availiableAttack10 = "#squareX" + (x * 1 + 2) + "Y" + y;
                        break;
                     case "magic":
                     case "magicBench":
                        var availiableAttack2 = "#squareX" + x + "Y" + (y - 1);
                        var availiableAttack9 = "#squareX" + x + "Y" + (y - 2);
                        var availiableAttack7 = "#squareX" + x + "Y" + (y * 1 + 1);
                        var availiableAttack11 = "#squareX" + x + "Y" + (y * 1 + 2);
                        var availiableAttack4 = "#squareX" + (x - 1) + "Y" + y;
                        var availiableAttack12 = "#squareX" + (x - 2) + "Y" + y;
                        var availiableAttack5 = "#squareX" + (x * 1 + 1) + "Y" + y;
                        var availiableAttack10 = "#squareX" + (x * 1 + 2) + "Y" + y;
                        break;
                     default:
                        console.log("error");
                  }
                  break;
               case "spy":
                  switch(savedPiece.dataset.type) {
                     case "melee":
                     case "meleeBench":
                        var availiableAttack1 = "#squareX" + (x - 1) + "Y" + (y - 1);
                        var availiableAttack3 = "#squareX" + (x * 1 + 1) + "Y" + (y - 1);
                        var availiableAttack6 = "#squareX" + (x - 1) + "Y" + (y * 1 + 1);
                        var availiableAttack8 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 1);
                        break;
                     case "ranged":
                     case "rangedBench":
                        var availiableAttack16 = "#squareX" + (x - 2) + "Y" + (y - 2);
                        var availiableAttack13 = "#squareX" + (x * 1 + 2) + "Y" + (y - 2);
                        var availiableAttack15 = "#squareX" + (x - 2) + "Y" + (y * 1 + 2);
                        var availiableAttack14 = "#squareX" + (x * 1 + 2) + "Y" + (y * 1 + 2);
                        break;
                     case "magic":
                     case "magicBench":
                        var availiableAttack1 = "#squareX" + (x - 1) + "Y" + (y - 1);
                        var availiableAttack3 = "#squareX" + (x * 1 + 1) + "Y" + (y - 1);
                        var availiableAttack6 = "#squareX" + (x - 1) + "Y" + (y * 1 + 1);
                        var availiableAttack8 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 1);
                        var availiableAttack16 = "#squareX" + (x - 2) + "Y" + (y - 2);
                        var availiableAttack13 = "#squareX" + (x * 1 + 2) + "Y" + (y - 2);
                        var availiableAttack15 = "#squareX" + (x - 2) + "Y" + (y * 1 + 2);
                        var availiableAttack14 = "#squareX" + (x * 1 + 2) + "Y" + (y * 1 + 2);
                        break;  
                     default:
                        console.log("error");
                  }     
                  break;           
               case "mage":
                  switch(savedPiece.dataset.type) {
                     case "melee":
                     case "meleeBench":
                        var availiableAttack2 = "#squareX" + x + "Y" + (y - 1);
                        var availiableAttack7 = "#squareX" + x + "Y" + (y * 1 + 1);
                        var availiableAttack4 = "#squareX" + (x - 1) + "Y" + y;
                        var availiableAttack5 = "#squareX" + (x * 1 + 1) + "Y" + y;
                        break;
                     case "ranged":
                     case "rangedBench":
                        var availiableAttack2 = "#squareX" + (x - 1) + "Y" + (y - 2);
                        var availiableAttack7 = "#squareX" + (x * 1 + 1) + "Y" + (y - 2);
                        var availiableAttack4 = "#squareX" + (x - 1) + "Y" + (y * 1 + 2);
                        var availiableAttack5 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 2);
                        var availiableAttack1 = "#squareX" + (x - 2) + "Y" + (y - 1);
                        var availiableAttack3 = "#squareX" + (x * 1 + 2) + "Y" + (y - 1);
                        var availiableAttack6 = "#squareX" + (x - 2) + "Y" + (y * 1 + 1);
                        var availiableAttack8 = "#squareX" + (x * 1 + 2) + "Y" + (y * 1 + 1);
                        break;
                     case "magic":
                     case "magicBench":
                        var availiableAttack1 = "#squareX" + (x - 1) + "Y" + (y - 2);
                        var availiableAttack2 = "#squareX" + (x * 1 + 1) + "Y" + (y - 2);
                        var availiableAttack3 = "#squareX" + (x - 1) + "Y" + (y * 1 + 2);
                        var availiableAttack4 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 2);
                        var availiableAttack5 = "#squareX" + x + "Y" + (y - 1);
                        var availiableAttack6 = "#squareX" + x + "Y" + (y * 1 + 1);
                        var availiableAttack7 = "#squareX" + (x - 1) + "Y" + y;
                        var availiableAttack8 = "#squareX" + (x * 1 + 1) + "Y" + y;
                        var availiableAttack9 = "#squareX" + (x - 2) + "Y" + (y - 1);
                        var availiableAttack10 = "#squareX" + (x * 1 + 2) + "Y" + (y - 1);
                        var availiableAttack11 = "#squareX" + (x - 2) + "Y" + (y * 1 + 1);
                        var availiableAttack12 = "#squareX" + (x * 1 + 2) + "Y" + (y * 1 + 1);
                        break;
                     default:
                        console.log("error");
                  }
                  break;
               case "gral":
                  switch(savedPiece.dataset.type) {
                     case "melee":
                        var availiableAttack2 = "#squareX" + x + "Y" + (y - 1);
                        var availiableAttack7 = "#squareX" + x + "Y" + (y * 1 + 1);
                        var availiableAttack4 = "#squareX" + (x - 1) + "Y" + y;
                        var availiableAttack5 = "#squareX" + (x * 1 + 1) + "Y" + y;
                        var availiableAttack1 = "#squareX" + (x - 1) + "Y" + (y - 1);
                        var availiableAttack3 = "#squareX" + (x * 1 + 1) + "Y" + (y - 1);
                        var availiableAttack6 = "#squareX" + (x - 1) + "Y" + (y * 1 + 1);
                        var availiableAttack8 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 1);
                        break;
                     case "ranged":
                        var availiableAttack9 = "#squareX" + x + "Y" + (y - 2);
                        var availiableAttack11 = "#squareX" + x + "Y" + (y * 1 + 2);
                        var availiableAttack12 = "#squareX" + (x - 2) + "Y" + y;
                        var availiableAttack10 = "#squareX" + (x * 1 + 2) + "Y" + y;
                        var availiableAttack16 = "#squareX" + (x - 2) + "Y" + (y - 2);
                        var availiableAttack13 = "#squareX" + (x * 1 + 2) + "Y" + (y - 2);
                        var availiableAttack15 = "#squareX" + (x - 2) + "Y" + (y * 1 + 2);
                        var availiableAttack14 = "#squareX" + (x * 1 + 2) + "Y" + (y * 1 + 2);
                        break;
                     case "magic":
                        var availiableAttack2 = "#squareX" + x + "Y" + (y - 1);
                        var availiableAttack9 = "#squareX" + x + "Y" + (y - 2);
                        var availiableAttack7 = "#squareX" + x + "Y" + (y * 1 + 1);
                        var availiableAttack11 = "#squareX" + x + "Y" + (y * 1 + 2);
                        var availiableAttack4 = "#squareX" + (x - 1) + "Y" + y;
                        var availiableAttack12 = "#squareX" + (x - 2) + "Y" + y;
                        var availiableAttack5 = "#squareX" + (x * 1 + 1) + "Y" + y;
                        var availiableAttack10 = "#squareX" + (x * 1 + 2) + "Y" + y;
                        var availiableAttack1 = "#squareX" + (x - 1) + "Y" + (y - 1);
                        var availiableAttack3 = "#squareX" + (x * 1 + 1) + "Y" + (y - 1);
                        var availiableAttack6 = "#squareX" + (x - 1) + "Y" + (y * 1 + 1);
                        var availiableAttack8 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 1);
                        var availiableAttack16 = "#squareX" + (x - 2) + "Y" + (y - 2);
                        var availiableAttack13 = "#squareX" + (x * 1 + 2) + "Y" + (y - 2);
                        var availiableAttack15 = "#squareX" + (x - 2) + "Y" + (y * 1 + 2);
                        var availiableAttack14 = "#squareX" + (x * 1 + 2) + "Y" + (y * 1 + 2);
                        break;  
                     default:
                        console.log("error");
                  }
                  break;               
               case "king":
                  switch(savedPiece.dataset.type) {
                     case "melee":
                        var availiableAttack2 = "#squareX" + x + "Y" + (y - 1);
                        var availiableAttack7 = "#squareX" + x + "Y" + (y * 1 + 1);
                        var availiableAttack4 = "#squareX" + (x - 1) + "Y" + y;
                        var availiableAttack5 = "#squareX" + (x * 1 + 1) + "Y" + y;
                        var availiableAttack1 = "#squareX" + (x - 1) + "Y" + (y - 1);
                        var availiableAttack3 = "#squareX" + (x * 1 + 1) + "Y" + (y - 1);
                        var availiableAttack6 = "#squareX" + (x - 1) + "Y" + (y * 1 + 1);
                        var availiableAttack8 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 1);
                        break;
                     case "ranged":
                        var availiableAttack2 = "#squareX" + (x - 1) + "Y" + (y - 1);
                        var availiableAttack7 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 2);
                        var availiableAttack4 = "#squareX" + (x - 2) + "Y" + (y * 1 + 1);
                        var availiableAttack5 = "#squareX" + (x * 1 + 2) + "Y" + (y - 1);
                        var availiableAttack1 = "#squareX" + (x - 2) + "Y" + (y - 1);
                        var availiableAttack3 = "#squareX" + (x * 1 + 1) + "Y" + (y - 2);
                        var availiableAttack6 = "#squareX" + (x - 1) + "Y" + (y * 1 + 2);
                        var availiableAttack8 = "#squareX" + (x * 1 + 2) + "Y" + (y * 1 + 1);
                        var availiableAttack9 = "#squareX" + x + "Y" + (y - 2);
                        var availiableAttack11 = "#squareX" + x + "Y" + (y * 1 + 2);
                        var availiableAttack12 = "#squareX" + (x - 2) + "Y" + y;
                        var availiableAttack10 = "#squareX" + (x * 1 + 2) + "Y" + y;
                        var availiableAttack16 = "#squareX" + (x - 2) + "Y" + (y - 2);
                        var availiableAttack13 = "#squareX" + (x * 1 + 2) + "Y" + (y - 2);
                        var availiableAttack15 = "#squareX" + (x - 2) + "Y" + (y * 1 + 2);
                        var availiableAttack14 = "#squareX" + (x * 1 + 2) + "Y" + (y * 1 + 2);
                        break;
                     case "magic":
                        var availiableAttack2 = "#squareX" + x + "Y" + (y - 1);
                        var availiableAttack7 = "#squareX" + x + "Y" + (y * 1 + 1);
                        var availiableAttack4 = "#squareX" + (x - 1) + "Y" + y;
                        var availiableAttack5 = "#squareX" + (x * 1 + 1) + "Y" + y;
                        var availiableAttack1 = "#squareX" + (x - 1) + "Y" + (y - 1);
                        var availiableAttack3 = "#squareX" + (x * 1 + 1) + "Y" + (y - 1);
                        var availiableAttack6 = "#squareX" + (x - 1) + "Y" + (y * 1 + 1);
                        var availiableAttack8 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 1);
                        break;
                     default:
                        console.log("error");
                  }
                  break;
               default:
                  console.log('error');
            }

            $(availiableAttack1).addClass('availiableAttack');
            $(availiableAttack2).addClass('availiableAttack');
            $(availiableAttack3).addClass('availiableAttack');
            $(availiableAttack4).addClass('availiableAttack');
            $(availiableAttack5).addClass('availiableAttack');
            $(availiableAttack6).addClass('availiableAttack');
            $(availiableAttack7).addClass('availiableAttack');
            $(availiableAttack8).addClass('availiableAttack');
            $(availiableAttack9).addClass('availiableAttack');
            $(availiableAttack10).addClass('availiableAttack');
            $(availiableAttack11).addClass('availiableAttack');
            $(availiableAttack12).addClass('availiableAttack');
            $(availiableAttack13).addClass('availiableAttack');
            $(availiableAttack14).addClass('availiableAttack');
            $(availiableAttack15).addClass('availiableAttack');
            $(availiableAttack16).addClass('availiableAttack');

            for(i=0; i < 14;i++){
               for(j=0; j < 5; j++) {
                  var id = '#squareX' + (j + 1) + 'Y' + (i + 1);
                  switch($(savedPiece)[0].dataset.side){
                     case "orange":
                        if ($(id).children()[0] == undefined  || 
                        $(id).children()[0].dataset.piece == "pawn" &&
                        $(id).children()[0].dataset.side == "orange" ||
                        $(id).children()[0].dataset.piece == "mage" &&
                        $(id).children()[0].dataset.side == "orange" ||
                        $(id).children()[0].dataset.piece == "champion" &&
                        $(id).children()[0].dataset.side == "orange" ||
                        $(id).children()[0].dataset.piece == "spy" &&
                        $(id).children()[0].dataset.side == "orange" ||
                        $(id).children()[0].dataset.piece == "gral" &&
                        $(id).children()[0].dataset.side == "orange" ||
                        $(id).children()[0].dataset.piece == "king" &&
                        $(id).children()[0].dataset.side == "orange"||
                        $(id).hasClass('bench') || 
                        $(id).hasClass('prison')){
                           $(id).removeClass('availiableAttack');
                        }
                     break;
                     case "purple":
                        if ($(id).children()[0] == undefined  || 
                        $(id).children()[0].dataset.piece == "pawn" &&
                        $(id).children()[0].dataset.side == "purple" ||
                        $(id).children()[0].dataset.piece == "mage" &&
                        $(id).children()[0].dataset.side == "purple"||
                        $(id).children()[0].dataset.piece == "champion" &&
                        $(id).children()[0].dataset.side == "purple" ||
                        $(id).children()[0].dataset.piece == "spy" &&
                        $(id).children()[0].dataset.side == "purple" ||
                        $(id).children()[0].dataset.piece == "gral" &&
                        $(id).children()[0].dataset.side == "purple" ||
                        $(id).children()[0].dataset.piece == "king" &&
                        $(id).children()[0].dataset.side == "purple" ||
                        $(id).hasClass('bench') || 
                        $(id).hasClass('prison')){
                           $(id).removeClass('availiableAttack');
                        }
                     break;
                  }
                  
               }
            }

            for(i=0; i < 14;i++){
               for(j=0; j < 5; j++) {
                  var id = '#squareX' + (j + 1) + 'Y' + (i + 1);
                  if ($(id).children()[0] != undefined){
                     $(id).removeClass('availiableMove');
                  }
               }
            }
         };
