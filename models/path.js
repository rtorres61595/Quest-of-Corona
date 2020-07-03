module.exports = function(sequelize, DataTypes) {

    const Path = sequelize.define("Path", {
        character_class_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        attack: {
            type: DataTypes.DOUBLE
        },
        health: {
            type: DataTypes.DOUBLE
        },
        special_skill1: {
           type: DataTypes.STRING
        },
        special_skill2: {
            type: DataTypes.STRING
        },
        level: {
            type: DataTypes.INTEGER
        },
        is_complete: {
            type: DataTypes.BOOLEAN
        },
        is_dead: {
            type: DataTypes.BOOLEAN
        },
        Enemy_dead: {
            type: DataTypes.BOOLEAN
        },
        currentPath: {
            type: DataTypes.STRING
        },
        block: {
            type: DataTypes.BOOLEAN
        },
        heal: {
            type: DataTypes.BOOLEAN
        }
    });

    return Path;

};