<script setup>
// Image placeholder (bisa diganti dengan foto asli nanti)
const aboutImage = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80";
</script>

<template>
  <section id="about" class="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-white">
    
    <div class="absolute inset-0 bg-gradient-to-br from-maj-cyan to-secondary -z-20 opacity-10"></div>
    <div class="absolute inset-0 bg-white/40 -z-10 mix-blend-overlay"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-20">
        
        <div class="lg:w-1/2 relative order-2 lg:order-1 mt-8 lg:mt-0" data-aos="fade-right">
          <div class="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
            <div class="absolute top-10 left-0 w-3/4 h-[90%] bg-secondary/10 backdrop-blur-sm rounded-tr-[80px] rounded-bl-[80px] -z-10 border border-secondary/10"></div>
            
            <div class="relative h-full flex items-center justify-center lg:justify-start pl-4 lg:pl-8">
              <div class="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white w-full max-w-md transform hover:scale-[1.02] transition-transform duration-500 bg-white">
                <img :src="aboutImage" alt="Tax Consultant Team" class="w-full h-full object-cover aspect-[4/5]">
                
                <div class="absolute bottom-6 right-6 bg-white/95 backdrop-blur p-3 rounded-xl shadow-lg flex items-center gap-3 animate-bounce" style="animation-duration: 4s;">
                  <div class="bg-green-100 p-2 rounded-lg text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.491 4.491 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs text-gray-500">Status</p>
                    <p class="font-bold text-gray-800 text-sm">Terpercaya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:w-1/2 flex flex-col justify-center order-1 lg:order-2" data-aos="fade-left">
          <h1 class="text-3xl lg:text-5xl font-extrabold text-secondary leading-tight mb-6">
             Setiap Bisnis Memiliki <span class="text-primary drop-shadow-sm">Tanggung Jawab Pajak</span> yang Perlu Dikelola dengan Tepat
          </h1>
          <p class="text-gray-600 text-lg leading-relaxed mb-10 font-medium">
             MAJAK hadir sebagai partner pajak yang membantu pengusaha, UMKM dan profesional memahami, mengelola, dan menuntaskan kewajiban perpajakan secara tertib dan sesuai ketentuan dengan pendekatan yang humanis.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div class="space-y-3 bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 class="font-bold text-lg text-secondary leading-tight">Pendampingan Ahli</h3>
              </div>
              <p class="text-sm text-gray-600 leading-relaxed">
                 Layanan ditangani oleh tim yang memahami regulasi perpajakan dan praktik lapangan secara rapi dan terukur.
              </p>
            </div>

            <div class="space-y-3 bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                </div>
                <h3 class="font-bold text-lg text-secondary leading-tight">Solusi Bisnis</h3>
              </div>
              <p class="text-sm text-gray-600 leading-relaxed">
                 Pendekatan yang kami gunakan selalu disesuaikan dengan kondisi usaha dan kebutuhan spesifik klien.
              </p>
            </div>
          </div>

          <div class="space-y-3 mb-10 bg-white/50 p-6 rounded-2xl border border-gray-200">
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700 font-medium text-sm">Pendampingan pajak sesuai regulasi yang berlaku</span>
            </div>
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700 font-medium text-sm">Proses administrasi tertib dan terdokumentasi</span>
            </div>
            <div class="flex items-start gap-3">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700 font-medium text-sm">Komunikasi jelas dan profesional</span>
            </div>
          </div>

          <div>
            <a href="#services" class="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 ring-4 ring-primary/20">
              LIHAT LAYANAN KAMI
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative -mt-16 z-20 pb-20">
    <div class="container mx-auto px-6">
      <div class="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 lg:p-12 border border-gray-100">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
          
          <div class="px-4 py-4 md:py-0">
            <h3 class="text-4xl lg:text-5xl font-extrabold text-secondary mb-2">100+</h3>
            <p class="text-gray-600 font-medium text-sm lg:text-base">Klien yang didampingi secara profesional</p>
          </div>
          
          <div class="px-4 py-4 md:py-0">
            <h3 class="text-4xl lg:text-5xl font-extrabold text-secondary mb-2">Ratusan</h3>
            <p class="text-gray-600 font-medium text-sm lg:text-base">Pelaporan dan administrasi pajak ditangani</p>
          </div>
          
          <div class="px-4 py-4 md:py-0">
            <h3 class="text-4xl lg:text-5xl font-extrabold text-secondary mb-2">Expert</h3>
            <p class="text-gray-600 font-medium text-sm lg:text-base">Dalam pendampingan kewajiban perpajakan</p>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>