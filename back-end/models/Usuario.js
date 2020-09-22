const mongoose = require('mongoose')

// Type dentro do mongoose usa-se a primeira letra maiúscula
// Normalmente só se trabalha com Number quando vai-se fazer cálculos
const esquema = mongoose.Schema({
    nome: { type: String, required: true },
    // Índice único:  impede a duplicidade de CPFs no cadastro
    cpf: { type: String, required: true, index: { unique: true} },
    email: { type: String, required: true, index: { unique: true} },
    data_nascimento: { type: Date, required: true },
    profissao: { type: String, required: true }    
})

/* 
 Parâmetros do método mongoose.model()
 1o -> Nome do modelo (sempre igual o nome do arquivo)
 2o -> Estrutura (Esquema) do modelo
 3o -> Nome da coleção (collection) em que os objetos criados a partir do
       modelo serão armazenados no MongoDB
*/

module.exports = mongoose.model('Usuario', esquema, 'usuarios')