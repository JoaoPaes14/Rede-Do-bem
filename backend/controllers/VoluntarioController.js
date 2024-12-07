const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Voluntario = require('../models/voluntariosModel');

const getVoluntarios = async (req, res) => {
  const id = req.params.id;

  try {
    if (id) {
      const voluntario = await Voluntario.findByPk(id);
      if (!voluntario) {
        return res.status(404).json({ message: 'Voluntário não encontrado' });
      }
      return res.json(voluntario);
    }

    const voluntarios = await Voluntario.findAll();
    return res.json(voluntarios);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar voluntários' });
  }
};

const createVoluntario = async (req, res) => {
  const { Nome, Email, Idade, Senha, Qtd_horas_disponiveis } = req.body;

  // Verifica se os campos estão corretos
  if (!Nome || !Email || !Idade || !Senha || !Qtd_horas_disponiveis) {
    return res.status(400).json({ message: 'Por favor, preencha todos os campos' });
  }

  // Converte os campos para os tipos corretos (números)
  const idade = Number(Idade);
  const qtd_horas_disponiveis = Number(Qtd_horas_disponiveis);

  try {
    // Verifica se o voluntário já existe
    const existingVoluntario = await Voluntario.findOne({ where: { email: Email } });
    if (existingVoluntario) {
      return res.status(400).json({ message: 'Voluntário já existe com esse email' });
    }

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(Senha, 10);

    // Criação do voluntário no banco
    const newVoluntario = await Voluntario.create({
      nome: Nome,
      email: Email,
      senha: hashedPassword,
      idade: idade,  // Agora é um número
      Qtd_horas_disponiveis: qtd_horas_disponiveis  // Agora é um número
    });

    return res.status(201).json(newVoluntario);
  } catch (error) {
    console.error('Erro ao criar voluntário:', error);
    return res.status(500).json({ message: 'Erro ao criar voluntário' });
  }
};



const loginVoluntario = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const voluntario = await Voluntario.findOne({ where: { email } });

    if (!voluntario) {
      return res.status(400).json({ message: 'Voluntário não encontrado!' });
    }

    const isMatch = await bcrypt.compare(senha, voluntario.senha);
    if (!isMatch) {
      return res.status(400).json({ message: 'Credenciais inválidas!' });
    }

    const token = jwt.sign({ voluntarioId: voluntario.Cod_voluntario }, 'secreta_chave', { expiresIn: '1h' });
    res.json({ 
      nome: voluntario.nome,
      token: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao fazer login' });
  }
};

const getVoluntarioInfo = async (req, res) => {
  try {
    // Buscando os três primeiros voluntários
    const voluntarios = await Voluntario.findAll({
      limit: 3, // Limita a busca aos 3 primeiros voluntários
      attributes: ['nome', 'email', 'Qtd_horas_disponiveis', 'idade'],
      order: [['Cod_voluntario', 'ASC']], // Ordena pelo id, caso queira os primeiros inseridos
    });
    if (voluntarios.length > 0) {
      return res.status(200).json(voluntarios);
    } else {
      return res.status(404).json({ message: 'Nenhum voluntário encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao buscar voluntários:', error);
    return res.status(500).json({ message: 'Erro ao buscar voluntários.', error: error.message });
  }
};
module.exports = { getVoluntarios, createVoluntario, loginVoluntario, getVoluntarioInfo };
