/*
 * @Description: 网格创建函数
 * @Author: AodaZhang
 * @Date: 2020-04-12 21:04:05
 * @LastEditTime: 2020-04-13 15:53:50
 */
import { sizeConfig, colorConfig } from '../config'
import MeshBox from './meshBox'

export const createMeshBoxList = count => {
  if (typeof count !== 'number' || count < 1) {
    return []
  }

  const length = sizeConfig.boxSize * count + sizeConfig.boxInsert * (count - 1)
  const firstCenter = {
    x: -length / 2 + sizeConfig.boxSize / 2,
    y: 0,
    z: -length / 2 + sizeConfig.boxSize / 2
  }
  
  const meshBoxList = []
  for (let i = 0; i < count; i++) {
    const centerTag = {
      x: firstCenter.x,
      y: firstCenter.y,
      z: firstCenter.z + (sizeConfig.boxSize + sizeConfig.boxInsert) * i
    }
    for (let j = 0; j < count; j++) {
      const center = {
        x: centerTag.x + (sizeConfig.boxSize + sizeConfig.boxInsert) * j,
        y: centerTag.y,
        z: centerTag.z,
      }
      const color = colorConfig.materialColorList[i * count + j] || 0xFFFFFF
      meshBoxList.push(new MeshBox(center, color).instance)
    }
  }

  return meshBoxList
}
