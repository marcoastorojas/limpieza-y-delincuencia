const { DataTypes } = require('sequelize');
const { db } = require("../config/db")

const Provincia = db.define("provincia", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {

})


module.exports = Provincia