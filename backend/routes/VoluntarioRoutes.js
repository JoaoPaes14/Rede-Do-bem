const express = require('express');
const { getVoluntarios, createVoluntario, loginVoluntario,getVoluntarioInfo } = require('../controllers/VoluntarioController');

const router = express.Router();


router.get('/voluntarios/:id?', getVoluntarios);
router.get('/info', getVoluntarioInfo);

router.post('/voluntario', createVoluntario);


router.post('/login', loginVoluntario);

module.exports = router;
