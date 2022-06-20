import {Button} from "./button";
import {Game} from "../../game";
import {App} from "../../app";

export class StopButton extends Button
{
    action() {
      document.getElementsByTagName('canvas')[0].remove();
      new App();
    }
}