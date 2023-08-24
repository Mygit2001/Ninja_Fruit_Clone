import { _decorator, Component, input, Input, Node, Event, EventTouch, Vec2, v2 } from 'cc';
import Utilities from './Utilities';
const { ccclass, property } = _decorator;

@ccclass('Blade')
export class Blade extends Component {

    private touchOffset: Vec2;

    onLoad() {
        input.on(Input.EventType.TOUCH_START, this.onTouchBegan, this);
        input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this); 
    }
    
    private onTouchBegan(event : EventTouch) : void {
        this.touchOffset = Utilities.vec3ToVec2(this.node.position).subtract(this.getMousePoint(event));
        console.log(this.touchOffset);
        
    }

    private onTouchEnd() {

    }

    //lay vi tri chuot bam xuong
    private getMousePoint(event: EventTouch): Vec2{
        return event.getLocation();
    }

    update(deltaTime: number) {
        
    }
}


