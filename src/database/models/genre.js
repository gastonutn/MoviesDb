module.exports = (sequelize, dataTypes) => {
    const alias = "genre"
    const cols = {
        id : {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        ranking: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true
        },
        active: {
            type: dataTypes.TINYINT.UNSIGNED,
            allowNull: false,
            defaultValue : 1
        }
    }
    const config = {
        tableName: "genres",
        timestampts: true, // si no tiene marca del tiempo el valor tiene que ser false
        underscored: true //nombres con _ underscored es true, de lo contrario false
    }
    const genre = sequelize.define(alias,cols,config);
    return genre
}