import {Character} from "./character";
import {Game} from "../../game";
import * as PIXI from "pixi.js";

export class Boer1 extends PIXI.Sprite
{
    game:Game
    loader: any;
    pixi:PIXI.Application;
    tekstbox1Image:PIXI.Texture

    constructor(sprite:PIXI.Texture, tekstbox1Image:PIXI.Texture, pixi: PIXI.Application) {
        super(sprite);

        this.tekstbox1Image = tekstbox1Image
        this.pixi = pixi
        this.interactive = true; 
        this.buttonMode = true;
        this.loader = new PIXI.Loader();
        
    }
    onClick(){
        console.log('yoo')

        let start = new PIXI.Sprite(this.tekstbox1Image);
        start.scale.set(1.35);
        start.anchor.set(0.5);
        start.x = 395;
        start.y = 225;
        
        this.pixi.stage.addChild(start);

    }

}