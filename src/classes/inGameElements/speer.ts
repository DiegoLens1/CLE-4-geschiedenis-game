import * as PIXI from "pixi.js"

export class Speer extends PIXI.Sprite {
    constructor(texture:PIXI.Texture){
        super(texture)
        this.scale.set(0.25)
        this.angle = 10
        this.anchor.set(0.5)
        this.x = 305
        this.y = 195
        this.alpha = 0.2
        this.interactive = true
    }

    onClick(){
        this.alpha = 1
    }
}