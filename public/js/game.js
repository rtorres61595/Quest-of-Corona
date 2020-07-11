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

      let fullHealth = $("#your-hp").attr("full_health");

      $("#your-hp").attr("current_health", fullHealth);

    //0 left on heal
    $("#showHeal").text("0 left");

    //show message
    $("#battleText").text("You healed! You are back to "+fullHealth+" health.");
      autoEnemyTurn();

});

//uses up block
defendBtn.on("click", event => {
  
    event.preventDefault();

    if( $("#showBlock").text() === '0 left') {    
      $("#battleText").text("You cannot block again!");
      autoEnemyTurn();
    }

    $.ajax({
        method: "PUT",
        url: "/rpg-api/users/block",
        data: {id: pathId}
      })
        .catch(err => {
          console.log(err);
        });

    //0 left on block
    $("#showBlock").text("0 left");

    //show message
    $("#battleText").text("You blocked!");

    autoEnemyTurn();

});

//On click of attack button, lower enemy HP and show message as appropriate
attackBtn.on("click", event => {

    event.preventDefault();
    let report = attack();
    console.log("report - "+JSON.stringify(report));

    if(report.characterDead) {
      //show message that you lost
       $("#battleText").text("You're positive for COVID. Try again.")
      //redirect to end.html in a minute
      setTimeout(function(){window.location = "/end"}, 10000);
    } else if(report.enemyDead) {

      //show message
      $("#battleText").text("The Enemy is dead! Huzzah!")

      //show next button
      $("#plot-progress-btn").show();
      
    } else {  
      
      $("#battleText").text(`You attacked!`);

      autoEnemyTurn();            

    }

});

function attack() {

  //Get Attack
  let attackPts = $("#showAttack").text();
  
  //Get Enemy HP
  let enemyHP = $("#boss-hp").attr("current_health");

  //get full health of enemy
  let fullHealth = $("#boss-hp").attr("full_health");
  
  //Subtracts attack pts of character from enemy HP
  let newEnemyHP = parseFloat(enemyHP) - parseFloat(attackPts);

  //update enemy hp
  $("#boss-hp").attr("current_health", newEnemyHP);
  
  //return report of who isDead and how much enemy HP is left
  //ex. { characterDead: true, enemyDead: false, enemyHP: 30 }
  if(newEnemyHP <= 0) {
    return {characterDead: false, enemyDead: true, enemyHP: newEnemyHP}; 
  } 

    let healthPerc = newEnemyHP/parseFloat(fullHealth);

    var progress = document.getElementById("boss-hp");
    RPGUI.set_value(progress, healthPerc);

    return {characterDead: false, enemyDead: false, enemyHP: newEnemyHP}; 
  

}

function enemysTurn() {

      //get Enemy class ID to send in request as enemyId
      const enemyId = $("#enemyId").text();
      const enemyAttackPts = $("#boss-attack").text();

      //get characterHP to send in request as characterHP
      const characterHp = $("#your-hp").attr("current_health");

      //calculate and return new Character HP
      let newCharacterHP = parseFloat(characterHp) - parseFloat(enemyAttackPts);

      $("#your-hp").attr("current_health", newCharacterHP);
 
      //change characterHp on the screen to newCharacterHP
      //return report of who isDead and how much character HP is left
      //ex. { characterDead: true, enemyDead: false, characterHP: 30 }
      if(newCharacterHP <= 0){
        return { characterDead: true, enemyDead: false, characterHP: newCharacterHP}
      } 
      else 
      {
        return { characterDead: false, enemyDead: false, characterHP: newCharacterHP}
      }
   
    }


    function autoEnemyTurn() {

      setTimeout(function() { 
        
        $("#battleText").text(`Enemy attacked!`); 
  
        //trigger enemy attack
        let enemyReport  = enemysTurn();
        console.log("enemy report - "+JSON.stringify(enemyReport));
  
        if(enemyReport.characterDead) {
            //show message that you lost
            $("#battleText").text("You're positive for COVID. Try again.")
            //redirect to end.html in a minute
            setTimeout(function(){window.location = "/end"}, 10000);
        } else  {
          $("#battleText").text(`Enemy attacked! You took damage! You are down to ${enemyReport.characterHP} health. It's your move.`);
        }
    
      }, 2000);

    }

tryagainBtn.on("click", function(res) {
  res.redirect("/welcome");
});

//if end of path, do POST request to level up and redirect to plot
$("#plot-progress-btn").on("click", function(event) {

  event.preventDefault();

  $.ajax({
      method: "PUT",
      url: "/rpg-api/levelUp",
      data: {id: pathId}
    }).then(() => {

      console.log('finished level up');
      window.location = "/plot/" + pathId;

    })
    .catch(err => {
      console.log(err);
    });

});