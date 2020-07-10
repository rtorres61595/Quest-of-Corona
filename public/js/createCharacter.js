  // Getting references to our form and input
  const characterSelected = $("input[name='character-class']:checked");
  const userId = $("#startBtn").attr("userId");
  const createCharForm = $("form.create-character");

  createCharForm.on("submit", event => {
    event.preventDefault();
    alert(`user id - ${userId}`);
    alert(`character selected - ${characterSelected.val()}`)

    const data = {
      userId: userId.trim(),
      characterClassId: characterSelected.val().trim()
    };

    if (!data.userId || !data.characterSelected) {
      return;
    }
    
    createCharacter(userId, characterId);

  });

//Creates Character Path, updates user and sends back path ID
function createCharacter(userId, characterId) {
    $.post("/rpg-api/createCharacter", {
      userId: userId,
      characterClassId: characterId
    })
      .then(() => {
        window.location = "/plot/"+userId;   
      })
      .catch(err => {
        console.log(err);
      });
  }



