/*
 * @Description: 灯光
 * @Author: AodaZhang
 * @Date: 2020-04-12 21:46:35
 * @LastEditTime: 2020-04-13 16:01:08
 */
import { colorConfig } from '../config/index'

export default class Light {
  constructor(lightType = '') {
    switch (lightType) {
      case 'AmbientLight':
        this.instance = new THREE.AmbientLight(colorConfig.ambientColor, colorConfig.directionalIntensity)
        break
      case 'DirectionalLight':
        this.instance = new THREE.DirectionalLight(colorConfig.directionalColor, colorConfig.directionalIntensity)
        this.instance.position.set(350, 500, 0) // 平行光位置
        break
    }
  }
}
