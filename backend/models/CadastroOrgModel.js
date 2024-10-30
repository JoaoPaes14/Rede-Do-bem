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
        allowNull: true,
        unique: true,
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    Endereco: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Telefone: {
        type: DataTypes.INTEGER,
        allowNull: true

    },
    Area_atuacao: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Senha: {
        type: DataTypes.STRING,
        allowNull:true

    },
    Cnpj: {
        type: DataTypes.INTEGER,
        allowNull:true,
        unique: true,
    }
}, {
    tableName: 'Organizacao',
    timestamps: false
});

module.exports = Organizacao;


