import * as PIXI from "pixi.js"

export class Character extends PIXI.Sprite
{
    with: number
    spritesheet: string[]
    SpriteState: string
    colour: string
    screenApearence: number
    boer1:PIXI.Texture
    boer2:PIXI.Texture
    jager1:PIXI.Texture

    constructor(ricky:PIXI.Texture, boer1:PIXI.Texture, boer2:PIXI.Texture, jager1:PIXI.Texture){
        super(ricky)
        this.boer1 = boer1
        this.boer2 = boer2
        this.jager1 = jager1

        this.scale.set(0.5)
        this.x = 500
        this.y = 50
    }
}