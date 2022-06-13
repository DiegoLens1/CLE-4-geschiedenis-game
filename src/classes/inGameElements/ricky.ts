import {Character} from "./character";
import * as PIXI from "pixi.js";

export class Ricky extends PIXI.Sprite
{
    private _timeTravel: boolean = false;

    get timeTravel(): boolean {
        return this._timeTravel;
    }

    set timeTravel(timeTravel: boolean) {
        this._timeTravel = timeTravel;
    }

    constructor(sprite:PIXI.Texture) {
        super(sprite);

        this.scale.set(0.4)
        this.y = 110;
        this.x = 10;

    }
    timeTransition()
    {
        if (this.timeTravel == true) {
            this.scale.x - 0.1
            this.scale.y - 0.1
        }
    }

    walk(){
        this.x ++;

    }

}