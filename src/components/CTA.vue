<script setup>
const founderImage = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; // Placeholder image Brian
</script>

<template>
  <!-- Added negative margin-bottom to create overlap with footer -->
  <section class="relative z-10 px-4 sm:px-6 lg:px-8 -mb-32 pointer-events-none">
    <div class="max-w-7xl mx-auto pointer-events-auto">
      <div class="bg-primary rounded-[3rem] p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
        
        <!-- Background Patterns -->
        <div class="absolute inset-0 opacity-10" 
             style="background-image: linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px); background-size: 40px 40px;">
        </div>

        <!-- Left Content -->
        <div class="lg:w-1/3 text-center lg:text-left relative z-10">
          <div class="inline-block bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-bold tracking-wider mb-4 border border-white/10 shadow-sm">
            SUBSCRIBE NEWSLETTER
          </div>
          <h2 class="text-3xl lg:text-4xl font-heading font-extrabold text-white leading-tight mb-2 drop-shadow-md">
            Tetap Terinformasi.
          </h2>
          <h2 class="text-3xl lg:text-4xl font-heading font-extrabold text-accent leading-tight drop-shadow-md">
            Tetap Patuh.<br>Fokus Bertumbuh.
          </h2>
        </div>

        <!-- Center Image (Founder) -->
        <div class="lg:w-1/3 relative z-10 flex justify-center mt-8 lg:-mt-24 lg:-mb-12 order-last lg:order-none">
          <div class="relative w-64 h-64 lg:w-80 lg:h-80">
             <div class="absolute inset-0 bg-accent rounded-full blur-[60px] opacity-40 animate-pulse"></div>
             <img :src="founderImage" alt="Brian - Founder" class="relative w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-500 mask-image-b-fade">
             <!-- <img :src="founderImage" alt="Brian" class="absolute bottom-0 left-1/2 -translate-x-1/2 h-[120%] w-auto object-cover drop-shadow-2xl brightness-110 contrast-110"> -->
          </div>
        </div>

        <!-- Right Content (Form/Action) -->
        <div class="lg:w-1/3 w-full relative z-10">
            <p class="text-blue-100 text-sm mb-4 font-medium text-center lg:text-left">
              Masukan email anda di form berikut untuk update info pajak terbaru
            </p>
            <div class="bg-white/10 backdrop-blur-sm p-1.5 rounded-full border border-white/20 flex shadow-lg">
                <input type="email" placeholder="Email Anda..." class="bg-transparent border-none text-white placeholder-blue-200 focus:ring-0 w-full px-4 py-3 outline-none" />
                <button class="bg-accent hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md">
                    SUBMIT
                </button>
            </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Optional: utility mostly handled by Tailwind */
.mask-image-b-fade {
    mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
}
</style>