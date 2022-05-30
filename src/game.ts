import * as PIXI from 'pixi.js'
import fishImage from "./images/fish.png"
import waterImage from "./images/water.jpg"
import textboxImage from "./images/textbox.png"
import rickyImage from "./images/Ricky.png"
import boer1Image from "./images/boer1.png"
import boer2Image from "./images/boer2.png"
import jager1Image from "./images/Jager1.png"
import { Textbox } from "./classes/ui/textbox"
import { Character } from "./classes/inGameElements/character"

let height = 450
let width = 800

export class Game {
    pixi: PIXI.Application
    textbox: Textbox
    charachters: Character[] = []

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
        this.pixi.loader.load(() => this.doneLoading())
    }

    doneLoading() {
        let water = new PIXI.Sprite(this.pixi.loader.resources["waterTexture"].texture!)
        this.pixi.stage.addChild(water)
        new Fish(this.pixi)
        for (let i = 0; i < 2; i++) {
            let character = new Character(this.pixi.loader.resources["rickyTexture"].texture!, 
                this.pixi.loader.resources["boer1Texture"].texture!, 
                this.pixi.loader.resources["boer2Texture"].texture!, 
                this.pixi.loader.resources["jager1Texture"].texture!)
            this.pixi.stage.addChild(character)
            this.charachters.push(character)
        }
        this.textbox = new Textbox(this.pixi.loader.resources["textboxTexture"].texture!)
        this.pixi.stage.addChild(this.textbox)
        this.textbox.showText()
        this.pixi.stage.addChild(this.textbox.basicText)
        this.pixi.ticker.add((delta) => this.update(delta))
    }

    update(delta:number){
        console.log(Character)
    }
}


export class Fish {
    fish: PIXI.Sprite
    startingY: number

    constructor(pixi: PIXI.Application) {
        this.fish = new PIXI.Sprite(pixi.loader.resources["fishTexture"].texture!)
        this.fish.x = 200
        this.startingY = 300
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
    }

}

new Game()