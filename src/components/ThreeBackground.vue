<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import * as THREE from 'three';

const container = ref(null);
let scene, camera, renderer, particles;

onMounted(() => {
  // 1. Setup Scene
  scene = new THREE.Scene();
  
  // 2. Setup Camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 20;

  // 3. Setup Renderer
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.value.appendChild(renderer.domElement);

  // 4. Buat Partikel (Efek Debu Bintang / Jaring Data)
  const geometry = new THREE.BufferGeometry();
  const count = 2000;
  const positions = new Float32Array(count * 3);

  for(let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 50; // Sebaran partikel
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({ 
    size: 0.15, 
    color: 0x0056b3, // Warna Biru MaJak
    transparent: true,
    opacity: 0.8
  });

  particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // 5. Animasi Loop
  const animate = () => {
    requestAnimationFrame(animate);
    
    // Rotasi pelan biar elegan
    particles.rotation.x += 0.0005;
    particles.rotation.y += 0.0005;

    // Efek mouse (opsional, bisa ditambah nanti)
    
    renderer.render(scene, camera);
  };

  animate();

  // Handle Resize
  window.addEventListener('resize', onWindowResize);
});

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

onBeforeUnmount(() => {
  window.removeEventListener('resize', onWindowResize);
  // Cleanup three.js resources to prevent leak
});
</script>

<template>
  <div ref="container" class="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-60"></div>
</template>