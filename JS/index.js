
import { GamesFunction } from "./games.js"; 

window.onload = () => {
  const gameApp = new GamesFunction();
  gameApp.clickOfTheGame(); 
  gameApp.clickCloseBTN();  
};