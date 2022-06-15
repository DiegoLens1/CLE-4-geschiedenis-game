import * as PIXI from 'pixi.js'
import {Game} from '../../game'
import {Pot} from "../inGameElements/pot"
import {Speer} from "../inGameElements/speer"


export class Menu extends PIXI.Sprite {
    pot: Pot
    speer: Speer
    pixi: PIXI.Application

    constructor(pixi: PIXI.Application, texture: PIXI.Texture, height: number, width: number) {
        super(texture)
        this.pixi = pixi
        this.scale.set(0.5)
        this.anchor.set(0.5)
        this.x = width / 2
        this.y = height / 2
        this.interactive = false
        this.alpha = 0
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))

        this.createInventory()
    }

    private createInventory() {
        this.pot = new Pot(this.pixi.loader.resources["potTexture"].texture!, -450, -50, 1.4)
        this.pot.alpha = 0.2
        // this.pixi.stage.addChild(this.pot)
        this.addChild(this.pot)
    }


    onKeyDown(e: KeyboardEvent): any {
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

    collect(name: string) {
        console.log("name")
        if (name == "pot") {
            console.log('pot aan ge klikt')
            this.pot.alpha = 1
        }
    }


}