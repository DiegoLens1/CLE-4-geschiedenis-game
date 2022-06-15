import * as PIXI from 'pixi.js'
import {Game} from '../../game'
import {InventoryItem} from "../inGameElements/inventoryItem"
import {Speer} from "../inGameElements/speer"


export class Menu extends PIXI.Sprite {
    pot: InventoryItem
    speer: InventoryItem
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
        this.pot = new InventoryItem(this.pixi.loader.resources["potTexture"].texture!, -450, -50, 1.4)
        this.speer = new InventoryItem(this.pixi.loader.resources["speerTexture"].texture!,-180,-60,0.55)
        this.speer.angle = 10;
        this.pot.alpha = 0.2
        this.speer.alpha = 0.2
        // this.pixi.stage.addChild(this.pot)
        this.addChild(this.pot)
        this.addChild(this.speer)
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
        if (name == "speer")
        {
            console.log('speer aan ge klikt')
            this.speer.alpha = 1
        }
    }


}