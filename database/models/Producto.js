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
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        deleted_at: {
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