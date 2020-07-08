const userName = ''; // saved to session

//contains all dialogue text blocks in order
const plotArr = [{
    text: `It was with hardened hearts that your family bid you farewell. “Take care, ${userName}. Be safe.” The smoky haze of the morning sun illuminates the forest floor before you. With a deep breath, you see a clear path. Your hometown has been ravaged by an invisible enemy, a power which emanates from the belly of a crowned dragon. You had said your goodbyes and left for battle, but each step away from your home filled your chest with growing dread and anxiety. As you walk, the snapping of foliage awakens the inhabitants of this uncharted territory. You feel a low rumbling beneath your feet as you start to run away from its perpetrator. The loud buzzing is followed by the heavy thump of a large body bumping into you, knocking you off your feet. As you raise your gaze from the forest floor, you see-`, 
    battleIsNext: true
}];

let plotIndex = 0;

//save index of Plot in session when Plot.handlebars loads

//If next button is pressed, move onto next Plot Point and increment plotIndex/save to session.

//If battleIsNext == true, show Battle button and redirect to battle.handlebars

//If enemy is dead, show next button 