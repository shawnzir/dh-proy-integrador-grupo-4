const { ForeignKeyConstraintError } = require("sequelize");

module.exports = function (sequelize, dataTypes) {

    const alias = "Comentario";

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },

        usuario_id: {
            type: dataTypes.INTEGER
        },
        producto_id: {
            type: dataTypes.INTEGER
        },
        comentario: {
            type: dataTypes.STRING(500)
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        }

    }

    let config = {
        tableName: "comentarios",
        timestamps: false,
        underscored: true
    }

    const Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function (models) {
        Comentario.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'usuario_id' 
        });
        Comentario.belongsTo(models.Producto, {
            as: 'producto',
            foreignKey: 'producto_id' 
        });
    }

    
        
    


    return Comentario;

}