
function entrar(){
    var nomee = nome.value;
    var eemail = email.value;
    var password = senha.value;

    if(nomee.length == 0){
        alert("OPSS, Parece que você não preencheu seu nome!")
    }
    else if(eemail.indexOf("@") == -1){
        alert("Insira um e-mail válido!")
    }
    else if(password.length == 0){
        alert("Insira uma senha!")
    }
    else if(password.length < 5){
        alert("Sua senha está muito fraca! Digite uma senha com pelo ou menos 5 caractéres.")
        }
    else{
        alert("sucesso")
        setTimeout(() => {
            window.location = "login.html";
        }, "2000")
    } 
}
      
