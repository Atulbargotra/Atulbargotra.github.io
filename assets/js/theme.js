$('.datepicker').each(function () {
	var picker = new Pikaday({
		field: this
	});
});
// window.web_mode = 'light-mode'
// function light_mode() {
// 	document.getElementById('mode').className = 'light-mode';
// 	try {
// 		var y = document.getElementsByClassName("icon-light");
// 		y[0].style.color = 'rgb(21,21,21)';
// 		y[1].style.color = 'rgb(21,21,21)';
// 		y[2].style.color = 'rgb(21,21,21)';
// 	}
// 	catch (err) {

// 	}
// 	finally {
// 		web_mode = 'light-mode';
// 		var y = document.getElementsByClassName("card-body");
// 		for (var i = 0; i < y.length; i++) {
// 			y[i].style.backgroundColor = "white";
// 		}
// 	}
// }
// function dark_mode() {
// 	document.getElementById('mode').className = 'dark-mode';
// 	try {
// 		var x = document.getElementsByClassName("icon-light");
// 		x[0].style.color = 'white';
// 		x[1].style.color = 'white';
// 		x[2].style.color = 'white';
// 	}
// 	catch (err) {
// 	}
// 	finally {
// 		web_mode = 'dark-mode';
// 		var y = document.getElementsByClassName("card-body");
// 		console.log(y.length)
// 		for (var i = 0; i < y.length; i++) {
// 			y[i].style.backgroundColor = "rgb(21,21,21)";
// 		}
// 	}
// }
// function mode() {
// 	if (web_mode === 'light-mode') {
// 		dark_mode();
// 	}

// 	else {
// 		light_mode();
// 	}
// }
// function mode2() {
// 	console.log(web_mode);
// 	if (web_mode === 'light-mode') {
// 		light_mode()
// 	}
// 	else {
// 		dark_mode()
// 	}
// }