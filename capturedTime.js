function capturedTime(prisoner) {
	if ($(prisoner).hasClass('prisoner')) {
		setInterval(function(){
			var currentTime = $(prisoner)[0].dataset.captured;
			var newTime = (currentTime * 1) + 1;
			$(prisoner)[0].dataset.captured = newTime;
		},1000) ;
	};	
};