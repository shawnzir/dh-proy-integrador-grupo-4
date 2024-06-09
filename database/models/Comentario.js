const { ForeignKeyConstraintError } = require("sequelize");

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
        comeentario: {
            type: dataTypes.STRING(500)

        }

    }
        // FALTA TERMINAR


}