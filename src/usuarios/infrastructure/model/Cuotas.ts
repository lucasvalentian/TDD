
import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../db/db';

const Cuotas=sequelize.define('cuotas', { 

    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      monto:{
         type: DataTypes.DECIMAL,
         allowNull: true,
      },
      interes:{
         type: DataTypes.DECIMAL,
         allowNull: true,
      },
      capitalMensual:{
         type: DataTypes.DECIMAL,
         allowNull: true,
      }

 }, {
    freezeTableName: true,
  });
  
  export default Cuotas;