import * as THREE from 'three'
import { Renderer, Camera, Scene } from './base'
import { createMeshBoxList } from './mesh'
import { startAnimation } from './util/animation'

const init = () => {
  const meshBoxList = createMeshBoxList(4)
  const renderer = new Renderer().instance
  const camera = new Camera('OrthographicCamera').instance
  const scene = new Scene(meshBoxList).instance
  startAnimation(meshBoxList, () => renderer.render(scene, camera))
}

window.THREE = THREE
window.onload = init()
