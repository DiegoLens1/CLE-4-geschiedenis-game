import * as PIXI from 'pixi.js'

export class Textbox extends PIXI.Sprite{
    constructor(texture:PIXI.Texture){
        super(texture)
        this.scale.set(0.45)
        this.y = window.innerHeight - 450
        this.x = -5
    }
}