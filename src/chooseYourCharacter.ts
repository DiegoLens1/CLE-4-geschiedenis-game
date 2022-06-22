//import pixi
import * as PIXI from 'pixi.js'

//import classes
import { Game } from './game'
import { mainCharacterCustomizable } from "./classes/inGameElements/customCharacter"
import { button } from './classes/inGameElements/buttonCharacterCustomization'

//import images
import paperImage from "./images/paperbg.jpg"
import continueButtonImg from "./images/continue.jpg"

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
import arrowButton from "./images/arrow.png"

//global variables
let height = 450
let width = 800
let customCharacter : mainCharacterCustomizable
let arrowButtonRight : button
let arrowButtonLeft : button
let texturesPersonalisationLoader : PIXI.Loader

export class CustomizationScreen {

    private pixi: PIXI.Application

    constructor() {
        this.pixi = new PIXI.Application({height: height, width: width})
        document.body.appendChild(this.pixi.view)

        //load all textures
        this.pixi.loader
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
            .add("arrowTexture", arrowButton)
            .add('paperTexture', paperImage)
            .add('continueButtonTexture', continueButtonImg)

        // after loader is done, load doneLoading function
        this.pixi.loader.load(() => this.doneLoading())

        texturesPersonalisationLoader = this.pixi.loader
    }

    doneLoading() {
        //add paper wallpaper
        let paper = new PIXI.Sprite(this.pixi.loader.resources["paperTexture"].texture!);
        paper.scale.set(0.6);
        this.pixi.stage.addChild(paper);

        //add start game button
        let continueButton = new PIXI.Sprite(this.pixi.loader.resources["continueButtonTexture"].texture!);
        continueButton.anchor.set(0.5)
        continueButton.scale.set(0.1);
        continueButton.y = height - 50
        continueButton.x = width / 2
        continueButton.interactive = true
        continueButton.buttonMode = true
        continueButton.on('pointerdown', () => this.continueHandler());

        this.pixi.stage.addChild(continueButton);
        
        //If chosen character is saved before, load that texture, else load basic default    
        if (localStorage.getItem('chosenAvatar') !== null) {
            
            let localStorageAvatar = localStorage.getItem('chosenAvatar')!;
            
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources[localStorageAvatar].texture!)
            customCharacter.currentSprite = localStorageAvatar;
        } else {
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture0"].texture!)
            customCharacter.currentSprite = "customTexture0";
        }

        //These buttons are the buttons on the left and right side of the screen to cycle textures
        arrowButtonRight = new button(this.pixi, this.pixi.loader.resources["arrowTexture"].texture!, 'right')
        arrowButtonRight.on('pointerdown', () => this.onClickRight())

        arrowButtonLeft = new button(this.pixi, this.pixi.loader.resources["arrowTexture"].texture!, 'left')
        arrowButtonLeft.on('pointerdown', () => this.onClickLeft())

        }


    //the onClick functions are used to cycle to the right texture. 
    //e.g. when current texture is nr. 1, go to either nr. 0 or 2 depending on if is pressed on the left or right button
    onClickRight() {
        if (customCharacter.currentSprite == "customTexture0") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture1"].texture!)
            customCharacter.currentSprite = "customTexture1";

            localStorage.setItem('chosenAvatar', 'customTexture1')

        } else if (customCharacter.currentSprite == "customTexture1") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture2"].texture!)
            customCharacter.currentSprite = "customTexture2";

            localStorage.setItem('chosenAvatar', 'customTexture2')

        } else if (customCharacter.currentSprite == "customTexture2") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture3"].texture!)
            customCharacter.currentSprite = "customTexture3";

            localStorage.setItem('chosenAvatar', 'customTexture3')

        } else if (customCharacter.currentSprite == "customTexture3") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture4"].texture!)
            customCharacter.currentSprite = "customTexture4";

            localStorage.setItem('chosenAvatar', 'customTexture4')

        } else if (customCharacter.currentSprite == "customTexture4") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture5"].texture!)
            customCharacter.currentSprite = "customTexture5";

            localStorage.setItem('chosenAvatar', 'customTexture5')

        } else if (customCharacter.currentSprite == "customTexture5") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture6"].texture!)
            customCharacter.currentSprite = "customTexture6";

            localStorage.setItem('chosenAvatar', 'customTexture6')

        } else if (customCharacter.currentSprite == "customTexture6") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture7"].texture!)
            customCharacter.currentSprite = "customTexture7";

            localStorage.setItem('chosenAvatar', 'customTexture7')

        } else if (customCharacter.currentSprite == "customTexture7") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture8"].texture!)
            customCharacter.currentSprite = "customTexture8";

            localStorage.setItem('chosenAvatar', 'customTexture8')

        } else if (customCharacter.currentSprite == "customTexture8") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture9"].texture!)
            customCharacter.currentSprite = "customTexture9";

            localStorage.setItem('chosenAvatar', 'customTexture9')

        } else if (customCharacter.currentSprite == "customTexture9") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture0"].texture!)
            customCharacter.currentSprite = "customTexture0";
            

            localStorage.setItem('chosenAvatar', 'customTexture0')

        }
    }

    onClickLeft() {
        if (customCharacter.currentSprite == "customTexture0") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture9"].texture!)
            customCharacter.currentSprite = "customTexture9";

            localStorage.setItem('chosenAvatar', 'customTexture9')

        } else if (customCharacter.currentSprite == "customTexture9") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture8"].texture!)
            customCharacter.currentSprite = "customTexture8";

            localStorage.setItem('chosenAvatar', 'customTexture8')

        } else if (customCharacter.currentSprite == "customTexture8") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture7"].texture!)
            customCharacter.currentSprite = "customTexture7";

            localStorage.setItem('chosenAvatar', 'customTexture7')

        } else if (customCharacter.currentSprite == "customTexture7") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture6"].texture!)
            customCharacter.currentSprite = "customTexture6";

            localStorage.setItem('chosenAvatar', 'customTexture6')

        } else if (customCharacter.currentSprite == "customTexture6") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture5"].texture!)
            customCharacter.currentSprite = "customTexture5";

            localStorage.setItem('chosenAvatar', 'customTexture5')

        } else if (customCharacter.currentSprite == "customTexture5") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture4"].texture!)
            customCharacter.currentSprite = "customTexture4";

            localStorage.setItem('chosenAvatar', 'customTexture4')

        } else if (customCharacter.currentSprite == "customTexture4") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture3"].texture!)
            customCharacter.currentSprite = "customTexture3";

            localStorage.setItem('chosenAvatar', 'customTexture3')

        } else if (customCharacter.currentSprite == "customTexture3") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture2"].texture!)
            customCharacter.currentSprite = "customTexture2";

            localStorage.setItem('chosenAvatar', 'customTexture2')

        } else if (customCharacter.currentSprite == "customTexture2") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture1"].texture!)
            customCharacter.currentSprite = "customTexture1";

            localStorage.setItem('chosenAvatar', 'customTexture1')

        } else if (customCharacter.currentSprite == "customTexture1") {
            this.pixi.stage.removeChild(customCharacter)
            customCharacter = new mainCharacterCustomizable(this.pixi, this.pixi.loader.resources["customTexture0"].texture!)
            customCharacter.currentSprite = "customTexture0";
            

            localStorage.setItem('chosenAvatar', 'customTexture0')

        }
    }

    // This function will load when pressed on 'verder', this will load a new game
    continueHandler(){
        for (let i = 0; i < document.getElementsByTagName('canvas').length; i++) {      
            document.getElementsByTagName('canvas')[i].remove();
          }
        new Game();
    }
}
