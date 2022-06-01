import * as PIXI from "pixi.js"

export class Character extends PIXI.Sprite
{
    with: number
    spritesheet: string[]
    SpriteState: string
    colour: string
    screenApearence: number
    sprite:PIXI.Texture

    constructor(sprite:PIXI.Texture){
        super(sprite)
        this.sprite = sprite

        this.scale.set(0.5)
        this.x = 500
        this.y = 50
    }
}