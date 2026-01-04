<script setup>
const founderImage = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";
</script>

<template>
  <section id="services" class="relative min-h-screen flex flex-col justify-center bg-hero-gradient overflow-hidden py-20">
    <div class="absolute inset-0 opacity-30 pointer-events-none" 
         style="background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px); background-size: 50px 50px;">
    </div>
    <div class="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary opacity-30 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col items-center">
      
      <div class="text-center mb-16 max-w-3xl" data-aos="fade-up">
        <span class="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase mb-6">
          Service
        </span>
        <h1 class="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight drop-shadow-md">
          LAYANAN MAJAK
        </h1>
        <p class="text-blue-100 text-lg md:text-xl font-light">
          Layanan Perpajakan yang Dirancang untuk Kebutuhan Bisnis Anda
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full mb-20">
        
        <div class="lg:col-span-3 space-y-12 order-2 lg:order-1">
          <div class="group flex flex-col items-center lg:items-end text-center lg:text-right" data-aos="fade-right" data-aos-delay="100">
            <div class="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all duration-300 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.84.48 3.58 1.32 5.12.39.71.21 1.61-.43 2.15l-.06.05c-.65.54-.83 1.48-.36 2.22C3.61 23.36 5.8 24 8 24c4.65 0 8.65-3.23 9.73-7.62l.68-2.72c.3-.87.4-1.79.29-2.71L18.49 5.6C17.76 3.5 15.15 2 12 2zM9.5 8c.83 0 1.5.67 1.5 1.5S10.33 11 9.5 11 8 10.33 8 9.5 8.67 8 9.5 8zm5 0c.83 0 1.5.67 1.5 1.5S15.33 11 14.5 11 13 10.33 13 9.5 13.67 8 14.5 8z"/>
              </svg>
            </div>
            <h3 class="text-white font-bold text-lg mb-2 group-hover:text-accent transition-colors font-display">Konsultasi Gratis</h3>
            <p class="text-blue-100 text-sm leading-relaxed opacity-80 font-body">
              Diskusi awal tanpa biaya untuk memetakan kebutuhan pajak bisnis Anda secara tepat.
            </p>
          </div>

          <div class="group flex flex-col items-center lg:items-end text-center lg:text-right" data-aos="fade-right" data-aos-delay="200">
            <div class="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all duration-300 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
              </svg>
            </div>
            <h3 class="text-white font-bold text-lg mb-2 group-hover:text-accent transition-colors font-display">Pelaporan SPT Masa</h3>
            <p class="text-blue-100 text-sm leading-relaxed opacity-80 font-body">
              Pengelolaan dan pelaporan pajak bulanan yang akurat dan tepat waktu.
            </p>
          </div>
        </div>

        <div class="lg:col-span-6 flex justify-center order-1 lg:order-2 relative" data-aos="zoom-in">
          <div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60 rounded-full blur-2xl transform scale-75 translate-y-10"></div>
          <div class="relative z-10">
            <img :src="founderImage" alt="Brian - Founder Majak Tax Services" class="w-full max-w-[320px] md:max-w-[400px] h-auto object-cover rounded-3xl shadow-2xl border-4 border-white/10 ring-1 ring-white/20 transform hover:scale-[1.02] transition-transform duration-500">
            <div class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg">
              <p class="text-primary font-bold text-sm whitespace-nowrap font-display">Brian, Founder</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-3 space-y-12 order-3 lg:order-3">
          <div class="group flex flex-col items-center lg:items-start text-center lg:text-left" data-aos="fade-left" data-aos-delay="100">
            <div class="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all duration-300 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
            </div>
            <h3 class="text-white font-bold text-lg mb-2 group-hover:text-accent transition-colors font-display">Daftar Merek HKI</h3>
            <p class="text-blue-100 text-sm leading-relaxed opacity-80 font-body">
              Pendaftaran merek usaha anda, syarat hanya logo, KTP dan tandatangan.
            </p>
          </div>

          <div class="group flex flex-col items-center lg:items-start text-center lg:text-left" data-aos="fade-left" data-aos-delay="200">
            <div class="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all duration-300 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
            </div>
            <h3 class="text-white font-bold text-lg mb-2 group-hover:text-accent transition-colors font-display">Pelaporan SPT Tahunan</h3>
            <p class="text-blue-100 text-sm leading-relaxed opacity-80 font-body">
              Penyusunan laporan tahunan yang komprehensif untuk kepatuhan penuh.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="300">
        <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-full p-6 md:p-8 shadow-2xl relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            
            <div class="flex flex-col items-center gap-2 group/item cursor-default">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent group-hover/item:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
              <span class="text-white font-bold text-sm tracking-wide uppercase font-display">Kepastian</span>
            </div>

            <div class="flex flex-col items-center gap-2 group/item cursor-default">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent group-hover/item:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4h-4.68c-.09-.53-.56-.93-1.12-1.07V6.05c1.47.41 2.65 1.58 3.08 3.05.09.28.32.49.6.49h2.12z"/>
               </svg>
              <span class="text-white font-bold text-sm tracking-wide uppercase font-display">Ketertiban</span>
            </div>

            <div class="flex flex-col items-center gap-2 group/item cursor-default">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent group-hover/item:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"/>
               </svg>
              <span class="text-white font-bold text-sm tracking-wide uppercase font-display">Kepatuhan</span>
            </div>

            <div class="flex flex-col items-center gap-2 group/item cursor-default">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent group-hover/item:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
               </svg>
              <span class="text-white font-bold text-sm tracking-wide uppercase font-display">Kepercayaan</span>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>