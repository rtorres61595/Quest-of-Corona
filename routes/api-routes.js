// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {

  //PUT to take damage
  app.put("/rpg-api/users/takeDamage", (req, res) => {

    db.Enemy.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
    
    
    //return report of who isDead
    //ex. { characterDead: true, enemyDead: false }

  });

  //PUT to attack
  app.put("/rpg-api/users/attack", (req, res) => {
    

    db.Path.update({
      attack: req.body.attack,
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
    //return report of who isDead
    //ex. { characterDead: true, enemyDead: false }

  });

  //PUT to block
  app.put("/rpg-api/users/block", (req, res) => {
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
    //return report of who isDead
    //ex. { characterDead: true, enemyDead: false }

  

  //PUT to heal
  app.put("/rpg-api/users/heal", (req, res) => {
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
  

  //POST to create RPG Character Path
  //Creates new path using character class as a template
  app.post("/rpg-api/createCharacter/", (req, res) => {

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
  app.get("/rpg-api/path/:id", (req, res) => {

  });

  //GETs user row
  app.get("/rpg-api/users/:id", (req, res) => {

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
  app.get("/rpg-api/badguys/:id", (req, res) => {

  });

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/rpg-api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/rpg-api/signup", (req, res) => {
    db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        //get id and return id
        res.json();
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

};
