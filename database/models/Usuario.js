module.exports = function (sequelize, dataTypes) {

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
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        }
    }

    let config = {
        tableName: "usuarios",
        timestamps: false,
        underscored: true
    }

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Comentario, {
            as: 'comentario',
            foreignKey: 'usuario_id'
        });
    }



    Usuario.associate = function (models) {
        Usuario.hasMany(models.Producto, {
            as: 'producto',
            foreignKey: 'usuario_id'
        });
    }

    return Usuario;

}