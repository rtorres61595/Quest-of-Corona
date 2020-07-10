const attackBtn = $("#attack-enemy");
const defendBtn = $("#block");
const healBtn = $("#heal");
const nextLvlBtn = $("#next-lvl-btn");

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


attackBtn.on("click", event => {

    //Subtracts attack pts of character from enemy HP
  

  
      //return report of who isDead and how much enemy HP is left
      //ex. { characterDead: true, enemyDead: false, enemyHP: 30 }

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

