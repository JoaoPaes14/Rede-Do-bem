const express = require('express');
const { createOrganizacao } = require('../controllers/cadastroController');

const router = express.Router();


router.post('/', createOrganizacao);

module.exports = router;
