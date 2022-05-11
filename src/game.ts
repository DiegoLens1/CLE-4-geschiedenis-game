import * as PIXI from 'pixi.js'
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"

let height = 450
let width = 800

export class Game {

    pixi: PIXI.Application

    constructor() {
        this.pixi = new PIXI.Application({ width: width, height: height})
        document.body.appendChild(this.pixi.view)

        this.pixi.loader
            .add("fishTexture", fishImage)
            .add("waterTexture", waterImage)
        this.pixi.loader.load(() => this.doneLoading())
    }

    doneLoading() {
       let water = new PIXI.Sprite(this.pixi.loader.resources["waterTexture"].texture!)
       this.pixi.stage.addChild(water)
        new Fish(this.pixi)
    }
}


export class Fish {
    fish: PIXI.Sprite
    startingY : number

    constructor(pixi:PIXI.Application) {
        this.fish = new PIXI.Sprite(pixi.loader.resources["fishTexture"].texture!)
        this.fish.x = 200
        this.startingY = 300
        pixi.stage.addChild(this.fish)
        pixi.ticker.add((delta) => this.update(5))
    }

    update(delta : number) {
                if (this.fish.x < -200) {
                    console.log('dag visje')
                    this.fish.x = width + 100
                }
        this.fish.x -= 0.1 * delta
        this.fish.y += Math.sin(this.fish.x * 0.02) * 0.5
    }

}

new Game()