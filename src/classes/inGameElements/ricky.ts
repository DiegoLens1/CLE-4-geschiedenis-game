import { Character } from "./character";
import { Game } from "../../game";
import * as PIXI from "pixi.js";
import { Application } from "pixi.js";

export class Ricky extends PIXI.Sprite
{
    game:Game
    pixi:PIXI.Application
    loader:any
    burningImage:PIXI.Texture
    private _timeTravel: boolean = false;

    get timeTravel(): boolean {
        return this._timeTravel;
    }

    set timeTravel(timeTravel: boolean) {
        this._timeTravel = timeTravel;
    }

    constructor(sprite:PIXI.Texture, game:Game, pixi:PIXI.Application, burningImage:PIXI.Texture) {
        super(sprite);
        this.game = game
        this.burningImage = burningImage
        this.pixi = pixi
        this.loader = new PIXI.Loader()

        this.scale.set(0.4)
        this.y = 110;
        this.x = 10;
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
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

    private speed = 10;
    onKeyUp(e: KeyboardEvent): any {
        // console.log('keyup');
    }


    onKeyDown(e:KeyboardEvent){
        switch (e.key.toUpperCase()) {
            case "K":
                this.game.boer1.destroy()
                let burn = new PIXI.Sprite(this.burningImage)
                burn.scale.set(0.42)
                this.pixi.stage.addChild(burn)


        }
    }

    // onKeyDown(e: KeyboardEvent): void {
    //     switch (e.key.toUpperCase()) {
    //         case " ":
    //             this.shoot()
    //             break;
    //         case "A":
    //         case "ARROWLEFT":
    //             this.xspeed = -4
    //             break
    //         case "D":
    //         case "ARROWRIGHT":
    //             this.xspeed = 4
    //             break
    //         case "W":
    //         case "ARROWUP":
    //             this.yspeed = -4
    //             break
    //         case "S":
    //         case "ARROWDOWN":
    //             this.yspeed = 4
    //             break
    //     }
    // }

    // private onKeyUp(e: KeyboardEvent): void {
    //     switch (e.key.toUpperCase()) {
    //         case " ":
    //             break;
    //         case "A":
    //         case "D":
    //         case "ARROWLEFT":
    //         case "ARROWRIGHT":
    //             this.xspeed = 0
    //             break
    //         case "W":
    //         case "S":
    //         case "ARROWUP":
    //         case "ARROWDOWN":
    //             this.yspeed = 0
    //             break
    //     }
    // }
}