const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Voluntario = sequelize.define('voluntario', {
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
        type: DataTypes.STRING(255),
        allowNull: false
    },
   
    Qtd_horas_disponiveis: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
}, {
    tableName: 'voluntario',
    timestamps: false
});
module.exports = Voluntario;