const Vagas = require('../models/VagasModel');

const getVagas = async (req, res) => {
  const id = req.params.id;

  try {
    if (id) {
      const vaga = await Vagas.findByPk(id); // Corrigido de 'vagas' para 'vaga'
      if (!vaga) {
        return res.status(404).json({ message: 'Vaga não encontrada!' });
      }
      return res.json(vaga);
    }

    const vagas = await Vagas.findAll();
    return res.json(vagas);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar vaga' });
  }
};

const createVagas = async (req, res) => {
  const { Tipo_vaga, Habilidades, Dias_semana, Horario, Horas_certificado } = req.body;

  if (!Tipo_vaga || !Habilidades || !Dias_semana || !Horario || !Horas_certificado) {
    return res.status(400).json({ message: 'Por favor, preencha todos os campos' });
  }

  try {
    const vagaExists = await Vagas.findOne({ where: { Tipo_vaga, Habilidades } });
    if (vagaExists) {
      return res.status(400).json({ message: 'Vaga já existe com essas características' });
    }

    const newVaga = await Vagas.create({
      Tipo_vaga,
      Habilidades,
      Dias_semana,
      Horario,
      Horas_certificado,
    });

    return res.status(201).json(newVaga);
  } catch (error) {
    console.error('Erro ao cadastrar Vaga!', error);
    return res.status(500).json({ message: 'Erro ao cadastrar Vaga!', error });
  }
};

module.exports = { getVagas, createVagas };
