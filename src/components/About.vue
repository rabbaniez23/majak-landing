<script setup>
// Image placeholder (bisa diganti dengan foto asli nanti)
const aboutImage = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80";
</script>

<template>
  <section id="about" class="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-white">
    
    <div class="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 -z-20"></div>
    <div class="absolute inset-0 bg-white/60 -z-10 backdrop-blur-[1px]"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-20">
        
        <div class="lg:w-1/2 relative order-2 lg:order-1 mt-8 lg:mt-0" data-aos="fade-right">
          <div class="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
            <div class="absolute top-10 left-0 w-3/4 h-[90%] bg-secondary/10 backdrop-blur-sm rounded-tr-[80px] rounded-bl-[80px] -z-10 border border-secondary/10"></div>
            
            <div class="relative h-full flex items-center justify-center lg:justify-start pl-4 lg:pl-8">
              <div class="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white w-full max-w-md transform hover:scale-[1.02] transition-transform duration-500 bg-white group">
                <img :src="aboutImage" alt="Tax Consultant Team" class="w-full h-full object-cover aspect-[4/5] filter sepia-[0.1] group-hover:sepia-0 transition-all duration-500">
                
                <div class="absolute bottom-6 right-6 bg-white/95 backdrop-blur p-3 rounded-xl shadow-lg flex items-center gap-3 animate-bounce" style="animation-duration: 4s;">
                  <div class="bg-primary/10 p-2 rounded-lg text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Status</p>
                    <p class="font-bold text-gray-800 text-sm">Terpercaya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:w-1/2 flex flex-col justify-center order-1 lg:order-2" data-aos="fade-left">
          <h2 class="text-sm font-bold text-accent tracking-widest uppercase mb-4">Tentang Kami</h2>
          <h1 class="text-3xl lg:text-4xl font-extrabold text-primary leading-tight mb-6">
             Setiap Bisnis Memiliki <span class="text-secondary drop-shadow-sm">Tanggung Jawab Pajak</span> yang Perlu Dikelola dengan Tepat
          </h1>
          <p class="text-gray-600 text-base leading-relaxed mb-10 font-normal">
             MAJAK hadir sebagai partner pajak yang membantu pengusaha, UMKM dan profesional memahami, mengelola, dan menuntaskan kewajiban perpajakan secara tertib dan sesuai ketentuan dengan pendekatan yang humanis.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div class="space-y-3 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 class="font-bold text-lg text-gray-800 leading-tight">Pendampingan Ahli</h3>
              </div>
              <p class="text-sm text-gray-500 leading-relaxed font-light">
                 Layanan ditangani oleh tim yang memahami regulasi perpajakan dan praktik lapangan secara rapi dan terukur.
              </p>
            </div>

            <div class="space-y-3 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300 group">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-10 h-10 rounded-lg bg-accent/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 class="font-bold text-lg text-gray-800 leading-tight">Solusi Bisnis</h3>
              </div>
              <p class="text-sm text-gray-500 leading-relaxed font-light">
                 Pendekatan yang kami gunakan selalu disesuaikan dengan kondisi usaha dan kebutuhan spesifik klien.
              </p>
            </div>
          </div>

          <div class="space-y-4 mb-10 bg-gray-50/80 p-6 rounded-2xl border border-gray-100">
            <div class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-700 font-medium text-sm">Pendampingan pajak sesuai regulasi yang berlaku</span>
            </div>
            <div class="flex items-start gap-3">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-700 font-medium text-sm">Proses administrasi tertib dan terdokumentasi</span>
            </div>
            <div class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-700 font-medium text-sm">Komunikasi jelas dan profesional</span>
            </div>
          </div>

          <div>
            <a href="#services" class="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1">
              LIHAT LAYANAN KAMI
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative -mt-12 z-20 pb-20">
    <div class="container mx-auto px-6">
      <div class="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 lg:p-12 border border-gray-100" data-aos="fade-up">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          
          <div class="px-4 py-4 md:py-0">
            <h3 class="text-4xl lg:text-5xl font-extrabold text-primary mb-2">100+</h3>
            <p class="text-gray-500 font-medium text-sm lg:text-base">Klien yang didampingi secara profesional</p>
          </div>
          
          <div class="px-4 py-4 md:py-0">
            <h3 class="text-4xl lg:text-5xl font-extrabold text-primary mb-2">Ratusan</h3>
            <p class="text-gray-500 font-medium text-sm lg:text-base">Pelaporan dan administrasi pajak ditangani</p>
          </div>
          
          <div class="px-4 py-4 md:py-0">
            <h3 class="text-4xl lg:text-5xl font-extrabold text-primary mb-2">Expert</h3>
            <p class="text-gray-500 font-medium text-sm lg:text-base">Dalam pendampingan kewajiban perpajakan</p>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>