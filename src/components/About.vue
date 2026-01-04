<script setup>
const stats = [
  { value: '100+', label: 'Klien yang didampingi secara profesional' },
  { value: 'Ratusan', label: 'Pelaporan dan administrasi pajak ditangani' },
  { value: 'Professional', label: 'Berpengalaman dalam pendampingan kewajiban perpajakan' },
];

const values = [
  'Pendampingan pajak sesuai regulasi yang berlaku',
  'Proses administrasi tertib dan terdokumentasi',
  'Komunikasi jelas dan profesional',
  'Fokus pada kepastian dan ketenangan klien',
];
</script>

<template>
  <section id="about" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center mb-16" data-aos="fade-up">
        <h2 class="text-3xl lg:text-4xl font-heading font-bold text-dark mb-4 leading-tight">
          Setiap Bisnis Memiliki Tanggung Jawab Pajak yang Perlu Dikelola dengan Tepat
        </h2>
        <p class="mt-4 max-w-3xl text-lg text-gray-600 lg:mx-auto leading-relaxed">
          MAJAK hadir sebagai partner pajak yang membantu pengusaha, UMKM dan profesional memahami, mengelola, dan menuntaskan kewajiban perpajakan secara tertib dan sesuai ketentuan dengan pendekatan yang humanis dan berorientasi pada kepastian.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <!-- Value Statements -->
        <div data-aos="fade-right">
             <div class="bg-light p-8 rounded-2xl border border-blue-50 relative overflow-hidden">
                 <div class="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
                 <h3 class="text-2xl font-bold font-heading text-primary mb-6 relative z-10">Nilai & Pendekatan Kami</h3>
                 <ul class="space-y-4 relative z-10">
                    <li v-for="(value, index) in values" :key="index" class="flex items-start">
                        <span class="flex-shrink-0 h-6 w-6 rounded-full bg-secondary flex items-center justify-center text-white mr-3 mt-0.5">
                            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </span>
                        <span class="text-gray-700 font-medium">{{ value }}</span>
                    </li>
                 </ul>
             </div>
        </div>
        
        <!-- Abstract Illustration layout for balance (or just more text/image) - using stats here or separate? 
             Prompt mentions "STATISTIK" separate, but fit well in About section loop. 
             Let's put stats below as a bar or cards.
        -->
        <div class="grid grid-cols-1 gap-6" data-aos="fade-left">
             <!-- Keeping it simple on the right side, maybe an image or just clean layout. 
                  Let's focus on the 'Trust' aspect. 
             -->
             <div class="bg-primary text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                <div class="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-accent rounded-full opacity-20 blur-2xl"></div>
                <blockquote class="relative z-10 italic text-lg leading-relaxed opacity-90">
                    "Fokus kami adalah memberikan ketenangan pikiran bagi Anda, sehingga Anda bisa fokus sepenuhnya mengembangkan bisnis tanpa rasa was-was akan masalah perpajakan."
                </blockquote>
                <div class="mt-6 flex items-center">
                    <div class="h-px w-10 bg-accent mr-4"></div>
                    <span class="font-bold text-accent">Tim MAJAK</span>
                </div>
             </div>
        </div>
      </div>

      <!-- Statistics Section -->
      <div id="stats" class="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-16" data-aos="fade-up">
        <div v-for="(stat, index) in stats" :key="index" class="text-center p-6 hover:bg-light rounded-xl transition-colors duration-300">
            <div class="text-4xl lg:text-5xl font-bold text-secondary mb-2">{{ stat.value }}</div>
            <div class="text-sm uppercase tracking-wide text-gray-400 font-semibold mb-2">Statistik</div>
            <p class="text-gray-700 font-medium">{{ stat.label }}</p>
        </div>
      </div>

    </div>
  </section>
</template>
