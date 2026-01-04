<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);
const isScrolled = ref(false);

const menuItems = [
  { name: 'Beranda', href: '#home' },
  { name: 'Tentang Kami', href: '#about' },
  { name: 'Jasa Perpajakan', href: '#services' },
  { name: 'FAQ', href: '#faq' },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav 
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="[
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center transition-all duration-300 h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center gap-2">
           <a href="#">
             <img src="/majak-logo.png" alt="MAJAK - Aman Pajak" class="h-20 w-auto object-contain" />
           </a>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8 items-center">
          <a 
            v-for="item in menuItems" 
            :key="item.name" 
            :href="item.href"
            class="group relative font-medium text-sm tracking-wide transition-colors duration-200"
            :class="isScrolled ? 'text-dark hover:text-primary' : 'text-white/90 hover:text-white'"
          >
            {{ item.name }}
            <span 
                class="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                :class="isScrolled ? 'bg-primary' : 'bg-accent'"
            ></span>
          </a>
          
          <a 
            href="https://wa.me/6285121152820" 
            target="_blank" 
            class="px-6 py-2.5 rounded-full font-bold text-sm bg-accent text-white transition-transform duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg flex items-center gap-2"
          >
            Hubungi Kami
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center md:hidden">
          <button 
            @click="isOpen = !isOpen" 
            type="button" 
            class="focus:outline-none p-2 rounded-md transition-colors"
            :class="isScrolled ? 'text-dark hover:bg-gray-100' : 'text-white hover:bg-white/10'"
          >
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
        <div v-show="isOpen" class="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg left-0 top-full">
        <div class="px-4 pt-4 pb-6 space-y-2">
            <a 
            v-for="item in menuItems" 
            :key="item.name" 
            :href="item.href"
            class="block px-4 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-primary hover:bg-blue-50 transition-colors"
            @click="isOpen = false"
            >
            {{ item.name }}
            </a>
            <div class="pt-4 mt-2 border-t border-gray-100">
                <a href="https://wa.me/6285121152820" target="_blank" class="block w-full text-center bg-accent text-white font-bold py-3 rounded-lg transition-colors shadow-md">
                    Hubungi Kami
                </a>
            </div>
        </div>
        </div>
    </transition>
  </nav>
</template>