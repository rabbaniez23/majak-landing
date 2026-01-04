<script setup>
</script>

<template>

  <section id="home" class="relative bg-gradient-to-r from-secondary to-primary text-white pt-10 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
    <!-- Background Decor (Adapted for Blue Theme) -->
    <div class="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 rounded-l-full translate-x-1/4 scale-150 blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-20 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl pointer-events-none"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        <!-- Text Content -->
        <div class="lg:w-1/2 space-y-6 text-center lg:text-left" data-aos="fade-right" data-aos-duration="1000">
            <!-- Badge -->
            <div class="flex flex-col lg:flex-row items-center gap-3 opacity-90 justify-center lg:justify-start">
                <div class="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-white font-bold text-xs tracking-wide">MAJAK.id</span>
                </div>
                <span class="text-blue-100 text-[10px] lg:text-xs font-semibold tracking-wider uppercase">Powered by Expert Tax Consultants</span>
            </div>

            <h1 class="text-lg lg:text-3xl font-heading font-semibold text-white leading-relaxed drop-shadow-sm">
                Pajak Terkelola dengan <span class="text-accent">Rapi</span>,<br/>
                Bisnis Melangkah <span class="text-accent">Lebih Pasti</span>.
            </h1>

            <p class="text-blue-50 text-base leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                MAJAK hadir sebagai partner pajak profesional yang memastikan setiap kewajiban perpajakan dikelola secara tepat, strategis, dan sesuai ketentuan, agar Anda dapat fokus pada hal yang paling penting: bisnis Anda.
            </p>

            <div class="border-l-4 border-accent pl-4 text-left inline-block">
                <p class="text-white text-sm font-semibold italic opacity-90">
                    "Dipercaya oleh Badan Usaha, Profesional, dan UMKM di berbagai sektor."
                </p>
            </div>

            <!-- Features Grid -->
            <div class="grid grid-cols-3 gap-4 max-w-sm mx-auto lg:mx-0 pt-2 pb-4">
                <div class="flex flex-col items-center gap-2 group cursor-default">
                    <div class="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-accent shadow-lg group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                        <!-- Icon Profesional (Briefcase) -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <span class="text-xs font-bold text-blue-100 uppercase tracking-wide">Profesional</span>
                </div>
                <div class="flex flex-col items-center gap-2 group cursor-default">
                    <div class="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-accent shadow-lg group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                         <!-- Icon Berpengalaman (Star) -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                    </div>
                    <span class="text-xs font-bold text-blue-100 uppercase tracking-wide">Berpengalaman</span>
                </div>
                 <div class="flex flex-col items-center gap-2 group cursor-default">
                    <div class="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-accent shadow-lg group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                         <!-- Icon Bersertifikat (AcademicCap or Certificate) -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <span class="text-xs font-bold text-blue-100 uppercase tracking-wide">Bersertifikat</span>
                </div>
            </div>

            <!-- CTA -->
            <div class="space-y-6">
                <a href="https://wa.me/6285121152820" target="_blank" class="inline-flex items-center gap-3 bg-accent text-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-xl transform hover:-translate-y-1 w-full lg:w-auto justify-center lg:justify-start group">
                    LIHAT BAGAIMANA KAMI MEMBANTU
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </a>
                <div class="text-blue-200 text-sm font-semibold flex items-center justify-center lg:justify-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z" clip-rule="evenodd" />
                    </svg>
                    Layanan Perpajakan Berpengalaman dan Terukur di Indonesia
                </div>
            </div>
        </div>

        <!-- Visual / Image -->
        <div class="lg:w-1/2 relative flex justify-center lg:justify-end" data-aos="fade-left" data-aos-duration="1000">
             <!-- Glow Effect -->
             <div class="absolute top-10 right-10 w-64 h-64 bg-accent rounded-full blur-3xl opacity-20 z-0"></div>
             
             <div class="relative z-10 w-full max-w-lg">
                <div class="relative bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-3xl shadow-2xl">
                    <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1Dh8gNZ_3mTsTA64IyQJO-ZpGYryhxLpFLPYVz2IPFRvOQgC08F8Dx7niotQHBGXbTGmmwrTgDCQkAQErHbBeH_vYqV9ysx1m08l2s5tLDEBR2wZu--rRzQuP67MORKbzrqT7fUtc_MrSHqgFOH0LBt7muRjR8tVWxJx0NOA-Exrn_SofP9Q4KD5Fu7v2mJ0FVrSnylXuJbIM_a0RiWdUgBm9rt1vpo56o9MxEjb8pzf-XVqVeP0m7iFRRqR8fZxMtytU9iD8gRtr" 
                      alt="Brian - Founder of Majak Tax Consultant" 
                      class="rounded-2xl w-full h-auto object-cover aspect-[4/5] shadow-inner"
                    />
                    
                    <!-- Floating Badge 1 -->
                    <div class="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce shadow-blue-900/10" style="animation-duration: 3s;">
                        <div class="bg-green-100 p-2 rounded-lg text-green-600">
                             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <p class="text-xs text-gray-500 font-medium">Status Pajak</p>
                            <p class="font-bold text-gray-800">Tepat Waktu</p>
                        </div>
                    </div>

                    <!-- Floating Badge 2 -->
                    <!-- <div class="absolute top-10 -right-8 bg-white p-3 rounded-xl shadow-xl flex flex-col items-center gap-1 animate-pulse shadow-blue-900/10">
                        <div class="bg-blue-100 p-2 rounded-full text-blue-600 mb-1">
                             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <p class="font-bold text-gray-800 text-xs">Terukur</p>
                    </div> -->
                </div>
             </div>
        </div>
      </div>
    </div>
    
    <!-- Wave Divider - Set to white to blend with next section (About.vue is usually white) -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg class="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path class="fill-white" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
    </div>

    <!-- Live Chat Mockup (Fixed) -->
    <div class="fixed bottom-6 right-6 z-40 animate-bounce cursor-pointer group">
         <a href="https://wa.me/6285121152820" target="_blank" class="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
               <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.683-2.031-.967-.272-.297-.471-.446-.718-.149-.248.595-.967 1.24-.867 1.488.099.248.422.372.72.521.297.149 1.256.602 3.04.597 1.761.769 2.919 1.156 3.402 1.194.722.038 1.15-.038 1.637-.198.487-.16 1.189-.487 1.361-.955.174-.521.174-.967.124-1.066-.049-.099-.198-.149-.447-.297z"/>
            </svg>
            <span class="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Chat Kami
            </span>
        </a>
    </div>
  </section>
</template>
