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
        },
        usuario_id: {
            type: dataTypes.INTEGER
        }

    }

let config = {
    tableName: "productos",
    timestamps: false,
    underscored: true
}

const Producto = sequelize.define(alias, cols, config);

Producto.associate = function (models) {
    Producto.belongsTo(models.Usuario, {
        as: 'usuario',
        foreignKey: 'usuario_id' 
    }),

    Producto.hasMany(models.Comentario, {
        as: 'comentarios',
        foreignKey: 'producto_id' 
    })


    }




return Producto;

}