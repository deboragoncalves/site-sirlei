 function mostrarEsconderTerapias() {

	 var exibir = document.getElementById("terapias").style.display;

	 if (window.matchMedia("(min-width: 1200px)").matches) {
		 document.getElementById("linhaTerapias").style.maxWidth = "8%";
		 document.getElementById("terapias").style.width = "150%";
	 } else {
		 document.getElementById("linhaTerapias").style.maxWidth = "100%";
     }

	if (exibir == "block") {
		document.getElementById("terapias").style.display = "none";
	} else {
		document.getElementById("terapias").style.display = "block";
	}

} 

function styleMenuELabel() {
	if (window.matchMedia("(max-width: 1200px)").matches) {
		document.getElementById("menu").style.paddingTop = "20px";
		document.getElementById("menu").style.marginTop = "-150px";
		document.getElementById("menu").style.display = "block";
		document.getElementById("menu").style.float = "right";

		document.getElementById("labelMenu").style.marginTop = "-151px";
		document.getElementById("labelMenu").style.paddingTop = "20px";
		document.getElementById("labelMenu").style.paddingRight = "15px";
		document.getElementById("labelMenu").style.paddingLeft = "15px";
		document.getElementById("labelMenu").style.backgroundColor = "white";
		document.getElementById("labelMenu").style.color = "#C14242";
		document.getElementById("labelMenu").style.position = "fixed";
		document.getElementById("labelMenu").style.right = "0px";
		document.getElementById("labelMenu").style.fontSize = "30px";
	}
}