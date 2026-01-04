<script setup>
const testimonials = [
  {
    name: 'Muhammad Nurdin',
    role: 'Direktur PT Mas Elpita Service',
    // Avatar placeholder or valid initial
  },
  {
    name: 'Muhammad Fatir',
    role: 'Ketua Koperasi Merah Putih',
  },
  {
    name: 'Andi Pratama',
    role: 'Direktur CV',
  },
  {
    name: 'Ainin Pratiwi',
    role: 'Bendahara Koperasi Jasa Agro Hutan Lestari',
  },
  {
    name: 'Gren Dinata',
    role: 'Direktur PT Gren Indo Teknika',
  },
  {
    name: 'Jhohan Adhi Ferdiansyah',
    role: 'Advokat',
  },
  {
    name: 'Muhammad Dzaki',
    role: 'Founder Arachnova',
  },
  {
    name: 'Muhammad Qodri',
    role: 'Direktur PT Legal Kreatif',
  },
  {
    name: 'Rahmat Robuwan',
    role: 'Direktur PT Legalin Aja Dulu',
  },
];
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-heading font-bold text-dark mb-4">
          Dipercaya oleh Profesional & Badan Usaha
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
            Klien kami berasal dari berbagai latar belakang, mulai dari profesional perorangan, UMKM, hingga perusahaan besar yang mengutamakan kepatuhan dan ketertiban.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
            v-for="(client, index) in testimonials" 
            :key="index" 
            class="bg-light p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
        >
            <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {{ client.name.charAt(0) }}
                </div>
                <div>
                     <h4 class="font-bold text-dark text-base">{{ client.name }}</h4>
                     <p class="text-sm text-gray-500 mt-1">{{ client.role }}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>
