import * as PIXI from 'pixi.js'
import { AbstractRenderer, Application, Renderer } from 'pixi.js';
import { Button } from "./button";
import { Menu } from './menu';


export class camera extends Button {

    pixi: PIXI.Application;
    menu: Menu
    
    constructor(texture: PIXI.Texture, x: number, y: number, width: number, height: number, pixi: PIXI.Application, menu: Menu) {
        super(texture, x, y, width, height)
        this.pixi = pixi
        this.menu = menu
    }
    
    action() {
        console.log("klik")
        this.takeScreenshot()

    }

    takeScreenshot() {
        this.menu.deactivateMenu()

        let renderer: PIXI.Renderer = this.pixi.renderer as PIXI.Renderer
        let extract = new PIXI.Extract(renderer)
        let canvasPixels = extract.base64(this.pixi.stage)
        // console.log(canvasPixels)

        let sprite = PIXI.Sprite.from(canvasPixels)
        sprite.x = -601
        sprite.y = 130
        sprite.width =300
        sprite.height = 150
        this.menu.addChild(sprite)

        this.menu.activateMenu()
        
    }
}

