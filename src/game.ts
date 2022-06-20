import * as PIXI from 'pixi.js'
import backgroundImage from "./images/background.png"
import textboxImage from "./images/textbox.png"
import tekstbox1Image from "./images/tekstbox1.png"
import rickyImage from "./images/Ricky.png"
import boer1Image from "./images/boer1.png"
import boer2Image from "./images/boer2.png"
import jager1Image from "./images/Jager1.png"
import potImage from "./images/pot.png"
import speerImage from "./images/speer.png"
import tijdmachineImage from "./images/tijdmachine.png"
import stopButton from "./images/stopButton.png"
import {Textbox} from "./classes/ui/textbox"
import {Character} from "./classes/inGameElements/character"
import {Ricky} from "./classes/inGameElements/ricky";
import {Boer1} from "./classes/inGameElements/boer1"
import {Menu} from "./classes/ui/menu"
import {InventoryItem} from "./classes/inGameElements/inventoryItem"
import {Speer} from "./classes/inGameElements/speer"
import backgroundTrack from "url:./music/backgroundaudio.mp3"
import {Collectable} from "./classes/inGameElements/collectable";
import customImage0 from "./images/0.png"
import customImage1 from "./images/1.png"
import customImage2 from "./images/2.png"
import customImage3 from "./images/3.png"
import customImage4 from "./images/4.png"
import customImage5 from "./images/5.png"
import customImage6 from "./images/6.png"
import customImage7 from "./images/7.png"
import customImage8 from "./images/8.png"
import customImage9 from "./images/9.png"


let height = 450
let width = 800

export class Game {
    pixi: PIXI.Application
    textbox: Textbox
    characters: Character[] = []
    potImage: PIXI.Sprite
    ricky: Ricky
    boer1: Boer1
    menu: Menu
    pot: InventoryItem
    speer: Speer
    potObject: Collectable

    constructor() {
        this.pixi = new PIXI.Application({width: width, height: height})
        document.body.appendChild(this.pixi.view)

        this.pixi.loader
            .add("fishTexture", boer2Image)
            .add("backgroundTexture", backgroundImage)
            .add("textboxTexture", textboxImage)
            .add("tekstbox1Texture", tekstbox1Image)
            .add("rickyTexture", rickyImage)
            .add("boer1Texture", boer1Image)
            .add("boer2Texture", boer2Image)
            .add("jager1Texture", jager1Image)
            .add("potTexture", potImage)
            .add("speerTexture", speerImage)
            .add("tijdmachineTexture", tijdmachineImage)
            .add("bgMusic", backgroundTrack)
            .add("stopButton", stopButton)
            .add("customTexture0", customImage0)
            .add("customTexture1", customImage1)
            .add("customTexture2", customImage2)
            .add("customTexture3", customImage3)
            .add("customTexture4", customImage4)
            .add("customTexture5", customImage5)
            .add("customTexture6", customImage6)
            .add("customTexture7", customImage7)
            .add("customTexture8", customImage8)
            .add("customTexture9", customImage9)
        this.pixi.loader.load(() => this.doneLoading())
    }

    doneLoading() {
        //make sure the bg track is loaded before anything else because browser delay
        let bgMusic = this.pixi.loader.resources["bgMusic"].data!
        bgMusic.play()

        let background = new PIXI.Sprite(this.pixi.loader.resources["backgroundTexture"].texture!)
        background.scale.set(1.32);

        this.pixi.stage.addChild(background)


        // this.potImage = new PIXI.Sprite(this.pixi.loader.resources["potTexture"].texture)
        // this.potObject.on('pointerdown', () => this.potObject.onClick());
        // this.potImage.scale.set(0.5);
        // this.potImage.x = 300;
        // this.potImage.y = 260;

        if (localStorage.getItem('chosenAvatar') !== null) {
            let localStorageAvatar = localStorage.getItem('chosenAvatar')!;
            this.ricky = new Ricky(this.pixi.loader.resources[localStorageAvatar].texture!, this)
        } else {
            this.ricky = new Ricky(this.pixi.loader.resources["rickyTexture"].texture!, this)
        }

        this.ricky.scale.set(0.3);
        this.ricky.y = 150;
        this.pixi.stage.addChild(this.ricky)

        this.boer1 = new Boer1(this.pixi.loader.resources["boer1Texture"].texture!, this.pixi.loader.resources["tekstbox1Texture"].texture!, this.pixi)
        this.boer1.on('pointerdown', () => this.boer1.onClick());
        this.boer1.scale.set(0.3);
        this.boer1.x = 400;
        this.boer1.y = 100;
        this.pixi.stage.addChild(this.boer1)


        this.menu = new Menu(this.pixi, this.pixi.loader.resources["tijdmachineTexture"].texture!, height, width)

        this.potObject = new Collectable(this.pixi.loader.resources["potTexture"].texture!, false, 300, 260, "pot", this.menu)
        this.pixi.stage.addChild(this.potObject)

        this.speer = new Speer(this.pixi.loader.resources["speerTexture"].texture!)
        this.pixi.stage.addChild(this.speer)
        this.speer.on('pointerdown', () => this.speer.onClick());


        this.pixi.stage.addChild(this.menu)
        this.pixi.ticker.add((delta) => this.update(5));
    }

    update(delta: number) {
        // this.ricky.walk()
        this.ricky.timeTransition()
    }
}

