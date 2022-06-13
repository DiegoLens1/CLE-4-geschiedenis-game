import * as PIXI from "pixi.js"

export class Speer extends PIXI.Sprite {
    collected:boolean
    constructor(texture:PIXI.Texture){
        super(texture)
        this.scale.set(0.25)
        this.angle = 10
        this.anchor.set(0.5)
        this.x = 305
        this.y = 195
        this.alpha = 0
        this.interactive = false
        this.collected = false
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
    }

    onClick(){
        this.alpha = 1
        this.collected = true
    }

    onKeyDown(e: KeyboardEvent): any {
        if (this.alpha != 0) {
            switch (e.key.toUpperCase()) {
                case "I":
                    this.alpha = 0
                    this.interactive = false
            }
        } else {
            switch (e.key.toUpperCase()) {
                case "I":
                    if(this.collected){
                        this.alpha = 1
                    }else{
                        this.alpha = 0.2
                    }
                    this.interactive = true
            }
        }
    }
}