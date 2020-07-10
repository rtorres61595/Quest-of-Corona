const userName = ''; // saved to session

//contains all dialogue text blocks in order
const plotArr = [
    {
        text: `It was with hardened hearts that your family bid you farewell. “Take care, ${userName}. Be safe.” The smoky haze of the morning sun illuminates the forest floor before you. With a deep breath, you see a clear path. Your hometown has been ravaged by an invisible enemy, a power which emanates from the belly of a crowned dragon. You had said your goodbyes and left for battle, but each step away from your home filled your chest with growing dread and anxiety. As you walk, the snapping of foliage awakens the inhabitants of this uncharted territory. You feel a low rumbling beneath your feet as you start to run away from its perpetrator. The loud buzzing is followed by the heavy thump of a large body bumping into you, knocking you off your feet. As you raise your gaze from the forest floor, you see-`,
        battleIsNext: true
    },
    {
        text: `You raise your fist, victorious as the giant hornet lay lifeless before you.Testing fate, you come closer to it, kicking it to it’s back with your foot.You find a dissipating glow coming from its torso, your suspicions that it was connected to the crowned dragon proven correct.With a heavy heart, you realize that the power coming from its cursed gem was stronger than you originally thought.Your hometown had been spared so far because of its distance from the beast, but who’s to say it won’t come closer? With growing resilience, you stand tall before your former enemy and turn your back to it, walking towards the mouth of Cave Covid.With the sky darkening to dusk, you hear a fluttering of wings coming from the roof of the cave.Before you can raise your eyes to the source, a large creature lands before you.With horror, you see-`,
        battleIsNext: true
    },
    {
        text: `There’s a crowd of people waiting at the entrance of your hometown as they see your form walking from the distance. Hushed whispers turn to thunderous roars and applause as recognition falls on their faces. Covered in your bloodied clothing, you carry back the head of Corona.`,
        battleIsNext:false
    }
];

let plotIndex = 0;

//save index of Plot in session when Plot.handlebars loads

//If next button is pressed, move onto next Plot Point and increment plotIndex/save to session.

//If battleIsNext == true, show Battle button and redirect to battle.handlebars

//If enemy is dead, show next button git@github.com:AbbyNeko/Quest-of-Corona.git