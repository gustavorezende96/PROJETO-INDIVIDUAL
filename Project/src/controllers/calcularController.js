// var calcularModel = require("../models/calcularModel");

// var sessoes = [];

// function testar(req, res) {
//     console.log("ENTRAMOS NA calcularController");
//     res.json("ESTAMOS FUNCIONANDO!");
// }


// function calcular(req, res) {
//     var nivel_usuario= req.body.nivelServer;

//     if (nivel_usuario == undefined) {
//         res.status(400).send("Seu nivel_usuario está undefined!");
//     }else {
        
//       calcularModel.calcular(nivel_usuario)
//             .then(
//                 function (resultado) {
//                     console.log(`\nResultados encontrados: ${resultado.length}`);
//                     console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }

// }


// module.exports = {
//     calcular,
//     testar
// }