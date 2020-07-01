module.exports = function(sequelize, DataTypes) {

    const Hero = sequelize.define("Hero", {
        name: {
            type: DataTypes.STRING
        },
        attack: {
            type: DataTypes.DOUBLE
        },
        health: {
            type: DataTypes.DOUBLE
        },
        blocked: {
            type: DataTypes.BOOLEAN
        },
        healed: {
            type: DataTypes.BOOLEAN
        }
    });

    return Hero;

};