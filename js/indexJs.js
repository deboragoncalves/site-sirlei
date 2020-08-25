 function mostrarEsconderTerapias() {

	 var exibir = document.getElementById("terapiasLista").style.display;

	 if (window.matchMedia("(min-width: 1200px)").matches) {
		 document.getElementById("linhaTerapias").style.maxWidth = "8%";
		 document.getElementById("terapiasLista").style.width = "250%";
	 } else {
		 document.getElementById("linhaTerapias").style.maxWidth = "100%";
     }

	if (exibir == "block") {
		document.getElementById("terapiasLista").style.display = "none";
	} else {
		document.getElementById("terapiasLista").style.display = "block";
	}

} 

function mostrarEsconderMenu() {
	if (window.matchMedia("(max-width: 1200px)").matches) {
		document.getElementById("menu").style.paddingTop = "20px";
		document.getElementById("menu").style.marginTop = "-150px";
		document.getElementById("menu").style.float = "right";

		var mostrarMenu = document.getElementById("menu").style.display;

		if (mostrarMenu == "none") {
			document.getElementById("menu").style.display = "block";
			document.getElementById("labelMenu").style.marginTop = "-150px";
			document.getElementById("whatsapp").style.display = "none";
		} else {
			document.getElementById("menu").style.display = "none";
			document.getElementById("labelMenu").style.marginTop = "-120px";
			document.getElementById("whatsapp").style.display = "block";
		}
	}
}