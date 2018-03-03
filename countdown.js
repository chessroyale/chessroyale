function countdown(){
	$('<div/>', {
		'id': 'ready'
	}).appendTo('#container');
	
	$('<span/>', {
		'id': 'readySpan',
		'class': 'ready'
	}).appendTo('#ready');

	function countDown(endtime) {
		var t = Date.parse(endtime) - Date.parse(new Date());
		var seconds = Math.floor((t / 1000) % 60);
		return {
		  'total': t,
		  'seconds': seconds
		};
	}

	function launchClock(id, endtime) {
		var clock = document.getElementById(id);
		var secondsSpan = $('.seconds');
	
		function renewClock() {
			var t = countDown(endtime);

		  	$('.seconds').html((' : 0' + t.seconds).slice(-2));
	  		if (t.total == 0) {
		    	clearInterval(timeinterval);
		    	$('#ready').fadeOut('slow', function() {
		    		$('.seconds').css('color', '#fafafa');
		    		displayPieces();
					playGame();

					function getTimeRemaining(endtime) {
						var t = Date.parse(endtime) - Date.parse(new Date());
						var seconds = Math.floor((t / 1000) % 60);
						var minutes = Math.floor((t / 1000 / 60) % 60);
						return {
						  'total': t,
						  'minutes': minutes,
						  'seconds': seconds
						};
					}

					function initializeClock(id, endtime) {
						var clock = document.getElementById(id);
						var minutesSpan = $('.minutes');
						var secondsSpan = $('.seconds');
					
						function updateClock() {
							var t = getTimeRemaining(endtime);

						  	$('.minutes').html(('0' + t.minutes + ' ').slice(-2));
						  	$('.seconds').html((' : 0' + t.seconds).slice(-2));
					  		if (t.total < 0) {
						    	clearInterval(timeinterval);
						    	alert("Time's up!");
						  	}
						}

						updateClock();
						var timeinterval = setInterval(updateClock, 1000);
					}

					var deadline = new Date(Date.parse(new Date()) + 5 * 60 * 1000);
					initializeClock('time', deadline);

		    	})
		  	}
		}

		renewClock();
		var timeinterval = setInterval(renewClock, 1000);
	}

	var deadline = new Date(Date.parse(new Date()) + 3 * 1000);
	launchClock('ready', deadline);


	
}