const { DataTypes } = require('sequelize');
const { db } = require("../config/db")

const Pais = db.define("Pais", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {

})


module.exports = Pais