import * as PIXI from "pixi.js";

export class Button extends PIXI.Sprite
{

    constructor(sprite:PIXI.Texture, x:number, y:number, lengte: number, breedte: number) {
        super();
        this.texture = sprite;
        this.interactive = false;
        this.buttonMode = true;
        this.on('pointerdown', () => this.action());
        window.addEventListener("keydown",(e:KeyboardEvent)=>this.onKeyDown(e))
        this.x = x
        this.y = y
        this.height = lengte
        this.width = breedte
        // this.alpha = 0;
    }

    action()
    {
        //code here
    }
    onKeyDown(e:KeyboardEvent):any
    {
        if (this.alpha != 0) {
            switch (e.key.toUpperCase()) {
                case "I":
                    this.alpha = 0
                    this.interactive = false
            }
        } else {
            switch (e.key.toUpperCase()) {
                case "I":
                    this.alpha = 1
                    this.interactive = true
            }
        }
    }
}