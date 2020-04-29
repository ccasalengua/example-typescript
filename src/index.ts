import { Game } from "./game.js";

let game;

window.onload = () => { 
    game = new Game();
    game.start(); 
};