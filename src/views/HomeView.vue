<script setup>
import { onMounted, ref } from 'vue';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, EffectCreative } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

const modules = [Autoplay, Pagination, EffectCreative];

// State FAQ
const activeFaq = ref(null);
const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};

onMounted(() => {
  AOS.refresh(); 
});

// --- 1. DATA PORTFOLIO (HERO SLIDER) ---
const portfolioSlides = [
  {
    category: "Individual Case",
    client: "Dokter & Notaris",
    title: "Pelaporan SPT Tahunan Pribadi",
    result: "Hemat Waktu 100%",
    desc: "Membantu profesional sibuk mengurus pencatatan aset detail dan pelaporan tepat waktu tanpa denda.",
    color: "from-blue-600 to-cyan-500"
  },
  {
    category: "Corporate Case",
    client: "PT Teknologi Maju",
    title: "Tax Handling Bulanan & Tahunan",
    result: "Laporan Keuangan Rapih",
    desc: "Mengelola PPh 21, PPN, dan pelaporan badan usaha omzet > 4.8M yang sedang scaling-up.",
    color: "from-majak-orange to-red-500"
  },
  {
    category: "Special Case",
    client: "UMKM Berkembang",
    title: "Penyelesaian SP2DK & NPWP",
    result: "Administrasi Tuntas",
    desc: "Pendampingan respon surat SP2DK dan perapihan administrasi pajak dari nol.",
    color: "from-emerald-500 to-green-700"
  }
];

// --- 2. DATA LAYANAN (ICONS STYLE ala Referensi) ---
// Mengambil poin dari PDF
const serviceIcons = [
  {
    title: "Jasa Tahunan",
    desc: "SPT Individu & Badan beres tanpa stres. Kami urus sampai tuntas.",
    icon: "📅",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    title: "Jasa Bulanan",
    desc: "PPh 21/26, Unifikasi & PPN tepat waktu. Anda fokus bisnis saja.",
    icon: "📊",
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20"
  },
  {
    title: "Legal & Admin",
    desc: "NPWP, PKP, hingga SP2DK. Cepat, aman, dan profesional.",
    icon: "⚖️",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  {
    title: "Konsultasi",
    desc: "Analisis masalah pajak Anda dan temukan solusi paling efisien.",
    icon: "💬",
    color: "bg-green-500/10 text-green-400 border-green-500/20"
  }
];

// --- 3. DATA PRICING DETAIL (Sesuai PDF Hal 15) ---
//
const pricingPackages = [
  { 
    name: 'Karyawan Basic', 
    price: '149.000', 
    target: 'Penghasilan < 60 Juta',
    desc: 'SPT 1770SS',
    features: [
      'Lapor SPT 1770SS',
      'Bukti Penerimaan Elektronik',
      'Konsultasi Gratis',
      'Analisa Pajak Sederhana'
    ],
    popular: false
  },
  { 
    name: 'Karyawan Pro', 
    price: '299.000', 
    target: 'Penghasilan > 60 Juta',
    desc: 'SPT 1770S (1 Pemberi Kerja)',
    features: [
      'Lapor SPT 1770S',
      'Analisa Harta & Utang',
      'Bukti Penerimaan Elektronik',
      'Konsultasi Via WhatsApp'
    ],
    popular: true // Highlight card ini
  },
  { 
    name: 'Karyawan Plus', 
    price: '499.000', 
    target: '> 60 Juta (2 Tempat)',
    desc: 'SPT 1770S (Multisumber)',
    features: [
      'Lapor SPT 1770S',
      'Kredit Pajak PPh 21',
      'Analisa Harta Detail',
      'Bukti Penerimaan Elektronik'
    ],
    popular: false
  },
  { 
    name: 'Freelancer / Boss', 
    price: '999.000', 
    target: 'Pengusaha & Bebas',
    desc: 'SPT 1770 Lengkap',
    features: [
      'Lapor SPT 1770',
      'Rekonsiliasi Peredaran Bruto',
      'Laporan Keuangan Sederhana',
      'Konsultasi Prioritas'
    ],
    popular: false
  }
];

// --- 4. DATA FAQ ---
//
const faqs = [
  { q: "Kenapa harus pakai konsultan?", a: "Menghemat waktu, menghindari denda keterlambatan (sanksi s.d Rp 6jt/tahun), dan memastikan perhitungan akurat tanpa human error." },
  { q: "Apakah data saya aman?", a: "Sangat aman. Kerahasiaan data klien adalah prioritas utama kami sesuai kode etik perpajakan." },
  { q: "Bagaimana sistem pembayarannya?", a: "Pembayaran transparan di awal sesuai paket yang dipilih. Tidak ada biaya tersembunyi." }
];
</script>

<template>
  <div class="overflow-hidden bg-[#0f172a]">
    
    <section class="relative pt-32 pb-10">
      <div class="container mx-auto px-6">
        <div class="text-center mb-8" data-aos="fade-down">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">
                Solusi Pajak <span class="text-majak-orange">Terpercaya</span>
            </h1>
            <p class="text-gray-400">Lihat bagaimana kami membantu klien menyelesaikan masalah pajaknya.</p>
        </div>

        <swiper
          :effect="'creative'"
          :creativeEffect="{ prev: { translate: [0, 0, -400], opacity: 0 }, next: { translate: ['100%', 0, 0], opacity: 1 } }"
          :speed="800"
          :autoplay="{ delay: 5000 }"
          :pagination="{ clickable: true }"
          :modules="modules"
          class="w-full max-w-5xl mx-auto rounded-3xl border border-white/10 shadow-2xl bg-[#0b1221]"
        >
          <swiper-slide v-for="(slide, i) in portfolioSlides" :key="i">
            <div class="grid md:grid-cols-2 min-h-[400px]">
                <div :class="`bg-gradient-to-br ${slide.color} p-10 flex flex-col justify-end relative overflow-hidden`">
                    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                    <div class="relative z-10">
                        <span class="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold uppercase mb-2 inline-block">{{ slide.category }}</span>
                        <h2 class="text-3xl font-bold text-white">{{ slide.client }}</h2>
                    </div>
                </div>
                <div class="p-10 flex flex-col justify-center bg-[#1e293b]/50">
                    <h3 class="text-xl font-bold text-white mb-2">{{ slide.title }}</h3>
                    <p class="text-gray-400 mb-6 text-sm leading-relaxed">{{ slide.desc }}</p>
                    <div class="mt-auto border-l-4 border-majak-orange pl-4">
                        <p class="text-xs text-gray-500 uppercase">Hasil</p>
                        <p class="text-lg text-white font-bold">"{{ slide.result }}"</p>
                    </div>
                </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="py-20 relative">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-majak-blue/10 blur-[100px] rounded-full -z-10"></div>

        <div class="container mx-auto px-6">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-3xl font-bold text-white">Layanan Unggulan</h2>
                <p class="text-gray-400 mt-2">Pilih kategori layanan yang Anda butuhkan</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="(svc, idx) in serviceIcons" :key="idx"
                     data-aos="fade-up" :data-aos-delay="idx * 100"
                     class="group bg-[#1e293b]/40 backdrop-blur-sm border border-white/5 rounded-3xl p-6 hover:bg-[#1e293b] hover:border-white/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                    
                    <div :class="`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 border ${svc.color} transition-transform group-hover:scale-110 shadow-lg`">
                        {{ svc.icon }}
                    </div>
                    
                    <h3 class="text-xl font-bold text-white mb-3">{{ svc.title }}</h3>
                    <p class="text-sm text-gray-400 leading-relaxed">{{ svc.desc }}</p>
                    
                    <div class="mt-6 flex items-center text-xs font-bold text-white uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                        Selengkapnya <span class="ml-2">→</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20 bg-black/20 border-y border-white/5">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <span class="text-majak-orange font-bold text-sm tracking-widest uppercase">Paket Terpopuler</span>
                <h2 class="text-3xl md:text-4xl font-bold text-white mt-2">Jasa SPT Tahunan Pribadi</h2>
                <p class="text-gray-400 mt-2">Harga transparan, fitur lengkap, tanpa biaya tersembunyi.</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="(pkg, i) in pricingPackages" :key="i"
                     data-aos="fade-up" :data-aos-delay="i * 100"
                     :class="`relative rounded-3xl p-1 bg-[#0b1221] transition-transform duration-300 hover:-translate-y-2 ${pkg.popular ? 'bg-gradient-to-b from-majak-orange to-majak-blue' : 'border border-white/10 hover:border-white/30'}`">
                    
                    <div class="bg-[#0f172a] h-full rounded-[22px] p-6 flex flex-col relative overflow-hidden">
                        <div v-if="pkg.popular" class="absolute top-0 right-0 bg-majak-orange text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                            Most Popular
                        </div>

                        <h3 class="text-lg font-bold text-white mb-1">{{ pkg.name }}</h3>
                        <p class="text-xs text-gray-400 mb-4">{{ pkg.desc }}</p>
                        
                        <div class="mb-6 border-b border-white/10 pb-6">
                            <span class="text-xs text-gray-500 align-top">Rp</span>
                            <span class="text-3xl font-bold text-white">{{ pkg.price }}</span>
                            <span class="text-xs text-gray-500">/SPT</span>
                            <div class="mt-2 text-[11px] text-blue-400 bg-blue-900/30 px-2 py-1 rounded inline-block">
                                {{ pkg.target }}
                            </div>
                        </div>

                        <ul class="space-y-3 mb-8 flex-1">
                            <li v-for="feat in pkg.features" :key="feat" class="flex items-start gap-3 text-sm text-gray-300">
                                <span class="text-green-500 font-bold mt-0.5">✓</span>
                                <span class="text-xs leading-relaxed">{{ feat }}</span>
                            </li>
                        </ul>

                        <button :class="`w-full py-3 rounded-xl font-bold text-sm transition ${pkg.popular ? 'bg-majak-orange text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20' : 'bg-white/10 text-white hover:bg-white hover:text-majak-dark'}`">
                            Pilih Paket
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="mt-12 text-center">
                 <p class="text-gray-400 text-sm">
                    Butuh SPT Badan Usaha (CV/PT)? 
                    <a href="#" class="text-majak-orange font-bold hover:underline">Lihat Harga Badan Usaha →</a>
                 </p>
            </div>
        </div>
    </section>

    <section class="py-20">
        <div class="container mx-auto px-6 max-w-3xl">
            <h2 class="text-2xl font-bold text-center mb-10 text-white">Pertanyaan Sering Diajukan</h2>
            <div class="space-y-4">
                <div v-for="(faq, index) in faqs" :key="index" class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                    <button @click="toggleFaq(index)" class="w-full flex justify-between items-center p-5 text-left hover:bg-white/5 transition">
                        <span class="font-semibold text-white text-sm md:text-base">{{ faq.q }}</span>
                        <span class="text-xl text-gray-400" :class="{'rotate-180': activeFaq === index}">⌄</span>
                    </button>
                    <div v-show="activeFaq === index" class="p-5 pt-0 text-sm text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                        {{ faq.a }}
                    </div>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<style scoped>
:deep(.swiper-pagination-bullet) {
  background: white;
  opacity: 0.3;
}
:deep(.swiper-pagination-bullet-active) {
  background: #f97316;
  opacity: 1;
}
</style>