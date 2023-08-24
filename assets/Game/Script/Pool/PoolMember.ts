import SimplePool, { PoolType } from "./SimplePool";
import { _decorator, Component, Enum, Node } from 'cc';
const {ccclass, property} = _decorator;

@ccclass
export default class PoolMember extends Component {
    @property({ type: Enum(PoolType) })
    public poolType: PoolType = PoolType.None;
}