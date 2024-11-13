const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(Senha, saltRounds);
    const newOrganizacao = await Organizacao.create({ Nome, Email, Endereco, Telefone, Area_atuacao, Senha: hashedPassword, Cnpj });
    return res.status(201).json(newOrganizacao);
  } catch (error) {
    console.error('Erro ao criar organização:', error);
    return res.status(500).json({ message: 'Erro ao criar organização' });
  }
};

const loginOrganizacao = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: 'Por favor, preencha todos os campos' });
  }

  try {
    const organizacao = await Organizacao.findOne({ where: { Email: email } });

    if (!organizacao) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Se você estiver usando bcrypt para senha
    const validPassword = await bcrypt.compare(senha, organizacao.Senha);
    if (!validPassword) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Sucesso no login
    return res.status(200).json({ message: 'Login bem-sucedido', nome: organizacao.Nome });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

module.exports = { getOrganizacoes, createOrganizacao, loginOrganizacao };
