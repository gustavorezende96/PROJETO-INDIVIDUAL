
function entrar(){
    var nomee = nome.value;
    var eemail = email.value;
    var password = senha.value;

    //VALIDAÇÕES DO CADASTRO

        //CAMPOS NÃO PREENCHIDOS
    if(nomee.length == 0 && eemail.length == 0 && password.length == 0){
        Swal.fire({
            icon: 'info',
            title: 'Insira as informações',
            text: 'Por favor, preencha os campos!',
        })
    }

        //NOME NÃO PREENCHIDO
    else if(nomee.length == 0){    
        Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'Você se esqueceu de informar seu nome!'
    })
    }

        //EMAIL NÃO PREENCHIDO
    else if(eemail.length == 0){
        Swal.fire({
            icon: 'info',
            title: 'E-mail não informado!',
            text: 'Por favor, insira um e-mail!'
        })
    }

        //EMAIL INVÁLIDO "@"
    else if(eemail.indexOf("@") == -1){
        Swal.fire({
            icon: 'info',
            title: 'E-mail inválido!',
            text: 'Por favor, verifique se o e-mail inserido é um email válido!'
        })
    }

        //EMAIL INVÁLIDO "."
    else if(eemail.indexOf(".") == -1){
        Swal.fire({
            icon: 'info',
            title: 'E-mail inválido!',
            text: 'Por favor, verifique se o e-mail inserido é um email válido!'
        })
    }

        //SENHA NÃO PREENCHIDA
    else if(password.length == 0){
        Swal.fire({
            icon: 'error',
            title: 'Senha obrigatória!',
            text: 'Por favor, insira uma senha!'
        })
    }

        //SENHA COM MENOS DE 5 CARACTÉRES
    else if(password.length < 5){
        Swal.fire({
            icon: 'info',
            title: 'Senha fraca!',
            text: 'Uma senha deve conter no minímo 5 caractéres.'
        })
        }
        
        //SUCESSO
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
      
