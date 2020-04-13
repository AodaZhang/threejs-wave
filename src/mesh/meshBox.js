/*
 * @Description: 正方体
 * @Author: AodaZhang
 * @Date: 2020-04-12 19:59:53
 * @LastEditTime: 2020-04-13 15:49:16
 */
import { sizeConfig } from '../config'
import { Material } from '../base'

export default class MeshBox {
  constructor(center = {}, color = 0xFFFFFF) {
    const { x = 0, y = 0, z = 0 } = center // mesh位置

    const material = new Material(color).instance // 实例化材质
    const geometry = new THREE.BoxGeometry(sizeConfig.boxSize, sizeConfig.boxSize, sizeConfig.boxSize) // 实例化几何体
    this.instance = new THREE.Mesh(geometry, material) // 实例化网格
    
    this.instance.position.set(x, y, z) // 设置网格位置
  }
}
