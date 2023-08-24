// // extension viết get set  world postion thay vì local postion
// import { Vec3, v3 } from "cc";
// declare module cc {
//     export interface Node {
//       getWorldPosition(): Vec3;
//       getLocalPosition(pos: Vec3): Vec3;
//       setWorldPosition(pos: Vec3): void;
//     }
//   }
//    // Lấy giá trị world position của node
//   Node.prototype.getWorldPosition = function (): Vec3 {
//       //this ở đây là node luôn
//       const worldPos = this.convertToWorldSpaceAR(v3(0, 0, 0));
//       return worldPos;
//   };
//   // Đặt giá trị world position cho node
//   Node.prototype.setWorldPosition = function (worldPosition: Vec3) {
//       //this ở đây là node luôn
//       const localPos = this.parent?.convertToNodeSpaceAR(worldPosition);
//       this.position = localPos;
//   };
//    // Lấy giá trị local position của node
//   Node.prototype.getLocalPosition = function (worldPosition: Vec3): Vec3 {
//       //this ở đây là node luôn
//       const localPosition = this.parent?.convertToNodeSpaceAR(worldPosition);
//       return localPosition;
//   };
  