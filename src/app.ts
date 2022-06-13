import * as PIXI from 'pixi.js'
import { Game } from './game';
import startImage from "./images/start.jpg"
import rickyImage from "./images/Ricky.png"
import paperImage from "./images/paperbg.jpg"

export class App{
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
        this.loader.add('startTexture', startImage);
        this.loader.add('rickyTexture', rickyImage);
        this.loader.add('paperTexture', paperImage);
        this.loader.load(()=>this.loadCompleted());

    }

    loadCompleted(): void {
        let paper = new PIXI.Sprite(this.loader.resources["paperTexture"].texture!);
        paper.scale.set(0.6);
        this.pixi.stage.addChild(paper);
    

        let start = new PIXI.Sprite(this.loader.resources["startTexture"].texture!);
        start.scale.set(0.3);
        start.anchor.set(0.5);
        start.x = 290;
        start.y = 200;
        
        this.pixi.stage.addChild(start);

        start.interactive = true; 
        start.buttonMode = true;

        let ricky = new PIXI.Sprite(this.loader.resources["rickyTexture"].texture!);

        ricky.scale.set(0.5);
        ricky.anchor.set(0.5);
        ricky.x = 630;
        ricky.y = 280;

        this.pixi.stage.addChild(ricky);

        start.on('pointerdown', () => this.onClick());
    }

    onClick(){
        document.getElementsByTagName('canvas')[0].remove();
        new Game();
    }
}


new App();