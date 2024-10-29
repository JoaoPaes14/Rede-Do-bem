const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Vagas = sequelize.define('Vagas', {
  Cod_vaga: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true
  },
  Tipo_vaga: {
    type: DataTypes.STRING(50),
    allowNull: true // Ajuste se necessário
  },
  Habilidades: {
    type: DataTypes.STRING(50),
    allowNull: true // Ajuste se necessário
  },
  Dias_semana: {
    type: DataTypes.STRING(50),
    allowNull: true // Ajuste se necessário
  },
  Horario: {
    type: DataTypes.STRING(50),
    allowNull: true // Ajuste se necessário
  },
  Horas_certificado: {
    type: DataTypes.INTEGER,
    allowNull: true // Ajuste se necessário
  },
  fk_Voluntario_Cod_voluntario: {
    type: DataTypes.INTEGER,
    allowNull: true, // Ajuste se necessário
    references: {
      model: 'Voluntarios', 
      key: 'Cod_voluntario'  
    }
  }
}, {
  tableName: 'Vagas',
  timestamps: true 
});

module.exports = Vagas;
