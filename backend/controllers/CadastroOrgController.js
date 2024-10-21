//const Organizacao = require('../models/CadastroOrgModel')

import { db } from "../config/db.js";

const app = express();//criar app
app.use(express.json());
const port = 8082;

app.post('/cadastrarOrg', async (req, res) => {
  try {
    const { nome, email, endereco, telefone, area_atuacao, senha, cnpj } = req.body;

    if (!nome || !email || !endereco || !telefone || !area_atuacao || !senha || !cnpj) {
      return res.status(400).json({ message: 'Por favor, preencha todos os campos' });
    }

    const q = 'INSERT INTO Organizacao (nome,email,endereco,telefone,area_atuacao,senha,cnpj) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [nome, email, endereco, telefone, area_atuacao, senha, cnpj];

    const result = await db.query(q, values);
  } catch (err) {
    console.error('Erro ao cadastrar organização!', err);
    res.status(500).json({ message: 'Erro ao cadastrar organização!', err });
  }
});

// try {
// const OrganizacaoExists = await Organizacao.findOne({ where: { email } });
// if (OrganizacaoExists) {
// return res.status(400).json({ message: 'Email já cadastrado.' });
// }

// const newOrganizacao = await Organizacao.create({ nome, email, endereco, telefone, area_atuacao, senha, cnpj });
//   res.status(201).json(newOrganizacao);
// } catch (error) {
//   res.status(500).json({ message: 'Erro ao cadastrar organização.' });
// }


module.exports = { createOrganizacao };