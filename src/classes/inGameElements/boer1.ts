import {Character} from "./character";
import * as PIXI from "pixi.js";
import startImage from "./images/start.jpg"

export class Boer1 extends PIXI.Sprite
{

    constructor(sprite:PIXI.Texture) {
        super(sprite);

        this.interactive = true; 
        this.buttonMode = true;
        
    }
    onClick(){
        console.log('yoo')

    }

}