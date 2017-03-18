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
function countBodyChildren(){
	var body_element = document.getElementsByTagName("body")[0];
	alert(body_element.childNodes.length);

}
window.onload = countBodyChildren;
