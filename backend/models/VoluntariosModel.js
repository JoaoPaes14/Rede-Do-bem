const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Voluntarios = sequelize.define('Voluntarios', {
    Cod_voluntario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    confirmar_senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Voluntarios',
    timestamps: true
});

module.exports = Voluntarios;
