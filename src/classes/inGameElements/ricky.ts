import {Character} from "./character";
import * as PIXI from "pixi.js";

export class Ricky extends Character
{
    private _timeTravel: boolean = false;

    get timeTravel(): boolean {
        return this._timeTravel;
    }

    set timeTravel(timeTravel: boolean) {
        this._timeTravel = timeTravel;
    }

    constructor(sprite:PIXI.Texture) {
        super(sprite);2
    }
    timeTransition()
    {
        if (this.timeTravel == true) {
            this.scale.x - 0.1
            this.scale.y - 0.1
        }
    }

}