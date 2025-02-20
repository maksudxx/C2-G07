const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('usuario', {
    usuario_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    usuario_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuario_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuario_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuario_imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuario_password:{
      type:DataTypes.STRING,
      allowNull: false,
    },
  });
};

