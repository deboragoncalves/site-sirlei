function mostrarEsconderTerapias() {

	var exibir = document.getElementById("terapias").style.display;

	if (exibir == "block") {
		document.getElementById("terapias").style.display = "none";
	} else {
		document.getElementById("terapias").style.display = "block";
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