import * as PIXI from "pixi.js";
import { Button } from "./button";

export class Mute extends Button {
    bgMusic:any
    sprite:PIXI.Texture
    sprite2:PIXI.Texture
    constructor(sprite:PIXI.Texture, sprite2:PIXI.Texture, x:number, y:number, lengte: number, breedte: number, bgMusic:any){
        super(sprite, x, y, lengte, breedte)
        this.sprite = sprite
        this.sprite2 = sprite2
        this.bgMusic = bgMusic
        this.alpha = 1
    }

    action(){
        if(this.bgMusic.volume > 0){
            this.bgMusic.volume = 0
            this.texture = this.sprite
        } else {
            this.bgMusic.volume = 1
            this.texture = this.sprite2
        }
    }
}