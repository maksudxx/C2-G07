const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("obraArte", {
    oa_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    oa_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    oa_descripcion: {
      type: DataTypes.STRING(1700),
      allowNull: true,
    },
    oa_fechaCreacion: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    oa_oculto: {
      type: DataTypes.STRING,
    },
    oa_likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    oa_imagen_obra: {
      type: DataTypes.STRING,
    },
  });
};
