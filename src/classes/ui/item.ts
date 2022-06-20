import * as PIXI from 'pixi.js'
import { Game } from './game';
import { Menu } from './menu';
import backButton from '../../images/back-button.png';
import item1 from '../../images/pot2.png';
import backgroundImage from '../../images/color background.jpg';
import textBlock from '../../images/tekst.png';

export class item{
    private pixiWidth = 800;
    private pixiHeight = 450;
    private pixi : PIXI.Application;
    private loader:PIXI.Loader;

    constructor(){
        this.pixi = new PIXI.Application({ width: this.pixiWidth, height: this.pixiHeight }); 
        this.pixi.stage.interactive = true; 
        this.pixi.stage.hitArea = this.pixi.renderer.screen;
        document.body.appendChild(this.pixi.view);

        this.loader = new PIXI.Loader();
        this.loader.add('backgroundTexture',backgroundImage);
        this.loader.add('potTexture', item1);
        this.loader.add('backTexture', backButton);
        this.loader.add('textTexture', textBlock);
        this.loader.load(()=> this.loadCompleted())


    }

    loadCompleted(): void {

        let background = new PIXI.Sprite(this.loader.resources["backgroundTexture"].texture!);
        background.scale.set(4.0);
        this.pixi.stage.addChild(background);

        let back = new PIXI.Sprite(this.loader.resources["backTexture"].texture!);
        back.scale.set(0.3);
        back.x = 60;
        back.y = 15;
        this.pixi.stage.addChild(back);

        back.interactive = true; 
        back.buttonMode = true;
        back.on('pointerdown', () => this.onClickBack());

        let item1 = new PIXI.Sprite(this.loader.resources['potTexture'].texture!);
        item1.scale.set(0.7);
        item1.x = 45;
        item1.y = 110;
        this.pixi.stage.addChild(item1);

        let text = new PIXI.Sprite(this.loader.resources['textTexture'].texture!);
        text.scale.set(0.22);
        text.x = 360;
        text.y = 20;

        this.pixi.stage.addChild(text);

    }

    onClickBack(){
        console.log('back to the game');
        document.getElementsByTagName('canvas')[0].remove();
        new Menu();
    }
}
