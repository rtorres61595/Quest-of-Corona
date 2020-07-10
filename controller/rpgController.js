// Requiring our models and passport as we've configured it
const express = require("express");

const router = express.Router();

const db = require("../models");
const passport = require("../config/passport");

// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

//API ROUTES

  //PUT to take damage
  router.put("/rpg-api/users/takeDamage", (req, res) => {
    //Subtracts attacks pts of enemy from character HP


  });

  //PUT to attack
  router.put("/rpg-api/users/attack", (req, res) => {
  //Subtracts attack pts of character from enemy HP

    //return report of who isDead
    //ex. { characterDead: true, enemyDead: false }

  });

  //PUT to block
  router.put("/rpg-api/users/block", (req, res) => {
    db.Path.update({
      block: true
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbpath) {
        if (dbpath.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
    });


  //PUT to heal
  router.put("/rpg-api/users/heal", (req, res) => {
    db.Path.update({
      heal: true
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbpath) {
        if (dbpath.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
    });

  //PUT to level up user
  router.put("/rpg-api/levelUp", (req, res) => {

    db.Path.findOne({
      where: {
        id: req.body.id
      }
    }).then(foundPath => {

      foundPath.levelUp(req.body.specialSkill);

    });
  
  });
  
  //POST to create RPG Character Path
  //Creates new path using character class as a template
  router.post("/rpg-api/createCharacter/", (req, res) => {

    //finding attack and health stats for this character class
    db.Hero.findOne({
      where: {
        id: req.body.characterClassId
      }
    }).then(HeroClass => {

        //creates path
        db.Path.create({
          character_class_id: req.body.characterClassId,
          user_id: req.body.userId,
          attack: HeroClass.attack,
          health: HeroClass.health
        })
        .then((dbPath) => {
          //get id and return id
          res.json({pathId: dbPath.id});
          
        })
        .catch(err => {
          res.status(401).json(err);
        });


      // If none of the above, return the user
      return done(null, HeroClass);
    });

  });

  //GET character stats and path
  //use user id to get path
  router.get("/rpg-api/path/:id", (req, res) => {

    if (!req.params.id) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user data
      res.json({});
    }

  });

  //GETs user row
  router.get("/rpg-api/users/:id", (req, res) => {

    if (!req.params.id) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user data
      res.json({
        email: req.user.email,
        id: req.user.id,
        path1: user.path_id1,
        path2: user.path_id2,
        path3: user.path_id3,
        path4: user.path_id4
      });
    }

  });

  //GET enemy stats
  router.get("/rpg-api/badguys/:id", (req, res) => {

  });

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  router.post("/rpg-api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  router.post("/rpg-api/signup", (req, res) => {
    db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then((dbUser) => {
        //get id and return id
        console.log("id - "+dbUser.id);
        res.redirect('/welcome');
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  //HTML ROUTES
  router.get("/", (req, res) => {
    // send the html file of index.html
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  router.get("/end", (req, res) => {
    //send the end.html file
    res.sendFile(path.join(__dirname, "../public/end.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  router.get("/welcome", isAuthenticated, (req, res) => {
    res.render("welcome", { id: req.user.id, username: req.user.username });
  });

module.exports = router
