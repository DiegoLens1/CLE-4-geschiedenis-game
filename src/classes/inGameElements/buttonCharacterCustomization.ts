//import pixi
import * as PIXI from 'pixi.js'

//this class is used on the character customisation screen
export class button extends PIXI.Sprite {

    constructor(game: PIXI.Application, texture : PIXI.Texture, leftOrRight : string) {
        //give texture to Pixi.sprite
        super(texture)
        
        this.anchor.set(1, 0.5)
        this.interactive = true
        this.buttonMode = true
        
        if (leftOrRight == 'right') {
            this.x = game.view.width
            this.y = game.view.height / 2

        } else {
            this.x = 0
            this.y = game.view.height / 2

            //this code mirrors the texture
            this.scale.x *= -1
        }

        //add the instance to the game
        game.stage.addChild(this)
    }  
}