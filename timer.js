$(document).ready(function () {
	var myWatch;
	var interfacade = $('.interface');
	var stop = $('.stop-circle');
	var button = $('.left-circle');
	var hund = 0;
	var sec = 0;
	var min = 0;
	var hundredths = $('#hundredths');
	var seconds = $('#seconds');
	var minutes = $('#minutes');
	function counting() {

		if (hund > 99) {
			hund = 0;
			sec++;	
		} else if (sec > 59) {
			sec = 0;
			min++;
		} else {
			hund++;
		}


		if (hund < 10) {
			hundredths.text('0' + hund);
		}
		else {
			hundredths.text(hund);
		}
		if (sec < 10) {
			seconds.text('0' + sec);
		} else {
			seconds.text(sec);
		}
		if (min < 10) {
			minutes.text('0' + min);
		} else {
			minutes.text(min);
		}

	}







	

	button.click(function() {
		myWatch = setInterval(counting, 10);
		interfacade.addClass('running');
	});
	stop.click(function() {
		clearInterval(myWatch);
		interfacade.removeClass('running');
	});
});