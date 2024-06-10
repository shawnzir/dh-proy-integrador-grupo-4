const { ForeignKeyConstraintError } = require("sequelize");
const data = require("../../db/data");

module.exports = function(sequelize, dataTypes) {

    const alias = "Comentario";

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
       
        usuario_id: {
            ForeignKey: true,  // no se si es asi ;) 
            type: dataTypes.INTEGER
        },
        producto_id: {
            ForeignKey: true,  // no se si es asi ;) 
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
    
    let Comentario = sequelize.define(alias, cols, config);
    
    return Comentario;

}