const User = require('../models/userModel');

const getUsers = async (req, res) => {
  const id = req.params.id; // Captura o ID da rota, se necessário

  try {
    // Se um ID for fornecido, busca um usuário específico
    if (id) {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      return res.json(user); // Retorna o usuário específico
    }

    // Se nenhum ID for fornecido, busca todos os usuários
    const users = await User.findAll();
    return res.json(users); // Retorna a lista de usuários
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar usuários' });
  }
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Por favor, preencha todos os campos' });
  }

  try {
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: 'Usuário já existe' });
    }

    const newUser = await User.create({ name, email, password });
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao criar usuário' });
  }
};

module.exports = { getUsers, createUser };
