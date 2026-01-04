<script setup>
const services = [
  {
    title: 'Konsultasi Gratis',
    description: 'Sesi konsultasi awal untuk memahami kondisi dan kebutuhan perpajakan Anda.',
    icon: 'chat'
  },
  {
    title: 'Pelaporan SPT Tahunan',
    description: 'Penyusunan dan pelaporan SPT Tahunan Orang Pribadi maupun Badan.',
    icon: 'document'
  },
  {
    title: 'Pelaporan SPT Masa',
    description: 'Pelaporan PPh 21/26, PPh Unifikasi, PPN, dll secara terjadwal.',
    icon: 'calendar'
  },
  {
    title: 'Administrasi & Pendampingan',
    description: 'NPWP, PKP, SP2DK, aktivasi Coretax, dan administrasi lainnya.',
    icon: 'shield'
  }
];

const steps = [
    { title: 'Pilih Layanan', desc: 'Tentukan layanan sesuai kebutuhan' },
    { title: 'Lengkapi Data', desc: 'Kirimkan dokumen yang dibutuhkan' },
    { title: 'Tenang & Fokus', desc: 'Tim MAJAK mengurus seluruh proses' },
];
</script>

<template>
  <section id="services" class="py-20 bg-light relative overflow-hidden">
     <!-- Background Pattern -->
     <div class="absolute inset-0 opacity-40" style="background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 32px 32px;"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="text-secondary font-semibold tracking-wider uppercase text-sm">Layanan MAJAK</span>
        <h2 class="text-3xl lg:text-4xl font-heading font-bold text-dark mt-2 mb-4">
          Layanan Perpajakan yang Dirancang untuk Kebutuhan Bisnis Anda
        </h2>
      </div>

      <!-- Services Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <div 
            v-for="(service, index) in services" 
            :key="index" 
            class="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
        >
            <div class="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <!-- Simple Icons based on type -->
                <svg v-if="service.icon === 'chat'" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-secondary group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <svg v-if="service.icon === 'document'" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-secondary group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <svg v-if="service.icon === 'calendar'" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-secondary group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <svg v-if="service.icon === 'shield'" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-secondary group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            </div>
            <h3 class="text-xl font-bold text-dark mb-3">{{ service.title }}</h3>
            <p class="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                {{ service.description }}
            </p>
            <a href="https://wa.me/6285121152820" class="text-primary font-semibold text-sm hover:text-secondary inline-flex items-center">
                Info Lengkap <span class="ml-1">&rarr;</span>
            </a>
        </div>
      </div>

      <!-- Value Bar -->
      <div class="bg-primary rounded-2xl p-8 mb-20 shadow-lg text-center" data-aos="zoom-in">
        <div class="flex flex-wrap justify-center gap-8 md:gap-16 text-white/90 font-medium text-lg lg:text-xl font-heading tracking-wide">
            <span>Kepastian</span>
            <span class="text-accent">•</span>
            <span>Ketertiban</span>
            <span class="text-accent">•</span>
            <span>Kepatuhan</span>
             <span class="text-accent">•</span>
            <span>Kepercayaan</span>
        </div>
      </div>

       <!-- Cara Kerja -->
      <div class="text-center">
            <h3 class="text-2xl font-bold text-dark mb-12">Cara Kerja</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                 <!-- Connector Line (Desktop) -->
                <div class="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

                <div v-for="(step, index) in steps" :key="index" class="relative group" data-aos="fade-up" :data-aos-delay="index*150">
                    <div class="w-16 h-16 mx-auto bg-white border-2 border-secondary text-primary rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors duration-300 relative z-10">
                        {{ index + 1 }}
                    </div>
                    <h4 class="text-lg font-bold text-dark mb-2">{{ step.title }}</h4>
                    <p class="text-gray-600">{{ step.desc }}</p>
                </div>
            </div>
      </div>

    </div>
  </section>
</template>
