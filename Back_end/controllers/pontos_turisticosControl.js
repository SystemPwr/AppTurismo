const Cliente = require('../models/pontos_turisticosModel')

exports.getClientes = async(req, res) => {
    try {
        const Clientes = await Cliente.pontos_turisticoModel.find();
        res.json(Clientes)
        console.log("resposta do banco "+ Clientes);
    }catch(error) {
        res.status(500).json({ message: error.message });

    }
}

exports.getoneCliente = async (req, res) => {   
  try {;
    res.status(201).json(await Cliente.pontos_turisticoModel.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createCliente = async (req, res) => {   
    try {;
      res.status(201).json(await pontos_turisticos.AppturismoModel.create(req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.updateCliente = async (req, res) => {   
    try {;
      res.status(201).json(await pontos_turisticoModel.findByIdAndUpdate(req.params.id,req.body));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.deleteCliente = async (req, res) => {   
    try {;
      res.status(201).json(await pontos_turisticos.pontos_turisticoModel.findByIdAndDelete(req.params.id));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  
  exports.getoneClienteCPF = async (req, res) => {         
      try {

        const cpf = parseInt(req.params.id); // CPF a ser pesquisado
        const pontos_turistico = await pontos_turisticos.pontos_turisticoModel.findOne({ cpf: cpf }); // Procura cliente por CPF        

        if (!pontos_turisticos) {
          return res.status(404).json({ message: "Cliente não encontrado" });
    }

    res.status(200).json(pontos_turisticos);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
  };
