import {Button} from "./button";
import {Game} from "../../game";

export class StopButton extends Button
{
    action() {
      document.getElementsByTagName('canvas')[0].remove();
    }
}