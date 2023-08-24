import { _decorator, v2, v3, Vec2, Vec3 } from 'cc';

const { ccclass, property } = _decorator;

@ccclass
export default class Utilities{

  //chuyen vector 3 sang vector 2
  public static vec3ToVec2(v: Vec3) : Vec2{
    return v2(v.x, v.y);
  }

  //chuyen vector 2 sang vector 3
  public static vec2ToVec3(v: Vec2) : Vec3{
    return v3(v.x, v.y, 0);
  }
}
