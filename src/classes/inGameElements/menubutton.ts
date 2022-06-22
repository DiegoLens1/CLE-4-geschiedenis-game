//import pixi
import * as PIXI from 'pixi.js'

//import classes
import {Game} from '../../game'
import { App } from '../../app'
import { Button } from '../ui/button'

//import images
import menuIMG from "../../images/menubutton.png"


export class menuButton extends Button
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
      new App();
    }
}
