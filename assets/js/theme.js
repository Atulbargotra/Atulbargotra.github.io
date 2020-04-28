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
		var x = document.getElementsByClassName("icon-light");
		x[0].style.color = 'white';
		x[1].style.color = 'white';
		x[2].style.color = 'white';
	}
	
	else {
		document.getElementById('mode').className = 'light-mode';
		document.getElementById('card0').className = 'light-mode';
		document.getElementById('card1').className = 'light-mode';
		document.getElementById('card2').className = 'light-mode';
		var y = document.getElementsByClassName("icon-light");
		y[0].style.color = 'black';
		y[1].style.color = 'black';
		y[2].style.color = 'black';
	}
}
