// import { _decorator, Component, Node, Prefab, CCInteger } from 'cc';
// import PoolMember from "./PoolMember";
// import SimplePool from "./SimplePool";

// const {ccclass, property, inspector} = _decorator;

// @ccclass
// export class PoolAmount {
//     @property(Node)
//     public root: Node = null;

//     @property(Prefab)
//     public prefab: PoolMember = null;

//     // @property(Integer)
//     // public amount: number = 0;
// }

// @ccclass
// export default class PoolControl extends Component {
//     @property(Array(PoolAmount))
//     pools: PoolAmount[] = [];

//     onLoad () {
//         for (let i = 0; i < this.pools.length; i++){
//             SimplePool.preload(this.pools[i].prefab, this.pools[i].root, this.pools[i].amount);
//             SimplePool.preload(this.pools[i].prefab, this.pools[i].root, this.pools[i].amount);
//         }
//     }

// }