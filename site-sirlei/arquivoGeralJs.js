function mostrarEsconderTerapias() {

	var exibir = document.getElementById("terapias").style.display;

	if (exibir == "block") {
		document.getElementById("terapias").style.display = "none";
	} else {
		document.getElementById("terapias").style.display = "block";
	}

}

/*
 * Div por class - Barras OK
 * Perguntas JS
 * Imagens online - OK, menos Logo
 * Tirar os style no html - OK
*/