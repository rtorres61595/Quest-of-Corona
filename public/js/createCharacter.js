  // Getting references to our form and input
  const characterSelected = '';
  const userId = '';

  signUpForm.on("submit", event => {
    event.preventDefault();
    const data = {
      userId: userId.text().trim(),
      characterSelected: characterSelected.text().trim()
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
      characterId: characterId
    })
      .then(() => {
       //Updates user with Path ID

      })
      .catch(err => {
        console.log(err);
      });
  }



