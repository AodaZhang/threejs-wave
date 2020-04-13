/*
 * @Description: 材质
 * @Author: AodaZhang
 * @Date: 2020-04-12 20:03:07
 * @LastEditTime: 2020-04-13 15:44:06
 */
import { colorConfig } from '../config/index'

export default class Material {
  constructor(color = 0xFFFFFF) {
    this.instance = new THREE.MeshPhongMaterial({
      color, // 材质颜色
      specular: colorConfig.materialSpecularColor, // 材质高光色
      shininess: colorConfig.materialShininess // 材质高光系数
    })
  }
}
