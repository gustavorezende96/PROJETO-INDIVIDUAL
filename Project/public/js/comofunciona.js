

var etapa = 0
function proximaPagina(){

    if(etapa == 0){
        for(var contador = 1; contador > etapa; etapa++){
            etapa0.style.display = "none"
            etapa1.style.display = ""
            imgs.src = "https://i.redd.it/cesemu5rlyo81.jpg"
        }
    }
}

function paginaAnterior(){
    if(etapa == 1){
        for(contador = 1; contador == etapa; etapa--){
            etapa0.style.display = ""
            etapa1.style.display = "none"
            imgs.src = "components/images/maleniaGIF.gif"
        }
    }
}

function mandaParaGrafrico(){
    window.location = "grafico.html";
}