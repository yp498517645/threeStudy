import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import styles from "./index.module.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//用控制器查看3D物体
function ThreeTwo() {
  const canvasDom = useRef(null);
  //创建场景
  const scene = new THREE.Scene();
  //创建照相机
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 5);
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const cube = new THREE.Mesh(geometry, material);
  //坐标轴
  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);

  scene.add(camera);
  scene.add(cube);
  // webgl渲染器;
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  //增加轨道控制器
  new OrbitControls(camera, renderer.domElement);
  const render = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };

  useEffect(() => {
    canvasDom.current.appendChild(renderer.domElement);
    render();
  });

  return <div ref={canvasDom} className={styles.container}></div>;
}

export default ThreeTwo;
