import {Character} from "./character";
import * as PIXI from "pixi.js";

export class Ricky extends PIXI.Sprite
{

    constructor(sprite:PIXI.Texture) {
        super(sprite);
        
        this.scale.set(0.4)
        this.y = 110;
        this.x = 10;
    
    }
    walk(){
        this.x ++;
        
    }

}