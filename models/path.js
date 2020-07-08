const db = require("../models");

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
        full_health: {
            type: DataTypes.DOUBLE
        },
        special_skill1: {
           type: DataTypes.STRING
        },
        special_skill2: {
            type: DataTypes.STRING
        },
        level: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        is_complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        is_dead: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        Enemy_dead: {
            type: DataTypes.BOOLEAN, 
            defaultValue: false
        },
        currentPath: {
            type: DataTypes.STRING,
            defaultValue: 'forest'
        },
        block: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        heal: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    //resets health, heal and block when retrying path
    Path.prototype.reset = function() {

        this.is_dead = false;
        this.heal = false;
        this.block = false;
        this.health = this.full_health;

    };

    //decreases Health based on damage taken
    //returns new HP and if character isDead
    Path.prototype.takeDamage = function(damagePts) {

        this.health -= damagePts;
        
        //set is_dead to true if health reaches 0 or below
        if(this.health <= 0) {
            this.is_dead = true;
            return {isDead: true, newHP: 0};
        } else {
            return {isDead: false, newHP: this.health};
        }

    };
  
    Path.prototype.levelUp = function() {
        //Increases stats and resets Heals
        this.heal = false;
        this.block = false;

        this.attack += 5;
        this.health += 5;
        this.full_health += 5;

    };

    return Path;

};