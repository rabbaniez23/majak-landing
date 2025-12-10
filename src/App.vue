<script setup>
import { onMounted } from 'vue';
import ThreeBackground from './components/ThreeBackground.vue';
import Navbar from './components/Navbar.vue'; // Import Navbar
import Footer from './components/Footer.vue'; // Import Footer
import HomeView from './views/HomeView.vue';
import AOS from 'aos';

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
});
</script>

<template>
  <ThreeBackground />

  <Navbar />

  <main>
    <HomeView />
  </main>

  <Footer />
</template>