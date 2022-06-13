import * as PIXI from 'pixi.js'
import fishImage from "./images/fish.png"
import waterImage from "./images/water.jpg"
import textboxImage from "./images/textbox.png"
import rickyImage from "./images/Ricky.png"
import boer1Image from "./images/boer1.png"
import boer2Image from "./images/boer2.png"
import jager1Image from "./images/Jager1.png"
import potImage from "./images/pot.png"
import speerImage from "./images/speer.png"
import tijdmachineImage from "./images/tijdmachine.png"
import { Textbox } from "./classes/ui/textbox"
import { Character } from "./classes/inGameElements/character"
import {Ricky} from "./classes/inGameElements/ricky";
import {Menu} from "./classes/ui/menu"
import {Pot} from "./classes/inGameElements/pot"
import {Speer} from "./classes/inGameElements/speer"
import backgroundTrack from "url:./music/backgroundaudio.mp3"  

let height = 450
let width = 800

export class Game {
    pixi: PIXI.Application
    textbox: Textbox
    charachters: Character[] = []
    ricky:Ricky
    menu:Menu
    pot:Pot
    speer:Speer

    constructor() {
        this.pixi = new PIXI.Application({ width: width, height: height })
        document.body.appendChild(this.pixi.view)

        this.pixi.loader
            .add("fishTexture", boer2Image)
            .add("waterTexture", waterImage)
            .add("textboxTexture", textboxImage)
            .add("rickyTexture", rickyImage)
            .add("boer1Texture", boer1Image)
            .add("boer2Texture", boer2Image)
            .add("jager1Texture", jager1Image)
            .add("potTexture", potImage)
            .add("speerTexture", speerImage)
            .add("tijdmachineTexture", tijdmachineImage)
            .add("bgMusic", backgroundTrack)
        this.pixi.loader.load(() => this.doneLoading())
    }

    doneLoading() {
        //make sure the bg track is loaded before anything else because browser delay
        let bgMusic = this.pixi.loader.resources["bgMusic"].data!
        bgMusic.play()

        let water = new PIXI.Sprite(this.pixi.loader.resources["waterTexture"].texture!)
        this.pixi.stage.addChild(water)
            this.ricky = new Ricky(this.pixi.loader.resources["rickyTexture"].texture!)
            this.pixi.stage.addChild(this.ricky)

        this.textbox = new Textbox(this.pixi.loader.resources["textboxTexture"].texture!)
        this.pixi.stage.addChild(this.textbox)
        this.textbox.showText()

        this.menu = new Menu(this.pixi.loader.resources["tijdmachineTexture"].texture!, height, width)
        this.pixi.stage.addChild(this.menu)
        this.menu.on('pointerdown', () => this.menu.onClick());
        this.pot = new Pot(this.pixi.loader.resources["potTexture"].texture!)
        this.pixi.stage.addChild(this.pot)
        this.pot.on('pointerdown', () => this.pot.onClick());
        this.speer = new Speer(this.pixi.loader.resources["speerTexture"].texture!)
        this.pixi.stage.addChild(this.speer)
        this.speer.on('pointerdown', () => this.speer.onClick());

        this.pixi.ticker.add((delta)=>this.update(5));
    }

    update(delta:number){
        this.ricky.walk()

    }
}


export class Fish {
    fish: PIXI.Sprite
    startingY: number

    constructor(pixi: PIXI.Application) {
        this.fish = new PIXI.Sprite(pixi.loader.resources["fishTexture"].texture!)
        this.fish.x = 500
        this.startingY = 700
        this.fish.anchor.set(0.5)
        this.fish.scale.set(0.2)
        pixi.stage.addChild(this.fish)
        pixi.ticker.add((delta) => this.update(5))
    }

    update(delta: number) {
        if (this.fish.x < -200) {
            console.log('dag visje')
            this.fish.x = width + 100
        }
        this.fish.x -= 0.1 * delta
        this.fish.y += Math.sin(this.fish.x * 0.02) * 0.5
        this.fish.angle = ((Math.sin(this.fish.x * 0.02) * 0.5-4)/(-4-4) * (360-0)) -180
    }

}

