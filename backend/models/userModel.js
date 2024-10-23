const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Voluntario = sequelize.define('Voluntario', {
  Cod_voluntario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  Nome: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Idade: {
    type: DataTypes.SMALLINT,
    allowNull: true,
  },
  Email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  Senha: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Qtd_horas_disponiveis: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fk_Organizacao_Cod_organizacao: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'voluntario',
  timestamps: true,
});

module.exports = Voluntario;
