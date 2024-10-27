const express = require('express');
const { getVagas, createVagas } = require("../controllers/VagasController");

const router = express.Router();


router.get('/', getVagas);

router.post('/', createVagas);

module.exports = router;
