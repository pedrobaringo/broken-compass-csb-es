import {BCdice} from './die.js';

Hooks.once("init", async function () {
    CONFIG.Dice.terms["h"] = BCdice;
});

Hooks.once('diceSoNiceReady', (dice3d) => {
dice3d.addSystem({id:"brokencompassblackDice",name:"Broken Compass Black Dice"},"default");
    dice3d.addDicePreset({
      type:"dh",
      labels:[
        'modules/broken-compass-csb-es/assets/Cara1.webp', 
        'modules/broken-compass-csb-es/assets/Cara2.webp', 
        'modules/broken-compass-csb-es/assets/Cara3.webp', 
        'modules/broken-compass-csb-es/assets/Cara4.webp',
        'modules/broken-compass-csb-es/assets/Cara5.webp', 
        'modules/broken-compass-csb-es/assets/Cara6.webp'
      ],
      bumpMaps:[
        'modules/broken-compass-csb-es/assets/Cara1_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara2_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara3_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara4_Bump.webp',
        'modules/broken-compass-csb-es/assets/Cara5_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara6_Bump.webp'
      ],
	  colorset:"blackBroken",
      system: "brokencompassblackDice"
    });
	dice3d.addDicePreset({
      type:"d6",
      labels:[
        'modules/broken-compass-csb-es/assets/Cara1.webp', 
        'modules/broken-compass-csb-es/assets/Cara2.webp', 
        'modules/broken-compass-csb-es/assets/Cara3.webp', 
        'modules/broken-compass-csb-es/assets/Cara4.webp',
        'modules/broken-compass-csb-es/assets/Cara5.webp', 
        'modules/broken-compass-csb-es/assets/Cara6.webp'
      ],
      bumpMaps:[
        'modules/broken-compass-csb-es/assets/Cara1_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara2_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara3_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara4_Bump.webp',
        'modules/broken-compass-csb-es/assets/Cara5_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara6_Bump.webp'
      ],
	  colorset:"blackBroken",
      system: "brokencompassblackDice"
    });
	dice3d.addColorset({
    name: 'blackBroken',
    description: 'Black',
    category: 'Household Dice',
    foreground: '#000000',
    background: '#000000',
    outline: 'black',
    texture: 'none',
    material: 'plastic'
});
dice3d.addSystem({id:"brokencompassyellowDice",name:"Broken Compass Yellow Dice"},"preferred");
    dice3d.addDicePreset({
      type:"dh",
      labels:[
        'modules/broken-compass-csb-es/assets/Cara1_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara2_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara3_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara4_Bump.webp',
        'modules/broken-compass-csb-es/assets/Cara5_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara6_Bump.webp'
      ],
      bumpMaps:[
        'modules/broken-compass-csb-es/assets/Cara1_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara2_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara3_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara4_Bump.webp',
        'modules/broken-compass-csb-es/assets/Cara5_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara6_Bump.webp'
      ],
	  colorset:"yellowBroken",
      system: "brokencompassyellowDice"
    });
	dice3d.addDicePreset({
      type:"d6",
      labels:[
        'modules/broken-compass-csb-es/assets/Cara1_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara2_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara3_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara4_Bump.webp',
        'modules/broken-compass-csb-es/assets/Cara5_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara6_Bump.webp'
      ],
      bumpMaps:[
        'modules/broken-compass-csb-es/assets/Cara1_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara2_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara3_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara4_Bump.webp',
        'modules/broken-compass-csb-es/assets/Cara5_Bump.webp', 
        'modules/broken-compass-csb-es/assets/Cara6_Bump.webp'
      ],
	  colorset:"yellowBroken",
      system: "brokencompassyellowDice"
    });
	dice3d.addColorset({
    name: 'yellowBroken',
    description: 'Yellow',
    category: 'Household Dice',
    foreground: '#CF9811',
    background: '#CF9811',
    outline: '#CF9811',
    texture: 'none',
    material: 'plastic'
});
});