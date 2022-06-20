import * as PIXI from "pixi.js"
import startImage from "./images/start.jpg"

export class Settings{

    private pixiWidth = 800;
    private pixiHeight = 450;
    private pixi : PIXI.Application;
    private loader:PIXI.Loader;

    constructor(sprite:PIXI.Texture) {
        this.pixi = new PIXI.Application({ width: this.pixiWidth, height: this.pixiHeight }); 
        this.pixi.stage.interactive = true; 
        this.pixi.stage.hitArea = this.pixi.renderer.screen; 
        document.body.appendChild(this.pixi.view); 

        this.loader = new PIXI.Loader();
        this.loader.add('startTexture', startImage);
    
    }

    loadCompleted(): void {
        let start = new PIXI.Sprite(this.loader.resources["startTexture"].texture!);
        start.scale.set(0.3);
        start.anchor.set(0.5);
        start.x = 290;
        start.y = 200;
        
        this.pixi.stage.addChild(start);
    }

    onClick(){
        document.getElementsByTagName('canvas')[0].remove();
        new Game();
    }

}