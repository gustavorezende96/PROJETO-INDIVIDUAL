
function entrar(){
    var nomee = nome.value;
    var eemail = email.value;
    var password = senha.value;

    if(nomee.length == 0){    
        Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'Você se esqueceu de informar seu nome!',
    })
    }
    else if(eemail.indexOf("@") == -1){
        Swal.fire({
            icon: 'info',
            title: 'E-mail inválido!',
            text: 'Por favor, verifique se o e-mail inserido é um email válido!',
        })
    }
    else if(password.length == 0){
        Swal.fire({
            icon: 'error',
            title: 'Senha obrigatória!',
            text: 'Por favor, insira uma senha!',
        })
    }
    else if(password.length < 5){
        Swal.fire({
            icon: 'info',
            title: 'Senha fraca!',
            text: 'Uma senha forte deve conter no minímo 5 caractéres.',
        })
        }
        else{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Cadastro bem-sucedido!',
                showConfirmButton: false,
                timer: 1500
              })
        } 
}
      
