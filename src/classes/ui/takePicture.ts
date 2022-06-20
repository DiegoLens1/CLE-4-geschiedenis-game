import * as PIXI from "pixi.js";
import {Button} from "./button";

export class takePicture extends Button
{
    action(){
        let renderer = PIXI.autoDetectRenderer({ preserveDrawingBuffer: true });
    }
}