function toggleTherapies() {

    var display = document.getElementsByClassName("terapiasLista").style.display;

    if (window.matchMedia("(min-width: 1200px)").matches) {
        document.getElementsByClassName("linhaTerapias").style.maxWidth = "8%";
        document.getElementsByClassName("terapiasLista").style.width = "250%";
    } else {
        document.getElementsByClassName("linhaTerapias").style.maxWidth = "100%";
    }

    if (display == "block") {
        document.getElementsByClassName("terapiasLista").style.display = "none";
    } else {
        document.getElementsByClassName("terapiasLista").style.display = "block";
    }

}

function toggleMenu() {
    if (window.matchMedia("(max-width: 1200px)").matches) {
        document.getElementsByClassName("menu").style.paddingTop = "20px";
        document.getElementsByClassName("menu").style.marginTop = "-150px";
        document.getElementsByClassName("menu").style.float = "right";

        var displayMenu = document.getElementById("menu").style.display;

        if (displayMenu == "none") {
            document.getElementsByClassName("menu").style.display = "block";
            document.getElementsByClassName("labelMenu").style.marginTop = "-150px";
            document.getElementsByClassName("whatsapp").style.display = "none";
            document.getElementsByClassName("rodape").style.display = "none";
        } else {
            document.getElementsByClassName("menu").style.display = "none";
            document.getElementsByClassName("labelMenu").style.marginTop = "-120px";
            document.getElementsByClassName("whatsapp").style.display = "block";
            document.getElementsByClassName("rodape").style.display = "block";
        }
    }
}