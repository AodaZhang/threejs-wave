/*
 * @Description: dom操作
 * @Author: AodaZhang
 * @Date: 2020-04-12 19:31:14
 * @LastEditTime: 2020-04-13 15:54:46
 */
import { sizeConfig } from '../config'

export const getCanvas = () => {
  const canvas = document.getElementById('canvas')
  canvas.width = sizeConfig.canvasWidth
  canvas.height = sizeConfig.canvasHeight
  return canvas
}
