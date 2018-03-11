function endGame(){
	$('#time').fadeOut("slow");
	$('#board').fadeOut("slow", function(){
		$('.coin').fadeOut("fast");
		$('.scoreCard').css({'height' : '450px', 
							'width' : '800px', 
							'margin-top' : '200px', 
							'font-size' : '250px',
							'margin-left' : '50px',
    						'line-height' : '450px',
    						'display' : 'block',
    						'position' : 'relative'});
	})
}