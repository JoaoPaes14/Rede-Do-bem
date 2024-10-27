const express = require('express');
const { createOrganizacao, getOrganizacoes } = require('../controllers/CadastroOrgController');

const router = express.Router();

router.get('/', getOrganizacoes);
router.get('/:id', getOrganizacoes);
router.post('/', createOrganizacao);

module.exports = router;
