<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import Testimonials from './components/Testimonials.vue';
import CTA from './components/CTA.vue';
import Footer from './components/Footer.vue';
import Process from './components/Process.vue'
</script>

<template>
  <div class="min-h-screen bg-light font-sans text-dark antialiased">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
    </main>
    <Footer />
  </div>
</template>