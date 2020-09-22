const mongoose = require('mongoose')

// Type dentro do mongoose usa-se a primeira letra maiúscula
// Normalmente só se trabalha com Number quando vai-se fazer cálculos
const esquema = mongoose.Schema({
    nome: { type: String, required: true },
    data_inicial: { type: Date, required: true },
    data_final: {
        type: Date,
        required: true,
        // validador de dados inseridos
        validate: { 
            validator: function(valor) {
                return valor >= this.data_inicial
            },
            message: () => 'A data final deve ser maior ou igual à data inicial.'
        }
    },
    tipo: { type: mongoose.ObjectId, ref: 'Tipo', required: true },
    setor: { type: mongoose.ObjectId, ref: 'Setor', required: true },
})

/* 
 Parâmetros do método mongoose.model()
 1o -> Nome do modelo (sempre igual o nome do arquivo)
 2o -> Estrutura (Esquema) do modelo
 3o -> Nome da coleção (collection) em que os objetos criados a partir do
       modelo serão armazenados no MongoDB
*/

module.exports = mongoose.model('Evento', esquema, 'eventos')