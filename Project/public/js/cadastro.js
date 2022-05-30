        lista_plataformas = []
      function cadastrar() {
          var nomeVar = nome.value;
          var plataformaVar = ""
          var emailVar = email.value;
          var senhaVar = senha.value;
        
        var input_plataforma = plataforma.value
        if (input_plataforma == "ps"){
            plataformaVar = "Playstation"
        }
        else if (input_plataforma == "xbox"){
            plataformaVar = "Xbox"
        }
        else if (input_plataforma == "pc"){
            plataformaVar = "PC"
        }

        lista_plataformas.push(plataformaVar)

        if (nomeVar == "" || plataformaVar == "" || emailVar == "" || senhaVar == "") {
        Swal.fire({
            icon: 'error',
            title: 'Insira as informações',
            text: 'Por favor, preencha os campos!',
        })
    } else if(emailVar.indexOf('@') == - 1 || emailVar.indexOf('.') == - 1){
        Swal.fire({
            icon: 'error',
            title: 'Insira um email válido!',
            text: 'Por favor, insira um email válido!',
        })
    } else if(senhaVar.length < 6){
        Swal.fire({
            icon: 'info',
            title: 'Senha fraca!',
            text: 'Uma senha deve conter no minímo 6 caractéres.'
        })
    }
        else {
           
        

        // Enviando o valor da nova input
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeServer: nomeVar,
                plataformaServer: plataformaVar,
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Cadastro bem-sucedido!',
                showConfirmButton: false,
                timer: 1500
              })

                setTimeout(() => {
                    window.location = "login.html";
                }, "2000")
                
                limparFormulario();
            } else {
                Swal.fire({
            icon: 'error',
            title: 'Erro no cadastro!',
            text: 'Por favor, verfique as informações e tente novamente!'
        })
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

        return false;
    }
    }
    function revelar(){
    var senha_revel = document.getElementById("senha");

        if(senha_revel.type == "password"){
            senha_revel.type = "text";
        }
        else{
            senha_revel.type = "password"
        }

    }

        // function entrar(){
        //     var nomee = nome.value;
        //     var eemail = email.value;
        //     var password = senha.value;
        
        //     //VALIDAÇÕES DO CADASTRO
        
        //         //CAMPOS NÃO PREENCHIDOS
        //     if(nomee.length == 0 && eemail.length == 0 && password.length == 0){
        //         Swal.fire({
        //             icon: 'info',
        //             title: 'Insira as informações',
        //             text: 'Por favor, preencha os campos!',
        //         })
        //     }
        
        //         //NOME NÃO PREENCHIDO
        //     else if(nomee.length == 0){    
        //         Swal.fire({
        //         icon: 'info',
        //         title: 'Oops...',
        //         text: 'Você se esqueceu de informar seu nome!'
        //     })
        //     }
        
        //         //EMAIL NÃO PREENCHIDO
        //     else if(eemail.length == 0){
        //         Swal.fire({
        //             icon: 'info',
        //             title: 'E-mail não informado!',
        //             text: 'Por favor, insira um e-mail!'
        //         })
        //     }
        
        //         //EMAIL INVÁLIDO "@"
        //     else if(eemail.indexOf("@") == -1){
        //         Swal.fire({
        //             icon: 'info',
        //             title: 'E-mail inválido!',
        //             text: 'Por favor, verifique se o e-mail inserido é um email válido!'
        //         })
        //     }
        
        //         //EMAIL INVÁLIDO "."
        //     else if(eemail.indexOf(".") == -1){
        //         Swal.fire({
        //             icon: 'info',
        //             title: 'E-mail inválido!',
        //             text: 'Por favor, verifique se o e-mail inserido é um email válido!'
        //         })
        //     }
        
        //         //SENHA NÃO PREENCHIDA
        //     else if(password.length == 0){
        //         Swal.fire({
        //             icon: 'error',
        //             title: 'Senha obrigatória!',
        //             text: 'Por favor, insira uma senha!'
        //         })
        //     }
        
        //         //SENHA COM MENOS DE 5 CARACTÉRES
        //     else if(password.length < 5){
        //         Swal.fire({
        //             icon: 'info',
        //             title: 'Senha fraca!',
        //             text: 'Uma senha deve conter no minímo 5 caractéres.'
        //         })
        //         }
                
        //         //SUCESSO
        //     else{
        //             Swal.fire({
        //                 position: 'top-end',
        //                 icon: 'success',
        //                 title: 'Cadastro bem-sucedido!',
        //                 showConfirmButton: false,
        //                 timer: 1500
        //               })
        //         } 
        // }