<script setup>
// Data langkah-langkah agar kodingan lebih rapi dan mudah diedit
const steps = [
  {
    number: 1,
    title: "Konsultasi Gratis",
    desc: "Ceritakan kebutuhan pajak Anda, kami analisis dan beri solusi awal tanpa biaya."
  },
  {
    number: 2,
    title: "Pilih Layanan",
    desc: "Tentukan layanan sesuai kebutuhan dan masalah pajak Anda."
  },
  {
    number: 3,
    title: "Lengkapi Data",
    desc: "Kirimkan dokumen atau informasi yang dibutuhkan dengan aman."
  },
  {
    number: 4,
    title: "Tenang & Fokus",
    desc: "Tim MaJak mengurus perhitungan, pembayaran, hingga pelaporan. Anda tinggal fokus membangun bisnis."
  }
];
</script>

<template>
  <section class="py-20 bg-light relative overflow-hidden">
    <div class="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
        
        <div class="lg:w-1/2 sticky top-24" data-aos="fade-right">
          <h2 class="text-4xl lg:text-5xl font-extrabold text-secondary mb-6 leading-tight">
            4 Langkah Mudah <br/>
            <span class="text-primary relative inline-block">
              Bersama Majak
              <svg class="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="3" fill="none" /></svg>
            </span>
          </h2>
          <p class="text-gray-700 text-lg mb-8 leading-relaxed font-medium">
            Kami menyederhanakan proses perpajakan yang rumit menjadi langkah-langkah praktis agar Anda bisa tetap tenang dan fokus pada pengembangan bisnis.
          </p>
          <a href="https://wa.me/6285121152820" target="_blank" class="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-black px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group">
            Mulai Konsultasi Gratis
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div class="lg:w-1/2 w-full space-y-6">
          <div v-for="(step, index) in steps" :key="index" 
               class="flex gap-6 p-6 rounded-2xl bg-white shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/30 transition-all duration-300 group cursor-default"
               data-aos="fade-up" :data-aos-delay="index * 100">
            
            <div class="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 text-secondary group-hover:bg-primary group-hover:text-black flex items-center justify-center font-bold text-xl transition-colors duration-300">
              {{ step.number }}
            </div>
            
            <div>
              <h3 class="font-bold text-xl text-secondary group-hover:text-primary transition-colors mb-2">
                {{ step.title }}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                {{ step.desc }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>