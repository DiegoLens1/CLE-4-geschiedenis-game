import * as PIXI from "pixi.js";

export class Button extends PIXI.Sprite
{

    constructor(x:number, y:number) {
        super();
        this.interactive = true;
        this.buttonMode = true;
        this.on('pointerdown', () => this.action());
        this.x = x
        this.y = y
    }

    action()
    {
        //code here
    }
}