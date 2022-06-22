import {Button} from "./button";
import {Game} from "../../game";
import {App} from "../../app";
import * as PIXI from "pixi.js";

export class StopButton extends Button
{
    game:Game
    constructor(sprite:PIXI.Texture, x:number, y:number, lengte: number, breedte: number,game:Game) {
        super(sprite,x,y,lengte,breedte);
        this.game = game
    }
    action() {
      this.game.bgMusic.volume=0;
      for (let i = 0; i < document.getElementsByTagName('canvas').length; i++) {      
        document.getElementsByTagName('canvas')[i].remove();
      }
    } 
  }