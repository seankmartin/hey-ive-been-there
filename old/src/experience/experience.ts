import * as THREE from "three";
import Earth from "experience/earth/earth.ts";
import Renderer from "experience/renderer.ts";
import Camera from "experience/camera.ts";
import Time from "experience/utils/time.ts";

export default class Experience {
  canvas: HTMLCanvasElement;
  renderer: Renderer;
  scene = new THREE.Scene();
  earth = new Earth();
  camera = new Camera();
  time = new Time();
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.scene.add(this.earth.earth);
    this.renderer = new Renderer(
      this.canvas,
      window.innerWidth,
      window.innerHeight,
      window.devicePixelRatio,
      new THREE.Color(0x000000)
    );

    // Time tick event
    this.time.on("tick", () => {
      this.render();
    });
  }

  render() {
    this.renderer.render(this.scene, this.camera.camera);
  }

  resize() {
    this.renderer.resize(
      window.innerWidth,
      window.innerHeight,
      window.devicePixelRatio
    );
  }

  dispose() {
    this.earth.dispose();
    this.renderer.dispose();
    this.camera.dispose();
    this.time.dispose();
  }
}
