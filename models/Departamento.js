const { DataTypes } = require('sequelize');
const { db } = require("../config/db")

const Departamento = db.define("departamento", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {

})


module.exports = Departamento