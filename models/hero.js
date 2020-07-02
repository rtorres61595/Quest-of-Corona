module.exports = function(sequelize, DataTypes) {

    const Hero = sequelize.define("Hero", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        attack: {
            type: DataTypes.DOUBLE
        },
        health: {
            type: DataTypes.DOUBLE
        }
    });

    return Hero;

};