module.exports = function(sequelize, DataTypes) {

    const Enemy = sequelize.define("Enemy", {
        name: {
            type: DataTypes.STRING
        },
        attack: {
            type: DataTypes.DOUBLE
        },
        health: {
            type: DataTypes.DOUBLE
        },
        isGrunt: {
            type: DataTypes.BOOLEAN
        },
        isBoss: {
            type: DataTypes.BOOLEAN
        }
    });

    return rpgCharacter;

};