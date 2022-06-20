import * as PIXI from "pixi.js";
import { Button } from "./button";

export class Mute extends Button {
    bgMusic:any
    constructor(sprite:PIXI.Texture, x:number, y:number, lengte: number, breedte: number, bgMusic:any){
        super(sprite, x, y, lengte, breedte)
        this.bgMusic = bgMusic
    }

    action(){
        this.bgMusic.Play()
    }
}