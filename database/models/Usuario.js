module.exports = function(sequelize, dataTypes) {

    const alias = "Usuario";

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING 
        },
        fecha: {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER
        },
        foto: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    }

let config = {
    tableName: "usuarios",
    timestamps: false,
    underscored: true
}

let Usuario = sequelize.define(alias, cols, config);

return Usuario;

}