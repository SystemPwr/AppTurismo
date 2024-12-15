const mongoose = require('mongoose');

// Conexão com o MongoDB sem as opções descontinuadas
mongoose.connect('mongodb+srv://aiorosdesagitario13:gVlfM6GLCB2MmJj5@cluster0.6b4io.mongodb.net/', {
  useNewUrlParser: true,  // Se necessário, mas apenas para versões antigas do driver
})
.then(() => {
  console.log('Conectado ao MongoDB com sucesso!');
})
.catch((err) => {
  console.error('Erro na conexão com o MongoDB:', err);
});

var Schema = mongoose.Schema;

// Definindo o esquema do cliente
const cliente = new Schema({
  cpf        : { type: Number, required: true },
  nome       : { type: String, required: true },
  cep        : { type: Number },
  telefone   : { type: Number, required: true },
  email      : { type: String, required: true },
});

// Criando o modelo baseado no esquema
const ClienteModel = mongoose.model('clientes', cliente);

// Exportando o modelo
module.exports = { ClienteModel };
