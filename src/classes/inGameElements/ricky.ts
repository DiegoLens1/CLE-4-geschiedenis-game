import { Character } from "./character";
import { Game } from "../../game";
import * as PIXI from "pixi.js";
import { Application } from "pixi.js";
import burningImage from "../../images/burning.png"

export class Ricky extends PIXI.Sprite
{
    game:Game
    private _timeTravel: boolean = false;

    get timeTravel(): boolean {
        return this._timeTravel;
    }

    set timeTravel(timeTravel: boolean) {
        this._timeTravel = timeTravel;
    }

    constructor(sprite:PIXI.Texture, game:Game) {
        super(sprite);
        this.game = game

        this.scale.set(0.4)
        this.y = 110;
        this.x = 10;
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
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

    onKeyDown(e:KeyboardEvent){
        switch (e.key.toUpperCase()) {
            case "K":
                console.log("test")
                this.game.boer1.destroy()
        }
    }
}