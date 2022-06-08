import * as PIXI from 'pixi.js'
import { Game } from './game';
import bonesImage from "./images/start.jpg"
import rickyImage from "./images/Ricky.png"
import paperImage from "./images/paperbg.jpg"

export class App{
    private pixiWidth = 800;
    private pixiHeight = 450;
    private pixi : PIXI.Application;
    private loader:PIXI.Loader;


    constructor(){
        this.pixi = new PIXI.Application({ width: this.pixiWidth, height: this.pixiHeight }); //vullen van pixi application 
        this.pixi.stage.interactive = true; //om dingen te kunnen aanklikken
        this.pixi.stage.hitArea = this.pixi.renderer.screen; //applicatie controleer op het hele scherm of er geklikt wordt
        document.body.appendChild(this.pixi.view);

        this.loader = new PIXI.Loader();
        this.loader.add('startTexture', bonesImage);
        this.loader.add('rickyTexture', rickyImage);
        this.loader.add('paperTexture', paperImage);
        this.loader.load(()=>this.loadCompleted());

    }

    loadCompleted(): void {
        let paper = new PIXI.Sprite(this.loader.resources["paperTexture"].texture!);
        paper.scale.set(0.6);
        this.pixi.stage.addChild(paper);
    

        let bones = new PIXI.Sprite(this.loader.resources["startTexture"].texture!);
        bones.scale.set(0.3);
        bones.anchor.set(0.5);
        bones.x = 290;
        bones.y = 200;
        
        this.pixi.stage.addChild(bones);

        bones.interactive = true; 
        bones.buttonMode = true;

        let ricky = new PIXI.Sprite(this.loader.resources["rickyTexture"].texture!);

        ricky.scale.set(0.5);
        ricky.anchor.set(0.5);
        ricky.x = 630;
        ricky.y = 280;

        this.pixi.stage.addChild(ricky);

        bones.on('pointerdown', () => this.onClick());
    }

    onClick(){
        console.log('YOO');
        document.getElementsByTagName('canvas')[0].remove();
        new Game();
    }
}


new App();