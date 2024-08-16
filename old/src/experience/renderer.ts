import * as THREE from "three";

export default class Renderer {
  canvas: HTMLCanvasElement;
  renderer: THREE.WebGLRenderer;
  constructor(
    canvas: HTMLCanvasElement,
    width: number,
    height: number,
    pixelRatio: number,
    clearColor: THREE.ColorRepresentation
  ) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.resize(width, height, pixelRatio);
    this.renderer.setClearColor(clearColor);
  }
  resize(width: number, height: number, pixelRatio: number) {
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(pixelRatio);
  }
  render(scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
    this.renderer.render(scene, camera);
  }
  dispose() {
    this.renderer.dispose();
  }
}
