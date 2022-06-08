import {Character} from "./character";
import * as PIXI from "pixi.js";

export class Ricky extends PIXI.Sprite
{

    constructor(sprite:PIXI.Texture) {
        super(sprite);
        
        this.scale.set(0.3)
    
    }
    walk(){
        this.x ++;
        
    }

}