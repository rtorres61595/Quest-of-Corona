module.exports = function(sequelize, DataTypes) {

    const Path = sequelize.define("Path", {
        characterClassId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        attack: {
            type: DataTypes.DOUBLE
        },
        health: {
            type: DataTypes.DOUBLE
        },
        specialSkill1: {
           type: DataTypes.STRING
        },
        specialSkill2: {
            type: DataTypes.STRING
        },
        level: {
            type: DataTypes.INTEGER
        },
        isComplete: {
            type: DataTypes.BOOLEAN
        },
        isDead: {
            type: DataTypes.BOOLEAN
        },
        isEnemyDead: {
            type: DataTypes.BOOLEAN
        },
        currentPath: {
            type: DataTypes.STRING
        },
        blocked: {
            type: DataTypes.BOOLEAN
        },
        heals: {
            type: DataTypes.BOOLEAN
        }
    });

    return Path;

};