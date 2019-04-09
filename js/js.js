function bANDw() {
		document.body.className += (new Date().getHours() >= 8 && new Date().getHours() < 20) ? '' : ' dark';
}

