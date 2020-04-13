/*
 * @Description: 相机
 * @Author: AodaZhang
 * @Date: 2020-04-12 19:36:30
 * @LastEditTime: 2020-04-13 16:34:10
 */
import { sizeConfig } from '../config'

export default class Camera {
  constructor(cameraType = '') {
    switch (cameraType) {
      case 'OrthographicCamera':
        this.instance = new THREE.OrthographicCamera(-sizeConfig.canvasWidth / 2, sizeConfig.canvasWidth / 2, sizeConfig.canvasHeight / 2, -sizeConfig.canvasHeight / 2, 0, 2000) // 实例化正交相机
        break
      case 'PerspectiveCamera':
        this.instance = new THREE.PerspectiveCamera(45, sizeConfig.aspect, 0, 2000) // 实例化透视相机
        break
    }
    this.instance.position.set(200, 175, 200) // 相机位置
    this.instance.lookAt(new THREE.Vector3(0, 0, 0)) // 相机焦点
  }
}
