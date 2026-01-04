<script setup>
const founderImage = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";
</script>

<template>
  <section id="services" class="relative min-h-screen flex flex-col justify-center bg-gradient-to-r from-secondary to-primary overflow-hidden py-24 lg:py-32">
    <!-- Subtle Background Pattern -->
    <div class="absolute inset-0 opacity-5 pointer-events-none" 
         style="background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px); background-size: 60px 60px;">
    </div>
    
    <!-- Softer Decorative Blobs -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 blur-[120px] rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent opacity-10 blur-[120px] rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full z-10 flex flex-col items-center">
      
      <div class="text-center mb-20 max-w-4xl mx-auto" data-aos="fade-up">
        <span class="inline-block px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white text-[11px] font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
          Layanan Unggulan
        </span>
        <h1 class="font-heading font-bold text-3xl md:text-5xl lg:text-5xl text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
          SOLUSI <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">PERPAJAKAN</span> TERINTEGRASI
        </h1>
        <p class="text-blue-50 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
          Strategi perpajakan komprehensif yang dirancang khusus untuk memastikan keamanan, kepatuhan, dan pertumbuhan bisnis Anda secara berkelanjutan.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full mb-24">
        
        <!-- Left Column -->
        <div class="lg:col-span-3 space-y-14 order-2 lg:order-1">
          <div class="group flex flex-col items-center lg:items-end text-center lg:text-right" data-aos="fade-right" data-aos-delay="100">
            <div class="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:border-accent group-hover:shadow-[0_0_25px_rgba(255,145,77,0.3)] transition-all duration-500 shadow-md group-hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white group-hover:text-dark transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 class="text-white font-bold text-lg mb-2 group-hover:text-accent transition-colors font-heading tracking-tight">Konsultasi Gratis</h3>
            <p class="text-blue-50/80 text-sm leading-relaxed font-light">
              Diskusi awal tanpa biaya untuk memetakan kebutuhan pajak bisnis Anda secara tepat.
            </p>
          </div>

          <div class="group flex flex-col items-center lg:items-end text-center lg:text-right" data-aos="fade-right" data-aos-delay="200">
            <div class="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:border-accent group-hover:shadow-[0_0_25px_rgba(255,145,77,0.3)] transition-all duration-500 shadow-md group-hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white group-hover:text-dark transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-white font-bold text-lg mb-2 group-hover:text-accent transition-colors font-heading tracking-tight">Pelaporan SPT Masa</h3>
            <p class="text-blue-50/80 text-sm leading-relaxed font-light">
              Pengelolaan dan pelaporan pajak bulanan yang akurat dan tepat waktu.
            </p>
          </div>
        </div>

        <!-- Center Image -->
        <div class="lg:col-span-6 flex justify-center order-1 lg:order-2 relative" data-aos="zoom-in" data-aos-duration="1000">
          <div class="absolute inset-0 bg-white/10 opacity-30 rounded-full blur-[80px] transform scale-75 translate-y-10 pointer-events-none"></div>
          <div class="relative z-10 w-full max-w-[280px] md:max-w-[340px]">
            <div class="relative rounded-[2.5rem] p-2 border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
              <img :src="founderImage" alt="Brian - Founder Majak Tax Services" class="w-full h-auto object-cover rounded-[2rem] shadow-inner brightness-105 contrast-105 filter grayscale-[10%] hover:grayscale-0 transition-all duration-700">
              
              <!-- Floating Badge -->
              <div class="absolute bottom-8 left-1/2 -translate-x-1/2 bg-dark/90 backdrop-blur-md border border-white/10 px-6 py-2.5 rounded-full shadow-xl hover:scale-105 transition-transform cursor-default">
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                  <p class="text-white text-xs font-bold whitespace-nowrap tracking-wide font-heading">BRIAN <span class="text-white/40 mx-2">|</span> <span class="text-accent">FOUNDER</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="lg:col-span-3 space-y-14 order-3 lg:order-3">
          <div class="group flex flex-col items-center lg:items-start text-center lg:text-left" data-aos="fade-left" data-aos-delay="100">
            <div class="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:border-accent group-hover:shadow-[0_0_25px_rgba(255,145,77,0.3)] transition-all duration-500 shadow-md group-hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white group-hover:text-dark transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-white font-bold text-lg mb-2 group-hover:text-accent transition-colors font-heading tracking-tight">Daftar Merek HKI</h3>
            <p class="text-blue-50/80 text-sm leading-relaxed font-light">
              Pendaftaran merek usaha anda, syarat hanya logo, KTP dan tandatangan.
            </p>
          </div>

          <div class="group flex flex-col items-center lg:items-start text-center lg:text-left" data-aos="fade-left" data-aos-delay="200">
            <div class="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:border-accent group-hover:shadow-[0_0_25px_rgba(255,145,77,0.3)] transition-all duration-500 shadow-md group-hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white group-hover:text-dark transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="text-white font-bold text-lg mb-2 group-hover:text-accent transition-colors font-heading tracking-tight">Pelaporan SPT Tahunan</h3>
            <p class="text-blue-50/80 text-sm leading-relaxed font-light">
              Penyusunan laporan tahunan yang komprehensif untuk kepatuhan penuh.
            </p>
          </div>
        </div>
      </div>

      <!-- Values Grid -->
      <div class="w-full max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="300">
        <div class="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
            
            <div class="flex flex-col items-center gap-3 group/item cursor-default">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent group-hover/item:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span class="text-white/90 font-bold text-xs tracking-widest uppercase font-heading group-hover/item:text-white transition-colors">Kepastian</span>
            </div>

            <div class="flex flex-col items-center gap-3 group/item cursor-default">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent group-hover/item:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
               </svg>
              <span class="text-white/90 font-bold text-xs tracking-widest uppercase font-heading group-hover/item:text-white transition-colors">Ketertiban</span>
            </div>

            <div class="flex flex-col items-center gap-3 group/item cursor-default">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent group-hover/item:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
               </svg>
              <span class="text-white/90 font-bold text-xs tracking-widest uppercase font-heading group-hover/item:text-white transition-colors">Kepatuhan</span>
            </div>

            <div class="flex flex-col items-center gap-3 group/item cursor-default">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent group-hover/item:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
               </svg>
              <span class="text-white/90 font-bold text-xs tracking-widest uppercase font-heading group-hover/item:text-white transition-colors">Kepercayaan</span>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>