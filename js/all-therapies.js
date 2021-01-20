window.onload = function () {

    document.getElementById("terapiasLista").style.display = "none";

}

function toggleTherapies() {

    var display = document.getElementById("terapiasLista").style.display;

    if (window.matchMedia("(min-width: 1200px)").matches) {
        document.getElementById("linhaTerapias").style.maxWidth = "8%";
        document.getElementById("terapiasLista").style.width = "250%";
    } else {
        document.getElementById("linhaTerapias").style.maxWidth = "100%";
    }

    if (display == "block") {
        document.getElementById("terapiasLista").style.display = "none";
    } else {
        document.getElementById("terapiasLista").style.display = "block";
    }

}

function toggleMenu() {
    if (window.matchMedia("(max-width: 1200px)").matches) {
        document.getElementById("menu").style.paddingTop = "20px";
        document.getElementById("menu").style.marginTop = "-150px";
        document.getElementById("menu").style.float = "right";

        var displayMenu = document.getElementById("menu").style.display;

        if (displayMenu == "none") {
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

function toggleAnswer1() {
    var answer1Display = document.getElementById("resposta1").style.display;

    if (answer1Display == "none") {
        document.getElementById("resposta1").style.display = "block";
    } else {
        document.getElementById("resposta1").style.display = "none";
    }
}

function toggleAnswer2() {
    var answer2Display = document.getElementById("resposta2").style.display;

    if (answer2Display == "none") {
        document.getElementById("resposta2").style.display = "block";
    } else {
        document.getElementById("resposta2").style.display = "none";
    }
}

function toggleAnswer3() {
    var answer3Display = document.getElementById("resposta3").style.display;

    if (answer3Display == "none") {
        document.getElementById("resposta3").style.display = "block";
    } else {
        document.getElementById("resposta3").style.display = "none";
    }
}