<script setup>
// Data Social Media Lengkap dengan Icon SVG
const socials = [
  { 
    name: 'Instagram', 
    handle: '@majak_io', 
    url: 'https://instagram.com/majak_io',
    // SVG Path Instagram
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' 
  },
  { 
    name: 'TikTok', 
    handle: '@majak.io', 
    url: 'https://tiktok.com/@majak.io',
    icon: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.62-1.12-1.09 2.3-3.8 3.43-6.36 2.89-2.72-.57-4.63-2.92-4.61-5.7.02-3.11 2.6-5.63 5.71-5.59.1 0 .2.01.31.02v4.01c-.08-.01-.17-.02-.25-.02-1.07-.02-2.02.73-2.16 1.79-.17 1.34 1 2.64 2.37 2.63 1.25-.01 2.33-.99 2.45-2.24.06-.63.03-1.28.01-1.92L12.525.02z' 
  },
  { 
    name: 'LinkedIn', 
    handle: 'MaJak_io', 
    url: '#',
    icon: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.306c0-4.613 5.48-4.515 5.48 0v8.306h5v-10.502c0-8.118-8.74-7.984-10.512-3.887v-2.017z' 
  },
  { 
    name: 'Facebook', 
    handle: 'MaJak', 
    url: '#',
    icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' 
  },
  { 
    name: 'X', 
    handle: '@MaJak2025', 
    url: '#',
    icon: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z' 
  },
  { 
    name: 'Threads', 
    handle: '@majak_io', 
    url: '#',
    icon: 'M15.158 6.436a9.58 9.58 0 0 0-3.328-1.077C5.356 5.36 1.8 10.02 2.97 15.688c.677 3.279 3.016 5.253 6.02 5.253 2.126 0 3.765-.965 4.767-2.128l1.378 1.458c-1.488 1.636-3.805 2.825-6.145 2.825-4.526 0-8.025-3.02-8.918-7.962C-.885 9.878 2.607 3.425 11.826 3.425c6.346 0 9.863 3.41 9.863 8.358 0 3.006-1.558 5.756-5.18 5.756-1.396 0-2.486-.948-2.486-2.583 0-.498.083-2.162.24-3.513.256-2.227 1.66-2.903 2.502-2.903.65 0 1.258.46 1.258 1.55 0 1.569-1.31 4.545-2.023 6.075-.436.936.43 1.353.946 1.353 2.455 0 3.65-3.065 3.65-6.277 0-4.045-2.73-6.809-7.258-6.809H15.16zm-5.46 7.647c.22-.016 1.706-.115 1.953-2.316.035-.333.125-1.953.125-2.023 0-.645-.42-1.066-1.125-1.066-.99 0-2.348 1.34-2.348 3.593 0 .762.39 1.75 1.394 1.812z' 
  }
];

const services = [
  'Konsultasi Gratis',
  'Pelaporan SPT Tahunan',
  'Pelaporan SPT Masa',
  'Administrasi Perpajakan Lainnya'
];
</script>

<template>
  <footer class="bg-dark text-white pt-0 pb-12 border-t border-white/5">
    
    <div class="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
        
        <div class="lg:col-span-4 space-y-6" data-aos="fade-up" data-aos-delay="0">
          <div class="flex items-center gap-2 mb-4">
             <div class="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-dark font-bold text-xl"></div>
             <h3 class="text-3xl font-heading font-extrabold text-white tracking-tight">MAJAK</h3>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed text-justify">
             Mitra perpajakan profesional untuk pengusaha dan individu di Indonesia. Mengedepankan kepastian, ketertiban, dan kepatuhan dalam setiap layanan.
          </p>
          
          <!-- Social Icons -->
          <div class="flex flex-wrap gap-2">
             <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" :aria-label="social.name"
                  class="w-8 h-8 rounded bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition-all duration-300 transform hover:-translate-y-1 group">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path :d="social.icon" />
                  </svg>
              </a>
          </div>
        </div>

        <div class="lg:col-span-3 lg:pl-8" data-aos="fade-up" data-aos-delay="100">
          <h4 class="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Layanan Kami</h4>
          <ul class="space-y-4 text-sm text-gray-400">
            <li v-for="(service, idx) in services" :key="idx" class="flex items-start gap-2 group cursor-pointer">
               <span class="text-accent mt-0.5 group-hover:translate-x-1 transition-transform">›</span>
               <span class="hover:text-accent transition-colors">{{ service }}</span>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
          <h4 class="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Navigasi</h4>
          <ul class="space-y-3 text-sm text-gray-400">
            <li><a href="#home" class="hover:text-accent transition-colors">Home</a></li>
            <li><a href="#about" class="hover:text-accent transition-colors">Tentang Kami</a></li>
            <li><a href="#services" class="hover:text-accent transition-colors">Layanan</a></li>
            <li><a href="#faq" class="hover:text-accent transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div class="lg:col-span-3" data-aos="fade-up" data-aos-delay="300">
          <h4 class="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Info Kontak</h4>
          <ul class="space-y-5 text-sm text-gray-400">
            <li class="flex items-center gap-4 group">
               <div class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 text-accent group-hover:bg-accent group-hover:text-dark transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                 </svg>
               </div>
               <div>
                  <span class="block text-xs uppercase text-gray-500 font-bold tracking-wider mb-1">WhatsApp</span>
                  <a href="https://wa.me/6285121152820" target="_blank" class="text-white hover:text-accent transition-colors">+62 851 2115 2820</a>
               </div>
            </li>

            <li class="flex items-center gap-4 group">
                <div class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 text-accent group-hover:bg-accent group-hover:text-dark transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                   <span class="block text-xs uppercase text-gray-500 font-bold tracking-wider mb-1">Email</span>
                   <a href="mailto:majak.amanpajak2025@gmail.com" class="text-white hover:text-accent transition-colors break-all">majak.amanpajak2025@gmail.com</a>
                </div>
            </li>

            <li class="flex items-start gap-4 group">
              <div class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 text-accent group-hover:bg-accent group-hover:text-dark transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
               </div>
               <div>
                <span class="block text-xs uppercase text-gray-500 font-bold tracking-wider mb-1">Alamat Kantor</span>
                <span class="leading-relaxed text-gray-300">
                    Gg. Gatot Kaca No.04, Kampung Jawa Atas No.04, <br>
                    Sungailiat, Kabupaten Bangka, <br>
                    Kepulauan Bangka Belitung, 33215
                </span>
               </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-10 mt-10">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
            <p class="text-sm text-gray-500 text-center md:text-left w-full">
                &copy; 2025 MAJAK. All rights reserved.
            </p>
        </div>
      </div>
    </div>
  </footer>
</template>