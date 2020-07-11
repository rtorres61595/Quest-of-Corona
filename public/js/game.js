const attackBtn = $("#attack-enemy");
const defendBtn = $("#block");
const healBtn = $("#heal");
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

      //redirect to end.html in a minute
      
    } else if(report.enemyDead) {
      //show next button

    } else {
      //update enemy HP

      //trigger enemy attack

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

      //get characterHP to send in request as characterHP

      //do post to /rpg-api/users/takeDamage and it should return new Character HP
  
      //return report of who isDead and how much character HP is left
      //ex. { characterDead: true, enemyDead: false, characterHP: 30 }

}

