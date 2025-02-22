/*
color : red
name : npc
xposition : 200
yposition : 75
shape : rectangle
*/

/* Create the classes or skins 
Like if the player class is a circle then we return a rectangular circle */



function Characters () {
    id = 0;
    const color = "red";
    const name = "npc";
    let xposition = 200;
    let yposition = 75;
    let shape = "rectangle";
    return { id, xposition, yposition};
  }
    
const josh = Characters();
 