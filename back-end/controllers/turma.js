/* 

    OPERAÇÕES BÁSICAS SOBRE DADOS 

    1) CREATE (criação ou inserção)
        Cria um novo objeto dentro do banco de dados

    2) RETRIEVE (recurapeção ou listar)
        Obter de volta um ou mais objetos preexistentes no banco de dados

    3) UPDATE
        Atualizar os dados de um objeto preexistente no banco de dados
    
    4) DELETE
        Exclusão de um objeto do banco de dados

    (C)reate + (R)etrieve + (U)pdate + (D)elete = sigla CRUD

    =====================================================================

    Verbos do protocolo HTTP

    Verbo               Operação
    POST                CREATE
    GET                 RETRIEVE
    PUT                 UPDATE
    DELETE              DELETE

*/

// Controller é um conjunto de funções assoaciadas às operações sobre dados

// async e await servem para que o sistema espere o retorno para saber qual
// rumo tomar com relação ao retorno que será dado ao usuário.

const turma = require('../models/Turma')
const controller = {} // Objeto vazio

// Operação CREATE, função novo()
controller.novo = async (req, res) => {
    // Usa os dados que chegam dentro do body da requisição
    // e os envia ao BD para a criaçào de um novo objeto
    try {
        await turma.create(req.body)
        // HTTP 201: Created
        res.status(201).end()
    }
    catch(erro) {
        console.log(erro)
        // HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}

// Operação RETRIEVE (all), função listar()
// async e await andam sempre juntos
controller.listar = async (req, res) => {
    try {
        // await faz o servidor MongoDB esperar até a busca completa da informação 
        // Traz todos os cursos cadastrados
        let dados = await turma.find()
            // populate vai até a pasta models e, por ter type ObjectId ele busca todos os dados cadastrados
            .populate('curso', 'nome') // traz apenas o nome do id indicado
            .populate('professor') // todos os atributos
            .populate('sala_aula', 'nome capacidade') // somente nome e capacidade (separar apenas com espaço)
        res.send(dados) // Vai com status HTTP 200: OK
    }
    catch(erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

// Operação RETRIEVE (one), função obterUm()
controller.obterUm = async (req, res) => {
    try{
        // Capturando o parâmetro id da URL
        const id = req.params.id
        let obj = await turma.findById(id)

        // O objeto existe e foi encontrado
        if(obj) res.send(obj) // HTTP 200
        // Não encontrado
        else res.status(404).end() //HTTP 404: Not found
    }
    catch(erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

// Operação UPDATE, função atualizar()
controller.atualizar = async (req, res) => {
    try{
        // Isolar o _id o objeto que está sendo alterado
        const id = req.body._id

        // Busca e substituição do conteúdo do objeto
        let ret = await turma.findByIdAndUpdate(id, req.body)
        
        // Se encontrou e atualizou, retornamos HTTP 204: No content
        // Todos os retornos na casa dos 200, significa que deu certo 
        // alguma forma.
        if(ret) res.status(204).end()

        // Não encontrou o objeto para ser alterado, retorno HTTP 404: Not found
        else res.status(404).end()

    }
    catch(erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

// Operação DELETE, função excluir()
controller.excluir = async (req, res) => {
    try{
        // ISolar o id
        const id = req.body._id

        // Busca pelo id e exclusão
        let ret = await turma.findByIdAndDelete(id)
        
        // Encontrou e excluiu, HTTP 204: No content
        if(ret) res.status(204).end()

        // Não encontrou, HTTP 404: Not found
        else res.status(404).end()
    }
    catch(erro){ 
        console.log(erro)
        res.status(500).send(erro)
    }
}

module.exports = controller
