var etapa = 0
function mais(){

   
    if(etapa == 0){
        for(var contador = 1; contador > etapa; etapa++){
        ps.style.display = "";
        divbotao_mais.style.display = "none"
       }  
    }
}

function menos(){
    if(etapa == 1){
        for(contador = 1; contador == etapa; etapa--){
        ps.style.display = "none";
        divbotao_mais.style.display = ""  
        }
    }
}