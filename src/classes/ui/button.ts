import * as PIXI from "pixi.js";

export class Button extends PIXI.Sprite
{

    constructor(sprite:PIXI.Texture, x:number, y:number, lengte: number, breedte: number) {
        super();
        this.texture = sprite;
        this.interactive = true;
        this.buttonMode = true;
        this.on('pointerdown', () => this.action());
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
}