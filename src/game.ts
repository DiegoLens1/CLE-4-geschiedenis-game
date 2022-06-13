import * as PIXI from 'pixi.js'
import backgroundImage from "./images/background.png"
import textboxImage from "./images/textbox.png"
import rickyImage from "./images/Ricky.png"
import boer1Image from "./images/boer1.png"
import boer2Image from "./images/boer2.png"
import jager1Image from "./images/Jager1.png"
import potImage from "./images/pot.png"
import { Textbox } from "./classes/ui/textbox"
import { Character } from "./classes/inGameElements/character"
import {Ricky} from "./classes/inGameElements/ricky";
import {Boer1} from "./classes/inGameElements/boer1"
import backgroundTrack from "url:./music/backgroundaudio.mp3"  

let height = 450
let width = 800

export class Game {
    pixi: PIXI.Application
    textbox: Textbox
    characters: Character[] = []
    potImage:PIXI.Sprite
    ricky:Ricky
    boer1: Boer1

    constructor() {
        this.pixi = new PIXI.Application({ width: width, height: height })
        document.body.appendChild(this.pixi.view)

        this.pixi.loader
            .add("fishTexture", boer2Image)
            .add("potTexture", potImage)
            .add("backgroundTexture", backgroundImage)
            .add("textboxTexture", textboxImage)
            .add("rickyTexture", rickyImage)
            .add("boer1Texture", boer1Image)
            .add("boer2Texture", boer2Image)
            .add("jager1Texture", jager1Image)
            .add("bgMusic", backgroundTrack)
        this.pixi.loader.load(() => this.doneLoading())
    }

    doneLoading() {
        //make sure the bg track is loaded before anything else because browser delay
        let bgMusic = this.pixi.loader.resources["bgMusic"].data!
        bgMusic.play()

        let background = new PIXI.Sprite(this.pixi.loader.resources["backgroundTexture"].texture!)
        background.scale.set(1.32);
        
        this.pixi.stage.addChild(background)
            
            this.potImage = new PIXI.Sprite(this.pixi.loader.resources["potTexture"].texture)
            this.potImage.scale.set(0.3);
            this.potImage.x = 300;
            this.potImage.y = 250;

            this.ricky = new Ricky(this.pixi.loader.resources["rickyTexture"].texture!)
            this.ricky.scale.set(0.3);
            this.ricky.y = 150;

            this.boer1 = new Boer1(this.pixi.loader.resources["boer1Texture"].texture!)
            this.boer1.on('pointerdown', () => this.boer1.onClick());
            this.boer1.scale.set(0.3);
            this.boer1.x = 400;
            this.boer1.y = 100;
        

            this.pixi.stage.addChild(this.ricky)
            this.pixi.stage.addChild(this.boer1)
            this.pixi.stage.addChild(this.potImage)
         
        // this.textbox = new Textbox(this.pixi.loader.resources["textboxTexture"].texture!)
        // this.pixi.stage.addChild(this.textbox)
        // this.textbox.showText()
        
        this.pixi.ticker.add((delta)=>this.update(5));
    }

    update(delta:number){
        // this.ricky.walk()

    }
}




