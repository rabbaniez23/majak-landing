<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Efek navbar berubah warna saat discroll
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

// Tutup menu saat link diklik (mobile)
const closeMenu = () => {
  isMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const navLinks = [
  { name: 'Beranda', href: '#home' },
  { name: 'Layanan', href: '#services' },
  { name: 'Harga', href: '#pricing' },
  { name: 'Tentang', href: '#about' },
  { name: 'FAQ', href: '#faq' },
];
</script>

<template>
  <nav 
    class="fixed w-full z-50 transition-all duration-300 border-b"
    :class="[isScrolled ? 'bg-[#0f172a]/90 backdrop-blur-md border-white/10 py-3 shadow-lg' : 'bg-transparent border-transparent py-6']"
  >
    <div class="container mx-auto px-6 flex justify-between items-center">
      
      <a href="#home" class="group flex items-center gap-2 z-50">
        <div class="w-10 h-10 bg-gradient-to-br from-majak-blue to-majak-orange rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-105 transition-transform duration-300">
          IO
        </div>
        <div class="flex flex-col">
          <span class="text-xl font-extrabold tracking-tight text-white leading-none">MA<span class="text-majak-orange">JAK</span></span>
          <span class="text-[10px] text-gray-400 tracking-[0.2em] uppercase leading-none mt-1 group-hover:text-white transition-colors">Tax Handling</span>
        </div>
      </a>
      
      <div class="hidden md:flex items-center gap-8">
        <div class="flex gap-6">
          <a v-for="link in navLinks" :key="link.name" :href="link.href" 
             class="text-sm font-medium text-gray-300 hover:text-white relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-majak-orange after:transition-all after:duration-300 hover:after:w-full">
            {{ link.name }}
          </a>
        </div>
        
        <a href="https://wa.me/6285121152820" target="_blank" 
           class="bg-white text-majak-dark hover:bg-majak-orange hover:text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] flex items-center gap-2">
           <span>Hubungi Kami</span>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
             <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
           </svg>
        </a>
      </div>

      <button @click="toggleMenu" class="md:hidden text-white focus:outline-none z-50 p-2 rounded-lg hover:bg-white/10 transition">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div 
        v-show="isMenuOpen" 
        class="fixed inset-0 bg-[#0f172a]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in md:hidden"
      >
        <div class="flex flex-col items-center gap-6">
          <a v-for="link in navLinks" :key="link.name" :href="link.href" @click="closeMenu"
             class="text-2xl font-bold text-white hover:text-majak-orange transition-colors">
            {{ link.name }}
          </a>
        </div>
        
        <a href="https://wa.me/6285121152820" target="_blank" @click="closeMenu"
           class="mt-8 bg-gradient-to-r from-majak-orange to-red-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg">
          Konsultasi Gratis
        </a>
      </div>

    </div>
  </nav>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.2s ease-out forwards;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>