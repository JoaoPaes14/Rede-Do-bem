const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Organizacao = sequelize.define('Organizacao', {

    Cod_organizacao: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },

    Nome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Telefone: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    Area_atuacao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Senha: {
        type: DataTypes.STRING,
        allowNull: false

    },
    Cnpj: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    }
}, {
    tableName: 'Organizacao',
    timestamps: false
});

module.exports = Organizacao;


