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
        attack: 45,
        health: 3
    });

    Hero.create({
        name: 'Covid Ninja',
        attack: 30,
        health: 4
    });

    Hero.create({
        name: 'Covid Mage',
        attack: 40,
        health: 5
    });

    Hero.create({
        name: 'Covid Warlock',
        attack: 30,
        health: 6
    });

    Hero.sync();
    
    return Hero;

};