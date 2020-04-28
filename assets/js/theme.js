$('.datepicker').each(function(){
	var picker = new Pikaday({
		field: this
	});
});


function mode() {
	if (document.getElementById('mode').className === 'light-mode'){
		document.getElementById('mode').className = 'dark-mode';
		document.getElementById('card0').className = 'dark-mode';
		document.getElementById('card1').className = 'dark-mode';
		document.getElementById('card2').className = 'dark-mode';
		document.getElementById('card2').className = 'dark-mode';

	}
	else {
		document.getElementById('mode').className = 'light-mode';
		document.getElementById('card0').className = 'light-mode';
		document.getElementById('card1').className = 'light-mode';
		document.getElementById('card2').className = 'light-mode';
	}
}
