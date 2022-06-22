//import pixi
import * as PIXI from 'pixi.js'

//this class is used on the character customisation screen
export class mainCharacterCustomizable extends PIXI.Sprite {
    public currentSprite: string

    constructor(customizationScreen: PIXI.Application, texture: PIXI.Texture) {
        //give texture to Pixi.sprite
        super(texture)

        //this code makes sure that the character is placed in the middle of the screen
        this.anchor.set(0.5)
        this.scale.set(0.5)
        this.x = customizationScreen.view.width / 2
        this.y = customizationScreen.view.height / 2 - 50

         //add the instance to the game
        customizationScreen.stage.addChild(this)
    
    }
}