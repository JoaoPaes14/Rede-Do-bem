const User = require('../models/userModel');

const getUsers = async (req, res) => {
  const id = req.params.id;

  try {

    if (id) {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      return res.json(user);
    }

    const users = await User.findAll();
    return res.json(users);
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
