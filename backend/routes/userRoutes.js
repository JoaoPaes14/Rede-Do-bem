const express = require('express');
const router = express.Router();
const Voluntario = require('../models/userModel');

// Rota de login
router.post('/login', async (req, res) => {
  const { Email, Senha } = req.body;

  try {
    const user = await Voluntario.findOne({ where: { Email, Senha } });
    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }
    res.json({ name: user.Nome }); // ou o que desejar retornar
  } catch (error) {
    res.status(500).json({ message: 'Erro ao fazer login' });
  }
});

// Exporta as rotas
module.exports = router;

