window.onload = function() {
		
	document.getElementById("terapiasLista").style.display = "none";

}

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
			document.getElementById("rodape").style.display = "none";
		} else {
			document.getElementById("menu").style.display = "none";
			document.getElementById("labelMenu").style.marginTop = "-120px";
			document.getElementById("whatsapp").style.display = "block";
			document.getElementById("rodape").style.display = "block";
		}
	}
}

function mostrarEsconderResposta1() {
	var resposta1Display = document.getElementById("resposta1").style.display;

	if (resposta1Display == "none") {
		document.getElementById("resposta1").style.display = "block";
	} else {
		document.getElementById("resposta1").style.display = "none";
    }
}

function mostrarEsconderResposta2() {
	var resposta2Display = document.getElementById("resposta2").style.display;

	if (resposta2Display == "none") {
		document.getElementById("resposta2").style.display = "block";
	} else {
		document.getElementById("resposta2").style.display = "none";
	}
}

function mostrarEsconderResposta3() {
	var resposta3Display = document.getElementById("resposta3").style.display;

	if (resposta3Display == "none") {
		document.getElementById("resposta3").style.display = "block";
	} else {
		document.getElementById("resposta3").style.display = "none";
	}
}

function mostrarEsconderResposta4() {
	var resposta4Display = document.getElementById("resposta4").style.display;

	if (resposta4Display == "none") {
		document.getElementById("resposta4").style.display = "block";
	} else {
		document.getElementById("resposta4").style.display = "none";
	}
}