/*
 * @Description: 场景
 * @Author: AodaZhang
 * @Date: 2020-04-12 19:53:54
 * @LastEditTime: 2020-04-13 15:24:41
 */
import Light from './light'

export default class Scene {
  constructor(meshArray = []) {
    const ambientLight = new Light('AmbientLight').instance // 实例化环境光
    const directionalLight = new Light('DirectionalLight').instance // 实例化平行光

    this.instance = new THREE.Scene() // 实例化场景
    this.instance.add(ambientLight) // 添加环境光到场景中
    this.instance.add(directionalLight) // 添加平行光到场景中
    Array.isArray(meshArray) && meshArray.forEach(mesh => {
      this.instance.add(mesh) // 添加网格到场景中
    })
    // this.instance.add(new THREE.AxesHelper(200)) // 添加辅助轴线到场景中
  }
}
