/*
 * @Description: 动画控制
 * @Author: AodaZhang
 * @Date: 2020-04-12 21:45:04
 * @LastEditTime: 2020-04-13 15:54:36
 */
import { animationConfig } from '../config'

export const startAnimation = (meshBoxList = [], render = () => { }) => {
  // 一.初始化参数
  const yArray = Array(meshBoxList.length).fill(0) // 起始位移值数组
  let yIsUpArray = Array(meshBoxList.length).fill(animationConfig.isUp) // 起始位移方向数组
  let yIndex = 0 // 起始移动指针
  let startTime = new Date().getTime() // 动画开始时间

  // 二.定义动画函数
  const changeMeshBox = () => {

    // 1.如果位移数组不包含运动方向，则重置动画
    if (yIsUpArray.filter(item => item !== 0).length === 0) {
      // 只有超过指定间隔才会再次执行动画
      const endTime = new Date().getTime()
      if (endTime - startTime > animationConfig.stopTime) {
        yIsUpArray = Array(meshBoxList.length).fill(animationConfig.isUp)
        yIndex = 0
        startTime = endTime
      }
    }

    // 2.循环meshBoxList数组，执行动画
    for (let i = 0; i < yIndex; i++) {
      // 如果当前index没有位移方向，直接跳过
      if (typeof yIsUpArray[i] === 0) {
        continue
      }
      const meshBox = meshBoxList[i]
      // 判断位移方向
      if (yArray[i] > animationConfig.maxY) {
        yIsUpArray[i] = -1
      } else if (yArray[i] < animationConfig.minY) {
        yIsUpArray[i] = 1
      }
      // 计算位移值
      yArray[i] += animationConfig.increase * yIsUpArray[i]
      meshBox.position.y = yArray[i]
      // 如果当前位移值为0，且位移方向为正，代表是该meshbox本轮动画的最后位移，置控位移方向，并刷新动画开始时间
      if (yArray[i] === 0 && yIsUpArray[i] === animationConfig.isUp) {
        yIsUpArray[i] = 0
        startTime = new Date().getTime()
      }
    }

    // 3.只有位移index小于meshBoxList长度，且当前meshBox动画时长大于指定时长，才开始执行下一个meshBox动画，并刷新动画开始时间
    if (yIndex < meshBoxList.length && new Date().getTime() - startTime > animationConfig.insertTime) {
      yIndex++
      startTime = new Date().getTime()
    }

    // 4.执行渲染并刷新动画
    render()
    requestAnimationFrame(changeMeshBox)
  }
  changeMeshBox()
}
