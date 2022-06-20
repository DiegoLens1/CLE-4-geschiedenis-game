import * as PIXI from 'pixi.js'

export class mainCharacterCustomizable extends PIXI.Sprite {
    public currentSprite: string

    constructor(customizationScreen: PIXI.Application, texture: PIXI.Texture) {
        super(texture)
        this.anchor.set(0.5)
        this.scale.set(0.5)
        this.x = customizationScreen.view.width / 2
        this.y = customizationScreen.view.height / 2 - 50
        customizationScreen.stage.addChild(this)
    
    }
}