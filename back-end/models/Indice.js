const mongoose = require('mongoose')

// Type dentro do mongoose usa-se a primeira letra maiúscula
// Normalmente só se trabalha com Number quando vai-se fazer cálculos
const esquema = mongoose.Schema({
    nome: { type: String, required: true },
    abreviacao: { type: String, required: true },
    tipo: [{
        type: String,
        required: true,
        enum: ['nacional', 'internacional']
    }],
    primeiro_registro: { type: Date, required: true }, // desde qual data começou a ser registrado de forma online este histórico
    periodocidade: { type: String, required: true, enum: ['diária', 'mensal', "trimestral", "anual"] },
    resumo: { type: String, required: true } // breve relato do que se trata o indicador
})

/* 
 Parâmetros do método mongoose.model()
 1o -> Nome do modelo (sempre igual o nome do arquivo)
 2o -> Estrutura (Esquema) do modelo
 3o -> Nome da coleção (collection) em que os objetos criados a partir do
       modelo serão armazenados no MongoDB
*/

module.exports = mongoose.model('Indice', esquema, 'indices')