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

// export class Fish {

//     pixi: PIXI.Application

//     constructor() {
//         this.pixi = new PIXI.Application({ width: 900, height: 500 })
//         document.body.appendChild(this.pixi.view)

//         this.pixi.loader
//             .add("fishTexture", fishImage)
//             .add("backgroundTexture", waterImage)

//         this.pixi.loader.load(() => this.doneLoading())
//     }

//     doneLoading() {
//         console.log("all textures loaded!")
//         this.pixi.ticker.add((delta) => this.update(5))
//     }

//     update(delta : number) {
//         console.log(`Dit is de Game Loop!`)
//     }
// }

// let fish = new Array<PIXI.Sprite>();
// pixi.ticker.add((delta) => update(5))
// let bubbles = new Array<PIXI.Sprite>();

// document.body.appendChild(pixi.view)
// let howManyFish = 5
// let howManyBubbles = 20


// const loader = new PIXI.Loader()
// loader.add('fishTexture', fishImage)
//       .add('bubbleTexture', bubbleImage)
//       .add('waterTexture', waterImage)
// loader.load(()=>loadCompleted())

// //
// // STAP 3 - maak een sprite als de afbeeldingen zijn geladen
// //
// function loadCompleted() {
//     let water = new PIXI.Sprite(loader.resources["waterTexture"].texture!)
//     pixi.stage.addChild(water)

//     for (let i = 0; i < howManyFish; i++) {
//         fish[i] = new PIXI.Sprite(loader.resources["fishTexture"].texture!)
//         fish[i].x = getRandomInt(0, (width - 100))
//         fish[i].y = getRandomInt(0, (height - 100))
//         fish[i].tint = Math.random() * 0xFFFFFF;
//         pixi.stage.addChild(fish[i])
//     }

//     for (let i = 0; i < howManyBubbles; i++) {
//         bubbles[i] = new PIXI.Sprite(loader.resources["bubbleTexture"].texture!)
//         bubbles[i].x = getRandomInt(0, (width - 100))
//         bubbles[i].y = getRandomInt(0, (height - 100))
//         pixi.ticker.add((delta) => update(5))
//         pixi.stage.addChild(bubbles[i])
//     }
// }

// function update(delta: number) {
//     for (let i = 0; i < howManyFish; i++) {
//         if (fish[i].x < -200) {
//             fish[i].x = getRandomInt(width + 200, width + 1000)
//             fish[i].y = getRandomInt(0, height - 100)
//         }
//         fish[i].x -= 0.01 * delta
//     }
// }

// function getRandomInt(min: number, max: number) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }