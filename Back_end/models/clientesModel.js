const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aiorosdesagitario13:gVlfM6GLCB2MmJj5@cluster0.6b4io.mongodb.net/', { useNewUrlParser: true});

var Schema = mongoose.Schema;

const cliente = new Schema ({

    cpf        : { type:Number, required: true},
    nome       : { type:String, required: true},
    cep        : { type:Number },
    telefone   : { type:Number, required: true},
    email      : { type:String, required: true}
})

const ClienteModel = mongoose.model('clientes', cliente);


module.exports = {ClienteModel}
