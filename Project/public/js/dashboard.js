function nomeUsuario(){
    var nome = sessionStorage.NOME_USUARIO;
    usuarioNome.innerHTML = `${nome}!!`
    if(usuarioNome.innerHTML == "undefined!!"){
        usuarioNome.innerHTML = `Maculado(a)!!`
    }
}
var lista_niveis = []
function botao_calcular(){
    var nivel = 0
    var etapa = 1
    var nivel_usuario = Number(input_nivel.value);
    lista_niveis.push(nivel_usuario)
    if(nivel_usuario == 0){
        Swal.fire({
        icon: 'info',
        title: 'Informe seu nível!',
        text: 'O nivel mínimo é 1!'
    })
    }

    else if (nivel_usuario > 713){
        Swal.fire({
            icon: 'info',
            title: 'Informe seu nível!',
            text: 'O nivel máximo é 713!'
        })
    }

    else if(etapa == 1){
        for(contador = 0; contador < etapa; contador++)
        aside.style.display = "none";
        etapa++
        aside2.style.display = ""
        console.log(etapa)
    }
    

    var min_ajudar = (nivel_usuario - 10) - (nivel_usuario * 0.1)
    var max_ajudar = (nivel_usuario + 10) + (nivel_usuario * 0.1)
    var min_serAjudado = (nivel_usuario - 10) - (nivel_usuario * 0.1) + 1
    var max_serAjudado = (nivel_usuario + 10) + (nivel_usuario * 0.1) + 1

    min_ajudartd.innerHTML = `${min_ajudar.toFixed(0)}`
    max_ajudartd.innerHTML = `${max_ajudar.toFixed(0)}`
    min_ajudadotd.innerHTML = `${min_serAjudado.toFixed(0)}`
    max_ajudadotd.innerHTML = `${max_serAjudado.toFixed(0)}`
}



// for(var contador = 1; contador <= etapa; etapa++){
//     aside.style.display = "none";
//     etapa++
// }