import * as PIXI from 'pixi.js'
import {Game} from '../../game'
import {InventoryItem} from "../inGameElements/inventoryItem"
import {Speer} from "../inGameElements/speer"
import {StopButton} from "./stopButton";
import { camera } from "./camera";
import { Mute } from './mute';



export class Menu extends PIXI.Sprite {
    pot: InventoryItem
    speer: InventoryItem
    pixi: PIXI.Application
    stopButton: StopButton
    camera: camera
    muteButton: Mute
    game:Game

    constructor(pixi: PIXI.Application, texture: PIXI.Texture, height: number, width: number, game:Game) {
        super(texture)
        this.pixi = pixi
        this.game = game
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
        this.stopButton = new StopButton(this.pixi.loader.resources["stopButton"].texture!,416,-343,50,212)
        this.camera = new camera(this.pixi.loader.resources["camera"].texture!,-153,-418,120,282, this.pixi, this)
        this.muteButton = new Mute(this.pixi.loader.resources["unmuteTexture"].texture!, this.pixi.loader.resources["muteTexture"].texture!, -750,-420,100,100, this.game.bgMusic)
        this.speer.angle = 10;
        this.pot.alpha = 0.2
        this.speer.alpha = 0.2
        // this.pixi.stage.addChild(this.pot)
        this.addChild(this.pot)
        this.addChild(this.speer)
        this.addChild(this.stopButton)
        this.addChild(this.camera)
        this.addChild(this.muteButton)
    }


    onKeyDown(e: KeyboardEvent): any {
        if (this.alpha != 0) {
            switch (e.key.toUpperCase()) {
                case "I":
                   this.deactivateMenu() 
            }
        } else {
            switch (e.key.toUpperCase()) {
                case "I":
                    this.activateMenu()
            }
        }
    }

    collect(name: string) {
        console.log("name")
        if (name == "pot") {
            // console.log('pot aan ge klikt')
            this.pot.alpha = 1
        }
        if (name == "speer")
        {
            // console.log('speer aan ge klikt')
            this.speer.alpha = 1
        }
    }

    public activateMenu() {
        this.alpha = 1
        this.interactive = true
    }

    public deactivateMenu() {
        this.alpha = 0
        this.interactive = false
    }


}