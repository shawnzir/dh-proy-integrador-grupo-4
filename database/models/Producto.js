module.exports = function(sequelize, dataTypes) {

    const alias = "Producto";

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
       
        foto: {
            type: dataTypes.STRING
        },
        producto: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING(500)
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        }

    }

let config = {
    tableName: "productos",
    timestamps: false,
    underscored: true
}

let Producto = sequelize.define(alias, cols, config);

return Producto;

}