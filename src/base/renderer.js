/*
 * @Description: 渲染器
 * @Author: AodaZhang
 * @Date: 2020-04-12 19:40:37
 * @LastEditTime: 2020-04-13 15:45:15
 */
import { getCanvas } from '../util/dom'
import { colorConfig, sizeConfig } from '../config'

export default class Renderer {
  constructor() {
    this.instance = new THREE.WebGLRenderer({
      canvas: getCanvas(), // 挂载canvas
      antialias: true, // 设置抗锯齿：一般通过硬件能力操作
      preserveDrawingBuffer: true // 开启绘制缓冲区
    })
    this.instance.setClearColor(new THREE.Color(colorConfig.backgroundColor)) // 渲染器背景色
    this.instance.setSize(sizeConfig.canvasWidth, sizeConfig.canvasHeight) // 指定渲染器尺寸
  }
}
