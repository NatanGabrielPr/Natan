function home() {
    if ((voltar.checked)) {
        window.location.href = "blog_home.html"
    }
}

function validar() {
    if (window.confirm("Você prefre backend?") == true) {
        window.location.href = "blog_node_page.html"
    } else {
        window.location.href = "blog_react_page.html"
    }
}

function mudanca(){
    let MudImg=mud.value
    if(MudImg == 'b'){
        document.getElementById('imgC').src="images/figma.png"
    }   else if (MudImg == 'c') {
        document.getElementById('imgC').src="images/illustrator.jpg"
} else {
    document.getElementById('imgC').src="images/escolha.png.jpg"
}
}