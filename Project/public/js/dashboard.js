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
    var rl = Number(input_nivel.value);
    lista_niveis.push(rl)
    if(rl == 0){
        Swal.fire({
        icon: 'info',
        title: 'Informe seu nível!',
        text: 'O nivel mínimo é 1!'
    })
    }

    else if (rl > 713){
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
    

    var min_serAjudado = (rl - 10) - (rl * 0.1)  + 1
    var max_serAjudado = (rl + 10) + (rl * 0.1)
    var min_ajudar = (rl - 10) - (rl * 0.2) 
    var max_ajudar = (rl + 10) + (rl * 0.2)

    min_ajudartd.innerHTML = `${min_ajudar.toFixed(0)}`
    max_ajudartd.innerHTML = `${max_ajudar.toFixed(0)}`
    min_ajudadotd.innerHTML = `${min_serAjudado.toFixed(0)}`
    max_ajudadotd.innerHTML = `${max_serAjudado.toFixed(0)}`
}

function botao_pvp(){
    if(tablepvp.style.display == "none"){
        tablepvp.style.display = ""
        tablecoop.style.display = "none"
        buttonCOOP.style.display = ""
        buttonPVP.style.display = "none"

        var rl = Number(input_nivel.value);



        var min_serAjudado = rl - (rl * 0.1) + 1
        var max_serAjudado = rl  + (rl * 0.1) + 7
        var min_ajudar = rl - (rl * 0.2) + 3
        var max_ajudar = rl + (rl * 0.2) + 2

        min_ajudartdPVP.innerHTML = `${min_ajudar.toFixed(0)}`
        max_ajudartdPVP.innerHTML = `${max_ajudar.toFixed(0)}`
        min_ajudadotdPVP.innerHTML = `${min_serAjudado.toFixed(0)}`
        max_ajudadotdPVP.innerHTML = `${max_serAjudado.toFixed(0)}`
    }
}

function botao_coop(){
    if(tablecoop.style.display == "none"){
        tablecoop.style.display = ""
        tablepvp.style.display = "none"
        buttonPVP.style.display = ""
        buttonCOOP.style.display = "none"
    }
}
