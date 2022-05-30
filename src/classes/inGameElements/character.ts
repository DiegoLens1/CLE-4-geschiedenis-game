import * as PIXI from "pixi.js"

export class Character extends PIXI.Sprite
{
    with: number
    spritesheet: string[]
    SpriteState: string
    colour: string
    screenApearence: number

    constructor(texture:PIXI.Texture, boer1:PIXI.Texture){
        super(texture)

        this.scale.set(0.5)
        this.x = 500
        this.y = 50
    }
}