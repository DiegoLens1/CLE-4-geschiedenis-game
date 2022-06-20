import * as PIXI from 'pixi.js'

export class Textbox extends PIXI.Sprite{
    basicText:PIXI.Text
    constructor(texture:PIXI.Texture){
        super(texture)
        this.scale.set(0.45)
        this.y = window.innerHeight - 450
        this.x = -5
        this.alpha = 0
        const style = new PIXI.TextStyle({
            fontSize: 24,
            fill: 0x000000
        })
        this.basicText = new PIXI.Text(``, style)
        this.basicText.x = 10
        this.basicText.y = 340
    }

    showText(){
        this.alpha = 1
        this.basicText.text = "Hoi ik ben Toni"
    }
}