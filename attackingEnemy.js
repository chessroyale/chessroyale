	function attackingEnemy(enemyPiece, savedPiece){

      var burnedPiece = $(enemyPiece).children()[0];
   	if (savedPiece.dataset.type == 'magic' || 
         savedPiece.dataset.type == 'magicBench') {
         var attackZone = '.availiableAttack';
         if ($(attackZone).length > 0) {
            console.log('Atacando!');

            $(burnedPiece).addClass('burned');
            $('<div/>', {
               'id': 'firewall',
               'class': 'firewall'
            }).appendTo(burnedPiece);
            $('#firewall').fadeOut("slow", function(){
               $(burnedPiece).removeClass('burned');
               $('.piece .firewall').remove();
            });

            for (i = 0; i < $('.availiableAttack').length; i++) {
               var enemy = $('.availiableAttack')[i].children[0];

               var life = enemy.dataset.life;
               console.log(life);
               var attack = savedPiece.dataset.attack;
               console.log(attack);
               var damage = enemy.dataset.damage;
               console.log(damage);

               var newLife = life - attack;
               var newBarValue = (newLife * 100)/damage;
               
               $(enemy).attr('data-life', newLife);

               $(enemy.children[1]).css('width', newBarValue);

               var midLife = 60;
               var lowLife = 30;
               if (newBarValue < lowLife) {
                  $(enemy.children[1]).css('background-color', 'red');
               } else if (newBarValue < midLife) {
                  $(enemy.children[1]).css('background-color', 'yellow');
               }


               if (enemy.dataset.life <= 0) {
                  $(enemyPiece[0]).empty();
               }
            }
               
         }
      } else {
         if (enemyPiece.hasClass('availiableAttack')) {
               console.log('Atacando!');

               $(burnedPiece).addClass('burned');
               $('<div/>', {
                  'id': 'firewall',
                  'class': 'firewall'
               }).appendTo(burnedPiece);
               $('#firewall').fadeOut("slow", function(){
                  $(burnedPiece).removeClass('burned');
                  $('.piece .firewall').remove();
               });

               var enemy = enemyPiece[0].children[0];

               var life = enemy.dataset.life;
               console.log(life);
               var attack = savedPiece.dataset.attack;
               console.log(attack);
               var damage = enemy.dataset.damage;
               console.log(damage);

               var newLife = life - attack;
               var newBarValue = (newLife * 100)/damage;
               
               $(enemy).attr('data-life', newLife);

               $(enemy.children[1]).css('width', newBarValue);

               var midLife = 60;
               var lowLife = 30;
               if (newBarValue < lowLife) {
                  $(enemy.children[1]).css('background-color', 'red');
               } else if (newBarValue < midLife) {
                  $(enemy.children[1]).css('background-color', 'yellow');
               }


               if (enemy.dataset.life <= 0) {
                  capturingPiece(enemyPiece);
                  $(enemyPiece[0]).empty();
               }
            }
      }

      cooldown(savedPiece, 1500);		
            
   };
