const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Voluntarios } = require('../models/voluntariosModel');

const loginVoluntario = async (req, res) => {
    try {
        const { email, senha } = req.body;

        const voluntario = await Voluntarios.findOne({ where: { email } });

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

const registerVoluntario = async (req, res) => {
    const { nome, email, senha, confirmar_senha, idade } = req.body;

    try {
        if (senha !== confirmar_senha) {
            return res.status(400).json({ message: 'As senhas não coincidem!' });
        }

        const existingVoluntario = await Voluntarios.findOne({ where: { email } });
        if (existingVoluntario) {
            return res.status(400).json({ message: 'Voluntário já existe!' });
        }

        const hashedPassword = await bcrypt.hash(senha, 10);

        const newVoluntario = await Voluntarios.create({
            nome,
            email,
            senha: hashedPassword,
            idade,
        });

        res.status(201).json({
            message: 'Voluntário registrado com sucesso!',
            voluntario: {
                nome: newVoluntario.nome,
                email: newVoluntario.email,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao registrar voluntário' });
    }
};

const getVoluntario = async (req, res) => {
    try {
        const voluntario = await Voluntarios.findByPk(req.voluntario.voluntarioId);

        if (!voluntario) {
            return res.status(404).json({ message: 'Voluntário não encontrado!' });
        }

        res.json({
            nome: voluntario.nome,
            email: voluntario.email,
            idade: voluntario.idade,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao obter dados do voluntário' });
    }
};

module.exports = { loginVoluntario, registerVoluntario, getVoluntario };
