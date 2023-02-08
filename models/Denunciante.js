const { DataTypes } = require('sequelize');
const { db } = require("../config/db")

const Denunciante = db.define("diet", {
    nombre:{
        type: DataTypes.STRING,
        allowNull:false
    },
    apellido:{
        type: DataTypes.STRING,
        allowNull:false
    },
    edad:{
        type: DataTypes.NUMBER,
        allowNull:false
    },
    longitud:{
        type: DataTypes.NUMBER,
        allowNull:false
    },
    latitud:{
        type: DataTypes.NUMBER,
        allowNull:false
    },
    hora:{
        type:DataTypes.DATE,
        allowNull:false
    }

}, {

})


module.exports = Denunciante