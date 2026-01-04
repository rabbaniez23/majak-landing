<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const menuItems = [
  { name: 'Beranda', href: '#home' },
  { name: 'Tentang Kami', href: '#about' },
  { name: 'Jasa Perpajakan', href: '#services' },
  { name: 'FAQ', href: '#faq' },
];
</script>

<template>
  <nav class="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
    <!-- Header Info -->
    <div class="bg-primary text-white text-xs py-2 px-4 md:px-8 hidden md:flex justify-between items-center">
        <div class="flex gap-4">
            <span>WhatsApp: 0851 2115 2820</span>
            <span>Email: majak.amanpajak2025@gmail.com</span>
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20 items-center">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <a href="#" class="text-3xl font-heading font-extrabold text-primary tracking-tight">MAJAK</a>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8 items-center">
          <a 
            v-for="item in menuItems" 
            :key="item.name" 
            :href="item.href"
            class="text-dark hover:text-secondary font-medium transition-colors duration-200"
          >
            {{ item.name }}
          </a>
          <a href="https://wa.me/6285121152820" target="_blank" class="bg-accent hover:bg-yellow-400 text-dark font-bold py-2 px-5 rounded-full transition-colors">
            Hubungi Kami
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center md:hidden">
          <button @click="isOpen = !isOpen" type="button" class="text-dark hover:text-primary focus:outline-none p-2">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isOpen" class="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a 
          v-for="item in menuItems" 
          :key="item.name" 
          :href="item.href"
          class="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-primary hover:bg-gray-50"
          @click="isOpen = false"
        >
          {{ item.name }}
        </a>
         <a href="https://wa.me/6285121152820" target="_blank" class="block w-full text-center mt-4 bg-accent hover:bg-yellow-400 text-dark font-bold py-3 rounded-md transition-colors">
            Hubungi Kami
          </a>
      </div>
    </div>
  </nav>
</template>