module.exports = function(sequelize, DataTypes) {

    const Enemy = sequelize.define("Enemy", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        attack: {
            type: DataTypes.DOUBLE
        },
        health: {
            type: DataTypes.DOUBLE
        },
        is_grunt: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        is_boss: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    Enemy.create({
        name: 'Covid Grunt',
        attack: 1,
        health: 10,
        defaultValue: false
    });

    Enemy.create({
        name: 'Covid Monster',
        attack: 1,
        health: 10,
        defaultValue: false
    });

    Enemy.create({
        name: 'Covid Slime',
        attack: 1,
        health: 10,
        defaultValue: false
    });

    Enemy.create({
        name: 'Murder Hornet',
        attack: 2,
        health: 14,
        defaultValue: false
    });

    Enemy.create({
        name: 'Ground Zero Bat',
        attack: 2,
        health: 16,
        defaultValue: false
    });

    Enemy.create({
        name: 'Covid Dragon',
        attack: 2,
        health: 25,
        defaultValue: false
    });


    Enemy.sync();
    
    return Enemy;



};