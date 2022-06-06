
        lista_plataformas = []
      function cadastrar() {
          var nomeVar = nome.value;
          var plataformaVar = ""
          var emailVar = email.value;
          var senhaVar = senha.value;
        
        var input_plataforma = plataforma.value
        if (input_plataforma == "ps"){
            plataformaVar = "1"
        }
        else if (input_plataforma == "xbox"){
            plataformaVar = "2"
        }
        else if (input_plataforma == "pc"){
            plataformaVar = "3"
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