const { DataTypes } = require('sequelize');
const { db } = require("../config/db")

const Distrito = db.define("distrito", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    extension:{
        type: DataTypes.NUMBER,
        allowNull: false
    }
}, {

})


module.exports = Distrito