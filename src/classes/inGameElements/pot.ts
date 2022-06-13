import * as PIXI from "pixi.js"

export class Pot extends PIXI.Sprite {
    constructor(texture:PIXI.Texture){
        super(texture)
        this.scale.set(0.7)
        this.anchor.set(0.5)
        this.x = 170
        this.y = 195
        this.alpha = 0.2
        this.interactive = true
    }
    
    onClick(){
        this.alpha = 1
    }
}