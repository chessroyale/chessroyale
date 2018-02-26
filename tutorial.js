function tutorial(){
	$('#howto').css('height', '550px');
	$('#howto').css('width', '600px');
	$('#howto').html('Este es un juego de estrategia en tiempo real<br>Podés mover las piezas haciendo click sobre ellas y eligiendo una casilla permitida.<br> Para atacar a las piezas rivales, hacé click sobre ellas cuando su casilla sea roja. <br><br>Click para continuar');
	$('#howto').on('click',function(){
		$('#howto').css('height', '650px');
		$('#howto').html('El alcance y el daño de los ataques de las piezas depende de su tipo de ataque.<br>Cada ataque le resta energía a la pieza atacada.<br>Cuando una pieza se queda sin energía, es capturada por el enemigo y una pieza suplente entra a reemplazarla.<br><br>Click para continuar');
		$('#howto').on('click',function(){
			$('#howto').css('height', '700px');
			$('#howto').html('Si más de tres piezas son capturadas, la pieza más antigua en ser capturada vuelve a la zona de suplentes del jugador afectado.<br> Cada vez que una pieza vuelve al jugador, el rival gana el oro correspondiente al rescate de la pieza.<br> Las piezas pueden rescatarse antes, pagando su rescate, haciéndoles click en la zona de cautiverio.<br><br>Click para continuar')
			$('#howto').on('click',function(){
				$('#howto').css('height', '450px');
				$('#howto').html('Gana el jugador que más oro tenga al finalizar la partida, o el que consiga mantener al rey rival cautivo más de un minuto.<br><br>Hace click en cualquier lugar de este panel para jugar');
				$('#howto').on('click',function(){
					$('#logo').fadeOut('slow');
					$('#howto').fadeOut('slow', function(){
						choosePieces();
					});
				})
			})	
		})
		
	})

}

 
