module.exports = function(sequelize, DataTypes) {

    const Enemy = sequelize.define("Enemy", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
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
        id: 1,
        name: 'Murder Hornet',
        attack: 2,
        health: 14
    });

    Enemy.create({
        id: 2,
        name: 'Ground Zero Bat',
        attack: 2,
        health: 16
    });

    Enemy.create({
        id: 3,
        name: 'Covid Dragon',
        attack: 2,
        health: 25
    });

    Enemy.sync();
    
    return Enemy;

};