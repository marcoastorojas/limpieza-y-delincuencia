const { DataTypes } = require('sequelize');
const { db } = require("../config/db")

const Estadistica = db.define("estadistica", {
    año: {
        type: DataTypes.STRING,
        allowNull: false
    },
    centros_educativos:{
        type:DataTypes.NUMBER
    },
    hospitales:{
        type:DataTypes.NUMBER
    },
    clinicas:{
        type:DataTypes.NUMBER
    },
    comisarias:{
        type:DataTypes.NUMBER
    },
    parques:{
        type:DataTypes.NUMBER
    },
    tasa_natalidad:{
        type:DataTypes.NUMBER
    },
    nivel_educación:{
        type:DataTypes.NUMBER
    },
    calidad_alimentacion:{
        type:DataTypes.NUMBER
    },
    nivel_riqueza:{
        type:DataTypes.NUMBER
    },
    denuncias:{
        type:DataTypes.NUMBER
    },
    promedio_calidicaciones:{
        type:DataTypes.NUMBER
    }
}, {

})


module.exports = Estadistica