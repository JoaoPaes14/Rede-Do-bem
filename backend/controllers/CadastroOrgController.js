const Organizacao = require('../models/CadastroOrgModel');

const getOrganizacoes = async (req, res) => {
  const id = req.params.id;

  try {
    if (id) {
      const organizacao = await Organizacao.findByPk(id);
      if (!organizacao) {
        return res.status(404).json({ message: 'Organização não encontrada' });
      }
      return res.json(organizacao);
    }

    const organizacoes = await Organizacao.findAll();
    return res.json(organizacoes);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar organizações' });
  }
};

const createOrganizacao = async (req, res) => {
  const { Nome, Email, Endereco, Telefone, Area_atuacao, Senha, Cnpj } = req.body;

  if (!Nome || !Email || !Endereco || !Telefone || !Area_atuacao || !Senha || !Cnpj) {
    return res.status(400).json({ message: 'Por favor, preencha todos os campos' });
  }

  try {
    const organizacaoExists = await Organizacao.findOne({ where: { Email } });
    if (organizacaoExists) {
      return res.status(400).json({ message: 'Organização já existe com esse email' });
    }

    const newOrganizacao = await Organizacao.create({ Nome, Email, Endereco, Telefone, Area_atuacao, Senha, Cnpj });
    return res.status(201).json(newOrganizacao);
  } catch (error) {
    console.error('Erro ao criar organização:', error);
    return res.status(500).json({ message: 'Erro ao criar organização' });
  }
};

module.exports = { getOrganizacoes, createOrganizacao };
