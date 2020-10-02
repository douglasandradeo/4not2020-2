const mongoose = require('mongoose')

// Type dentro do mongoose usa-se a primeira letra maiúscula
// Normalmente só se trabalha com Number quando vai-se fazer cálculos
const esquema = mongoose.Schema({
    // Colocando [ ] faz com que o atributo seja multivalorado, aceitando mais de um valor
    setor: { type: String, required: true },

})


/* 
 Parâmetros do método mongoose.model()
 1o -> Nome do modelo (sempre igual o nome do arquivo)
 2o -> Estrutura (Esquema) do modelo
 3o -> Nome da coleção (collection) em que os objetos criados a partir do
       modelo serão armazenados no MongoDB
*/

module.exports = mongoose.model('Setor', esquema, 'setores')