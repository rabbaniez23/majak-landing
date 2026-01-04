<script setup>
</script>

<template>
  <section id="home" class="relative bg-gradient-to-br from-primary to-secondary text-white pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
    <!-- Decorative Elements -->
    <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent opacity-10 rounded-full blur-3xl"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div data-aos="fade-right" data-aos-duration="1000">
            <span class="inline-block py-1 px-3 rounded-full bg-white/10 text-accent text-sm font-semibold tracking-wide mb-6 backdrop-blur-sm">
                #Layanan Perpajakan Berpengalaman dan Terukur di Indonesia
            </span>
          <h1 class="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight mb-6">
            Pajak Terkelola dengan Rapi, <span class="text-accent">Bisnis Melangkah Lebih Pasti</span>
          </h1>
          <p class="text-lg lg:text-xl text-blue-50 mb-8 leading-relaxed max-w-2xl">
            MAJAK hadir sebagai partner pajak profesional yang memastikan setiap kewajiban perpajakan dikelola secara tepat, strategis, dan sesuai ketentuan, agar Anda dapat fokus pada hal yang paling penting: bisnis Anda.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="https://wa.me/6285121152820" target="_blank" class="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-dark bg-accent hover:bg-yellow-400 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Konsultasi Gratis
            </a>
            <a href="#contact" class="inline-flex justify-center items-center px-8 py-4 border-2 border-white text-base font-bold rounded-full text-white hover:bg-white hover:text-primary transition-all duration-300">
              Hubungi Kami
            </a>
          </div>

          <p class="text-sm font-medium text-blue-100 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            Dipercaya oleh Badan Usaha, Profesional, dan UMKM di berbagai sektor.
          </p>
        </div>

        <!-- Visual / Image -->
        <div class="relative lg:h-full flex justify-center lg:justify-end" data-aos="fade-left" data-aos-duration="1000">
            <div class="relative max-w-md lg:max-w-full">
                <!-- Placeholder for Founder Image -->
                <div class="bg-gray-300 w-80 h-96 lg:w-96 lg:h-[30rem] rounded-2xl shadow-2xl relative z-10 overflow-hidden border-4 border-white/20">
                     <!-- In a real scenario, use an img tag here. -->
                     <img src="https://placehold.co/600x800/1E6FA8/FFFFFF?text=Brian+Founder" alt="Foto Founder (Brian)" class="w-full h-full object-cover">
                </div>
                <!-- Decorative Frame -->
                <div class="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent rounded-2xl z-0 hidden sm:block"></div>
                
                <!-- Floating Badge -->
                <div class="absolute bottom-10 left-[-20px] bg-white p-4 rounded-lg shadow-xl z-20 max-w-[200px] hidden sm:block">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-green-100 rounded-full text-green-600">
                             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <p class="text-xs text-gray-500">Klien Puas</p>
                            <p class="text-lg font-bold text-dark">100+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    
    <!-- Live Chat Mockup (Visual Only as per strict requirement) -->
    <div class="fixed bottom-6 right-6 z-40 animate-bounce cursor-pointer group">
         <a href="https://wa.me/6285121152820" target="_blank" class="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
               <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.683-2.031-.967-.272-.297-.471-.446-.718-.149-.248.595-.967 1.24-.867 1.488.099.248.422.372.72.521.297.149 1.256.602 3.04.597 1.761.769 2.919 1.156 3.402 1.194.722.038 1.15-.038 1.637-.198.487-.16 1.189-.487 1.361-.955.174-.521.174-.967.124-1.066-.049-.099-.198-.149-.447-.297z"/>
            </svg>
        </a>
        <div class="absolute right-16 top-2 bg-white px-3 py-1 rounded-lg shadow-md text-xs font-medium text-dark whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Chat via WhatsApp
        </div>
    </div>
  </section>
</template>
