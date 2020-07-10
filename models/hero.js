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

    Hero.create({
        name: 'Covid Knight',
        attack: 3,
        health: 45
    });

    Hero.create({
        name: 'Covid Ninja',
        attack: 4,
        health: 30
    });

    Hero.create({
        name: 'Covid Mage',
        attack: 3,
        health: 45
    });

    Hero.create({
        name: 'Covid Warlock',
        attack: 4,
        health: 30
    });

    Hero.sync();
    
    return Hero;

};