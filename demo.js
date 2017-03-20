//var lovers = document.getElementsByTagName("p");
/*for (var i = 0; i < lovers.length; i++) {
	alert(lovers[i].getAttribute("title"));
}
*/
/*for (var i = 0; i < lovers.length; i++) {
	var title_txt = lovers[i].getAttribute("title");
    //if (title_txt != null)
	//{
		//alert(title_txt);
	//}
	if (title_txt)
	{
		alert(title_txt);
	}
  }
*/
//var name = document.getElementById("n");
//alert(name);
/*for (var i = 0; i < lovers.length; i++) {
	var title_txt = lovers[i].getAttribute("title");
	if (title_txt)
	{
		lovers[i].setAttribute("title","稀饭儿");
		alert(lovers[i].getAttribute("title"));
	}
}*/
/*function showPic(whichPic){
var source = whichPic.getAttribute("href");
var placeholder = document.getElementById("placeholder");
placeholder.setAttribute("src",source);
}*/
/*function countBodyChildren(){
	var body_element = document.getElementsByTagName("body")[0];
	alert(body_element.childNodes.length);

}
window.onload = countBodyChildren;
*/
function showPic(whichPic){
	var source = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	var txt = whichPic.getAttribute("title");
	var description = document.getElementById("description");
	//alert (description.firstChild.nodeValue);
	description.firstChild.nodeValue = txt;
}
function prepareGallery(){
	//if (!getElementsByTagName) return false;
	//if (!getElementsById) return false;
	//if (!document.getElementsByTagName || !document.getElementById) return false;
	//if (!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function(){
			showPic(this);
			return false;
		}

	}
}
//window.onload = prepareGallery;
function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}

	}
}
addLoadEvent(prepareGallery);