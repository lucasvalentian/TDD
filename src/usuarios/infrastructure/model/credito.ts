
import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../db/db';


const Credito = sequelize.define('credito', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    cliente: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    monto_prestamo: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    tasa_interes: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    plazo: {
      type: DataTypes.INTEGER, // Cambiado a INTEGER
      allowNull: true,
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE, // Agrega la columna createdAt
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE, // Agrega la columna updatedAt
      allowNull: false,
    },
  }, {
    freezeTableName: true,
  });
  
  export default Credito;