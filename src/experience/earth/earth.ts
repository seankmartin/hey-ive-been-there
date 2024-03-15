import * as THREE from "three";
import earthVertexShader from "experience/shaders/earth/vertex.glsl";
import earthFragmentShader from "experience/shaders/earth/fragment.glsl";

export default class Atlas {
  earthGeometry: THREE.SphereGeometry;
  earthMaterial: THREE.ShaderMaterial;
  earth: THREE.Mesh;
  constructor() {
    this.earthGeometry = new THREE.SphereGeometry(2, 64, 64);
    this.earthMaterial = new THREE.ShaderMaterial({
      vertexShader: earthVertexShader,
      fragmentShader: earthFragmentShader,
      uniforms: {},
    });
    this.earth = new THREE.Mesh(this.earthGeometry, this.earthMaterial);
  }
  dispose() {
    this.earthGeometry.dispose();
    this.earthMaterial.dispose();
  }
}
