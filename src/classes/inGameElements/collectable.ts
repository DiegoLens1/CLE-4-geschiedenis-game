import * as PIXI from "pixi.js"
import {InventoryItem} from "./inventoryItem";
import {Menu} from "../ui/menu";
import {Game} from "../../game";

export class Collectable extends PIXI.Sprite {
    private _collected:boolean
    private _name:string
    private _menu: Menu

    get collected()
    {
        return this._collected;
    }
    set collected(collected:boolean)
    {
        this._collected = collected;
    }

    constructor(texture:PIXI.Texture,collected:boolean, x: number, y: number,name:string, menu: Menu){
        super(texture)
        this.collected = collected;
        // this.scale.set(0.7)
        // this.anchor.set(0.5)
        this.x = x
        this.y = y
        this._name = name
        this._menu = menu

        this.alpha = 1
        this.interactive = true
        this.collected = false
        this.name = name;
        // window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        this.on('pointerdown', () => this.onClick());
    }


    onClick(){
        this.alpha = 0
        this._menu.collect(this._name)
    }

    private onKeyDown(event: KeyboardEvent) {
        // iets kunnen doen a key down.
    }


}