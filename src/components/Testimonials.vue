<script setup>
const testimonials = [
  {
    name: 'Muhammad Nurdin',
    role: 'Direktur PT Mas Elpita Service',
    text: 'MAJAK membantu kami mengelola kewajiban perpajakan perusahaan secara tertib dan terstruktur. Pelaporan menjadi lebih rapi dan sesuai ketentuan. Partner yang dapat diandalkan.',
    initial: 'M',
    color: 'bg-blue-600'
  },
  {
    name: 'Muhammad Fatir',
    role: 'Ketua Koperasi Merah Putih',
    text: 'MAJAK memberikan pelayanan yang cepat, tepat, dan tentunya ramah. Seluruh proses administrasi perpajakan koperasi ditangani dengan baik dan dijelaskan secara jelas, sehingga kami merasa lebih tenang dan percaya.',
    initial: 'M',
    color: 'bg-emerald-600'
  },
  {
    name: 'Andi Pratama',
    role: 'Direktur CV',
    text: 'Terima kasih MAJAK atas penanganan SP2DK yang profesional. Proses jelas dan membuat kami merasa tenang.',
    initial: 'A',
    color: 'bg-orange-600'
  },
  {
    name: 'Ainin Pratiwi',
    role: 'Bendahara Koperasi Jasa Agro Hutan Lestari',
    text: 'MAJAK sangat membantu kami dalam pelaporan SPT Bulanan maupun SPT Tahunan koperasi. Prosesnya tertib, tepat waktu, dan dijelaskan dengan bahasa yang mudah dipahami. Kami merasa lebih tenang karena kewajiban perpajakan koperasi dikelola secara profesional.',
    initial: 'A',
    color: 'bg-purple-600'
  },
  {
    name: 'Gren Dinata',
    role: 'Direktur PT Gren Indo Teknika',
    text: 'Dengan pendampingan MAJAK, administrasi perusahaan menjadi lebih tertata, termasuk pengelolaan kewajiban perpajakan. Proses yang rapi dan terstruktur membuat kami dapat lebih fokus pada ekspansi dan pengembangan usaha.',
    initial: 'G',
    color: 'bg-red-600'
  },
  {
    name: 'Jhohan Adhi Ferdiansyah',
    role: 'Advokat J.A Ferdian & Partners',
    text: 'Czultan Brian memberikan edukasi dan pendampingan Coretax secara komprehensif, profesional, serta selaras dengan ketentuan hukum dan peraturan perundang-undangan perpajakan yang berlaku.',
    initial: 'J',
    color: 'bg-indigo-600'
  },
  {
    name: 'Naufal Rizki Rabbani',
    role: 'Founder Web Development',
    text: 'Basing k lh fal', 
    initial: 'N',
    color: 'bg-teal-600'
  },
  {
    name: 'Muhammad Dzaki',
    role: 'Founder Arachnova',
    text: 'MAJAK memberikan layanan dan pendampingan perpajakan dari A–Z. Seluruh proses dijelaskan dengan jelas dan ditangani secara profesional, sehingga kami dapat lebih fokus pada pengembangan produk dan bisnis.',
    initial: 'M',
    color: 'bg-cyan-600'
  },
  {
    name: 'Muhammad Qodri',
    role: 'Direktur PT Legal Kreatif',
    text: 'MAJAK membantu pengelolaan kewajiban perpajakan perusahaan kami yang kompleks secara profesional dan sesuai ketentuan, memberikan rasa aman dan ketenangan bagi manajemen.',
    initial: 'M',
    color: 'bg-pink-600'
  },
  {
    name: 'Rahmat Robuwan',
    role: 'Direktur PT Legalin Aja Dulu',
    text: 'MAJAK memberikan pendampingan profesional dalam pengelolaan kewajiban perpajakan perusahaan kami, sehingga memberikan kepastian dan ketenangan bagi manajemen.',
    initial: 'R',
    color: 'bg-lime-600'
  }
];
</script>

<template>
  <section class="py-20 bg-background-light relative border-t border-gray-100">
    <div class="container mx-auto px-6">
      
      <div class="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-8 gap-6">
        <div data-aos="fade-right">
          <h4 class="text-secondary font-bold text-sm tracking-widest uppercase mb-2">TESTIMONI</h4>
          <h2 class="text-3xl md:text-4xl font-extrabold text-black tracking-tight">Kata Mereka Mengenai Kami</h2>
        </div>
        
        <div class="flex flex-col items-end" data-aos="fade-left">
          <div class="flex items-center gap-1">
             <span class="text-xl font-bold text-gray-800">5.0</span>
             <div class="flex text-[#F4B400]">
               <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                 <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
               </svg>
             </div>
          </div>
           <div class="flex items-center gap-2 mt-1">
              <span class="text-sm text-gray-500">rating dari 100+ ulasan</span>
           </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(item, index) in testimonials" :key="index" 
             class="bg-white p-6 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-lg border border-gray-100 transition-all duration-300 flex flex-col h-full group"
             data-aos="fade-up" :data-aos-delay="index * 50">
          
          <div class="flex justify-between items-start mb-4">
            <div class="flex items-center gap-3">
              <div :class="`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${item.color}`">
                {{ item.initial }}
              </div>
              <div>
                <h3 class="font-bold text-gray-900 text-sm line-clamp-1">{{ item.name }}</h3>
                <p class="text-xs text-gray-500 line-clamp-1">{{ item.role }}</p>
              </div>
            </div>
            
            <img src="/majak-logo.png" alt="Majak" class="w-6 h-6 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
          </div>

          <div class="flex items-center gap-1 mb-3 text-[#F4B400]">
             <svg v-for="n in 5" :key="n" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
               <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
             </svg>
             <span class="text-xs text-gray-400 ml-1 font-medium">5 bulan lalu</span>
          </div>

          <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-4">
            {{ item.text }}
          </p>

          <!-- <div class="mt-auto">
             <button class="text-xs font-medium text-gray-400 hover:text-secondary transition-colors cursor-pointer">
               Baca Selengkapnya
             </button>
          </div> -->

        </div>
      </div>
      
    </div>
  </section>
</template>