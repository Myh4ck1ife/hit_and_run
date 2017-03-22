function replaceClass(){
	var insertClassfirst = document.getElementsByClassName('content');
	for (var i = 0; i < insertClassfirst.length; i++) {
	insertClassfirst[i].setAttribute("class","content active");
	}
	var insertClasssecond = document.getElementsByClassName('content-first');
	for (var i = 0; i < insertClasssecond.length; i++) {
	insertClasssecond[i].setAttribute("class","content-first active");
	}
		var insertClassthird = document.getElementsByClassName('content-second');
	for (var i = 0; i < insertClassthird.length; i++) {
	insertClassthird[i].setAttribute("class","content-second active");
	}
}


