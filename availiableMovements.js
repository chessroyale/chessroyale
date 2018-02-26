   function availiableMovements(savedSquare, savedPiece) {
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

            switch(savedPiece.dataset.piece) {
               case "ppawn": 
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
               case "ptower":
                  switch(savedPiece.dataset.type) {
                     case "melee":
                        var availiableAttack2 = "#squareX" + x + "Y" + (y - 1);
                        var availiableAttack7 = "#squareX" + x + "Y" + (y * 1 + 1);
                        var availiableAttack4 = "#squareX" + (x - 1) + "Y" + y;
                        var availiableAttack5 = "#squareX" + (x * 1 + 1) + "Y" + y;
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
                        break;
                     default:
                        console.log("error");
                  }
                  break;
               case "pbishop":
                  switch(savedPiece.dataset.type) {
                     case "melee":
                        var availiableAttack1 = "#squareX" + (x - 1) + "Y" + (y - 1);
                        var availiableAttack3 = "#squareX" + (x * 1 + 1) + "Y" + (y - 1);
                        var availiableAttack6 = "#squareX" + (x - 1) + "Y" + (y * 1 + 1);
                        var availiableAttack8 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 1);
                        break;
                     case "ranged":
                        var availiableAttack16 = "#squareX" + (x - 2) + "Y" + (y - 2);
                        var availiableAttack13 = "#squareX" + (x * 1 + 2) + "Y" + (y - 2);
                        var availiableAttack15 = "#squareX" + (x - 2) + "Y" + (y * 1 + 2);
                        var availiableAttack14 = "#squareX" + (x * 1 + 2) + "Y" + (y * 1 + 2);
                        break;
                     case "magic":
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
               case "phorse":
                  switch(savedPiece.dataset.type) {
                     case "melee":
                        var availiableAttack2 = "#squareX" + x + "Y" + (y - 1);
                        var availiableAttack7 = "#squareX" + x + "Y" + (y * 1 + 1);
                        var availiableAttack4 = "#squareX" + (x - 1) + "Y" + y;
                        var availiableAttack5 = "#squareX" + (x * 1 + 1) + "Y" + y;
                        break;
                     case "ranged":
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
                        var availiableAttack1 = "#squareX" + (x - 1) + "Y" + (y - 2);
                        var availiableAttack2 = "#squareX" + (x * 1 + 1) + "Y" + (y - 2);
                        var availiableAttack3 = "#squareX" + (x - 1) + "Y" + (y * 1 + 2);
                        var availiableAttack4 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 2);
                        var availiableAttack5 = "#squareX" + (x - 1) + "Y" + (y - 2);
                        var availiableAttack6 = "#squareX" + (x * 1 + 1) + "Y" + (y - 2);
                        var availiableAttack7 = "#squareX" + (x - 1) + "Y" + (y * 1 + 2);
                        var availiableAttack8 = "#squareX" + (x * 1 + 1) + "Y" + (y * 1 + 2);
                        var availiableAttack9 = "#squareX" + (x - 2) + "Y" + (y - 1);
                        var availiableAttack10 = "#squareX" + (x * 1 + 2) + "Y" + (y - 1);
                        var availiableAttack11 = "#squareX" + (x - 2) + "Y" + (y * 1 + 1);
                        var availiableAttack12 = "#squareX" + (x * 1 + 2) + "Y" + (y * 1 + 1);
                        break;
                     default:
                        console.log("error");
                  }
                  break;
               case "pqueen":
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
               case "pking":
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
                  if ($(id).children()[0] == undefined  || 
                     $(id).children()[0].dataset.piece == "ppawn" ||
                     $(id).children()[0].dataset.piece == "phorse" ||
                     $(id).children()[0].dataset.piece == "ptower" ||
                     $(id).children()[0].dataset.piece == "pbishop" ||
                     $(id).children()[0].dataset.piece == "pqueen" ||
                     $(id).children()[0].dataset.piece == "pking"){
                     $(id).removeClass('availiableAttack');
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
