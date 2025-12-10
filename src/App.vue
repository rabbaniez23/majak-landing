<script setup>
import { onMounted } from 'vue';
import ThreeBackground from './components/ThreeBackground.vue';
import HomeView from './views/HomeView.vue'; // Kita panggil HomeView di sini
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

  <nav class="fixed w-full z-50 bg-[#0f172a]/80 backdrop-blur-lg border-b border-white/5 transition-all duration-300">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-extrabold tracking-tighter text-white flex items-center gap-2">
        <div class="w-8 h-8 bg-gradient-to-br from-majak-blue to-majak-orange rounded-lg flex items-center justify-center text-xs">IO</div>
        <span>MA<span class="text-majak-orange">JAK</span></span>
      </div>
      
      <div class="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
        <a href="#home" class="hover:text-white hover:scale-105 transition">Home</a>
        <a href="#services" class="hover:text-white hover:scale-105 transition">Layanan</a>
        <a href="#about" class="hover:text-white hover:scale-105 transition">Tentang</a>
      </div>
      
      <button class="bg-white text-majak-dark hover:bg-majak-orange hover:text-white px-5 py-2 rounded-full font-bold transition shadow-lg text-sm">
        Hubungi Kami
      </button>
    </div>
  </nav>

  <main>
    <HomeView />
  </main>

  <footer id="contact" class="bg-[#050b14] border-t border-white/5 pt-16 pb-8 mt-20">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-12 mb-12">
        <div class="col-span-2">
           <h2 class="text-2xl font-bold mb-4">MAJAK_IO</h2>
           <p class="text-gray-400 leading-relaxed max-w-sm">
             Partner terpercaya untuk urusan perpajakan Individu & Badan. Hemat waktu, hindari denda, fokus kembangkan bisnis.
           </p>
        </div>
        <div>
          <h4 class="font-bold text-lg mb-4 text-white">Layanan</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><a href="#" class="hover:text-majak-orange">SPT Tahunan Pribadi</a></li>
            <li><a href="#" class="hover:text-majak-orange">SPT Tahunan Badan</a></li>
            <li><a href="#" class="hover:text-majak-orange">Konsultasi Pajak</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-lg mb-4 text-white">Kontak</h4>
          <p class="text-gray-400 text-sm mb-2">Gang Gatot Kaca No.004, Kab. Bangka</p>
          <p class="text-gray-400 text-sm">Majak.amanpajak2025@gmail.com</p>
        </div>
      </div>
      <div class="text-center pt-8 border-t border-white/5">
         <p class="text-xs text-gray-600">© 2025 PT Indonesian Taxlaw Center. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>