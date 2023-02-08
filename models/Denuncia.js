const { DataTypes } = require('sequelize');
const { db } = require("../config/db")

const Denuncia = db.define("denuncia", {
    comentario: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    calificacion:{
        type: DataTypes.NUMBER,
        allowNull: false
    }
}, {

})


module.exports = Denuncia