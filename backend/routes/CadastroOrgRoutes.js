const express = require('express');
const { createOrganizacao, getOrganizacoes ,loginOrganizacao} = require('../controllers/CadastroOrgController');

const router = express.Router();

router.get('/', getOrganizacoes);
router.post('/', createOrganizacao);
router.post('/login', loginOrganizacao);

module.exports = router;
