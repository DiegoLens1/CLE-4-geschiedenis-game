import * as PIXI from 'pixi.js'
import { Game } from '../../game'

export class Menu extends PIXI.Sprite{
    constructor(texture:PIXI.Texture, height:number, width:number){
        super(texture)
        this.scale.set(0.5)
        this.anchor.set(0.5)
        this.x = width / 2
        this.y = height / 2
        this.interactive = true
    }
}