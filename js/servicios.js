var etc = document.getElementById("etc");
var moreText = document.getElementById("more");
var btnText = document.getElementById("myBtn");
var img = document.getElementById("imagenServicios");

function myFunction() {
	if (etc.style.display === "none") {
	  etc.style.display = "inline";
	  btnText.innerHTML = "Ver más"; 
	  moreText.style.display = "none";
	  img.style.width = "10px;"
	  
	} else {
	  etc.style.display = "none";
	  btnText.innerHTML = "Ver menos"; 
	  moreText.style.display = "inline";
	} //else
  }// myFunction


  
