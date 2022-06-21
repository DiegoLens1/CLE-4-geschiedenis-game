import * as PIXI from 'pixi.js'
import {Game} from '../../game'
import { App } from '../../app'
import menuIMG from "./image/menubutton.png"

export class menuButton extends PIXI.Sprite
{
    game:Game
    pixi:PIXI.Application
    loader:any
    menuIMG:PIXI.Texture
    

    constructor(sprite:PIXI.Texture, game:Game, pixi:PIXI.Application, MenuIMG:PIXI.Texture) {
        super(sprite);
        this.game = game
        this.menuIMG = menuIMG
        this.pixi = pixi
        this.loader = new PIXI.Loader()

        this.scale.set(0.1);
        this.anchor.set(0.1);
        this.x = 715;
        this.y = 385;

        window.addEventListener('pointerdown', () => this.onClickMenu())
    }

    onClickMenu(){
        console.log('open menu');
        document.getElementsByTagName('canvas')[0].remove();
        new App();
}

}
