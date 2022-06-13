import * as PIXI from 'pixi.js'
import { Game } from '../../game'
import { Pot } from "../inGameElements/pot"
import { Speer } from "../inGameElements/speer"


export class Menu extends PIXI.Sprite {
    pot: Pot
    speer: Speer
    constructor(texture: PIXI.Texture, height: number, width: number) {
        super(texture)
        this.scale.set(0.5)
        this.anchor.set(0.5)
        this.x = width / 2
        this.y = height / 2
        this.interactive = true
        this.alpha = 0
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
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
}