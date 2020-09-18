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
    // Colocando [ ] faz com que o atributo seja multivalorado, aceitando mais de um valor
    dias_semana: [{
        type: String,
        required: true,
        enum: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb']
    }],
    // Valores que usam apenas a parte de hora de uma data
    // são manipulados mais facilmente como string
    horario_inicial: { type: String, required: true },
    horario_final: { type: String, required: true },
    curso: { type: mongoose.ObjectId, ref: 'Curso', required: true },
    professor: { type: mongoose.ObjectId, ref: 'Professor', required: true },
    sala_aula: { type: mongoose.ObjectId, ref: 'SalaAula', required: true }
})

/* 
 Parâmetros do método mongoose.model()
 1o -> Nome do modelo (sempre igual o nome do arquivo)
 2o -> Estrutura (Esquema) do modelo
 3o -> Nome da coleção (collection) em que os objetos criados a partir do
       modelo serão armazenados no MongoDB
*/

module.exports = mongoose.model('Turma', esquema, 'Turmas')