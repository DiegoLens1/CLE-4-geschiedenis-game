import {Character} from "./character";
import * as PIXI from "pixi.js";

export class Ricky extends Character
{
    private _timeTravel: boolean = true;

    get timeTravel(): boolean {
        return this._timeTravel;
    }

    set timeTravel(timeTravel: boolean) {
        this._timeTravel = timeTravel;
    }

    constructor(sprite:PIXI.Texture) {
        super(sprite);2
        this.alpha = 1
        this.scale.x = 1
        this.scale.y = 1
        this.rotation = 0
    }
    timeTransition()
    {
        console.log("test transtition")
        if (this.timeTravel == true) {
            this.scale.x = this.scale.x - 0.001
            this.scale.y = this.scale.y - 0.001
            this.rotation  = this.rotation+ 0.1
            this.alpha  = this.alpha - 0.001
        }
    }

}