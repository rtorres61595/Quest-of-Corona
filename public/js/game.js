const attackBtn = $("#attackBtn");
const defendBtn = $("#blockBtn");
const healBtn = $("#healBtn");
const nextLvlBtn = $("#next-lvl-btn");
const tryagainBtn = $("#tryagaintBtn")

const userId = localStorage.getItem("userId");
const pathId = localStorage.getItem("pathId");

//uses up heal
healBtn.on("click", event => {

    event.preventDefault();
    $.ajax({
        method: "PUT",
        url: "/rpg-api/users/heal",
        data: {id: pathId}
      })
        .catch(err => {
          console.log(err);
        });

});

//uses up block
defendBtn.on("click", event => {

    event.preventDefault();
    $.ajax({
        method: "PUT",
        url: "/rpg-api/users/block",
        data: {id: pathId}
      })
        .catch(err => {
          console.log(err);
        });

});

//On click of attack button, lower enemy HP and show message as appropriate
attackBtn.on("click", event => {

    event.preventDefault();
    let report = attack();

    if(report.characterDead) {
      //show message that you lost
       $("#plottext").text("you're positive for covid")
      //redirect to end.html in a minute
      setTimeout(function(){window.location = "/end"}, 10000);
    } else if(report.enemyDead) {
      //show next button
      const newBtn = $("button")
      newBtn.addClass("progress_plot_btn rpgui-button")
      newBtn.text("Next");
      $("#actionDiv").append(newBtn);

      newBtn.on("click", function(event) {

        event.preventDefault();
        $.ajax({
            method: "PUT",
            url: "/rpg-api/levelUp",
            data: {id: pathId}
          })
            .catch(err => {
              console.log(err);
            
            }).then(function(){
                window.location = "/path/" + pathId
            })
    });
      
    } else {
      //update enemy HP
      let newEnemyHP = parseFloat(req.body.EnemyHP) - parseFloat(characterId.attack);

        //return new Character HP
        res.json({EnemyHP: newEnemyHP});

      //trigger enemy attack
      return attack()
    }

});

//if end of path, do POST request to level up and redirect to choice of special skills or next level
nextLvlBtn.on("click", event => {

  event.preventDefault();
  $.ajax({
      method: "PUT",
      url: "/rpg-api/levelUp",
      data: {id: pathId}
    })
      .catch(err => {
        console.log(err);
      });

});


function attack() {

  //Get Attack
  
  //Get Enemy HP
  
  //Subtracts attack pts of character from enemy HP
  
  
      //return report of who isDead and how much enemy HP is left
      //ex. { characterDead: true, enemyDead: false, enemyHP: 30 }

}

function enemysTurn() {

      //get Enemy class ID to send in request as enemyId
      const enemyId = ""
      const characterHp = ""
      //get characterHP to send in request as characterHP

      //do post to /rpg-api/users/takeDamage and it should return new Character HP
        event.preventDefault();
        $.ajax({
            method: "POST",
            url: "/rpg-api/users/takeDamage",
            data: {enemyId: enemyId,
            characterHP: characterHp}
          }).then(function(characterObj){
              //change characterHp on the screen to .charecterObj.characterHP
              //return report of who isDead and how much character HP is left
              //ex. { characterDead: true, enemyDead: false, characterHP: 30 }
              if(characterObj.characterHP <= 0){
                return { characterDead: true, enemyDead: false, characterHP: characterObj.characterHP}
              } 
              else 
              {
                return { characterDead: true, enemyDead: false, characterHP: characterObj.characterHP}
              }
          })
            .catch(err => {
              console.log(err);
            });
    }

tryagainBtn.on("click", function(res) {
  res.redirect("/welcome");
})