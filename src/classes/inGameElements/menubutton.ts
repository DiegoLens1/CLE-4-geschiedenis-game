import * as PIXI from 'pixi.js'
import {Game} from '../../game'
import { App } from '../../app'
import menuIMG from "../../images/menubutton.png"
import { Button } from '../ui/button'

export class menuButton extends Button
{
    action(){
        console.log('open menu');
        document.getElementsByTagName('canvas')[0].remove();
        new App();
}

}
