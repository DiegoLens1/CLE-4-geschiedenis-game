import {Button} from "./button";
import {Game} from "../../game";
import {App} from "../../app";

export class StopButton extends Button
{
    action() {
      for (let i = 0; i < document.getElementsByTagName('canvas').length; i++) {      
        document.getElementsByTagName('canvas')[i].remove();
      }
      new App();
    }
}