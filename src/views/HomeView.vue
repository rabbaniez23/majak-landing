<script setup>
import { onMounted, ref } from 'vue';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, EffectCreative } from 'swiper/modules';
import FloatingIcons from '../components/FloatingIcons.vue';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

const modules = [Autoplay, Pagination, EffectCreative];

// --- STATE MANAGEMENT ---
const activeFaq = ref(null);
const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};

onMounted(() => {
  AOS.refresh(); 
});

// --- 1. DATA PORTFOLIO (HERO) ---
const portfolioSlides = [
  {
    category: "Individual Case",
    client: "Dokter & Notaris",
    title: "Pelaporan SPT Tahunan Pribadi",
    result: "Hemat Waktu 100%",
    desc: "Membantu profesional sibuk mengurus pencatatan aset detail dan pelaporan tepat waktu tanpa denda.",
    color: "from-blue-900 to-slate-900"
  },
  {
    category: "Corporate Case",
    client: "PT Teknologi Maju",
    title: "Tax Handling Bulanan & Tahunan",
    result: "Laporan Keuangan Rapih",
    desc: "Mengelola PPh 21, PPN, dan pelaporan badan usaha omzet > 4.8M yang sedang scaling-up.",
    color: "from-slate-900 to-majak-dark"
  },
  {
    category: "Special Case",
    client: "UMKM F&B Berkembang",
    title: "Penyelesaian SP2DK & NPWP",
    result: "Administrasi Tuntas",
    desc: "Pendampingan respon surat SP2DK dan perapihan administrasi pajak dari nol.",
    color: "from-majak-dark to-slate-800"
  }
];

// --- 2. DATA LAYANAN ---
const serviceIcons = [
  {
    title: "Jasa Tahunan",
    desc: "SPT Individu & Badan beres tanpa stres. Laporan tahunan kami urus tuntas.",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>`,
    color: "text-blue-400 border-blue-500/30 group-hover:bg-blue-500 group-hover:text-white"
  },
  {
    title: "Jasa Bulanan",
    desc: "PPh 21/26, Unifikasi & PPN tepat waktu. Anda fokus bisnis, pajak kami atur.",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>`,
    color: "text-orange-400 border-orange-500/30 group-hover:bg-majak-orange group-hover:text-white"
  },
  {
    title: "Legal & Admin",
    desc: "Pembuatan NPWP, PKP, hingga respon SP2DK. Cepat, aman, profesional.",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" /></svg>`,
    color: "text-purple-400 border-purple-500/30 group-hover:bg-purple-500 group-hover:text-white"
  },
  {
    title: "Konsultasi Gratis",
    desc: "Analisis awal masalah pajak Anda tanpa biaya. Temukan solusi efisien.",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>`,
    color: "text-emerald-400 border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-white"
  }
];

// --- 3. DATA TEAM (DARI PDF) ---
const teamMembers = [
  {
    name: "Czultan Brian",
    role: "Senior Partner",
    image: "https://ui-avatars.com/api/?name=Czultan+Brian&background=f97316&color=fff&size=256", 
    phone: "(+62) 851 2115 2820",
    email: "Majak.amanpajak2025@gmail.com",
    address: "Bangka Belitung",
    experience: [
      "Tax Law Specialist",
      "Corporate Tax Handling",
      "Penyelesaian Sengketa SP2DK",
      "Perencanaan Pajak Strategis"
    ],
    quote: "Kami memastikan klien tidak hanya patuh pajak, tapi juga mengerti pajaknya."
  },
  {
    name: "Naufal rizki rabbani",
    role: "Web Development",
    image: "https://ui-avatars.com/api/?name=Tax+Team&background=0056b3&color=fff&size=256", 
    phone: "Contact Support",
    email: "support@majak.io",
    address: "Bandung - Bangka",
    experience: [
      "web deploy"
      
    ],
    quote: "Fokus pada bisnis Anda, biarkan kami yang mengurus administrasi rumitnya."
  }
];

// --- 4. DATA 4 LANGKAH (DARI PDF HAL 12) ---
const steps = [
  { 
    title: "Konsultasi Gratis", 
    desc: "Ceritakan kebutuhan pajak Anda, kami analisis dan beri solusi awal tanpa biaya.",
    icon: "1"
  },
  { 
    title: "Pilih Layanan", 
    desc: "Tentukan paket layanan tahunan atau bulanan sesuai kebutuhan bisnis Anda.",
    icon: "2"
  },
  { 
    title: "Lengkapi Data", 
    desc: "Kirimkan dokumen atau informasi yang dibutuhkan dengan aman.",
    icon: "3"
  },
  { 
    title: "Tenang & Fokus", 
    desc: "Tim MaJak mengurus perhitungan hingga pelaporan. Anda fokus kembangkan bisnis.",
    icon: "4"
  }
];

// --- 5. DATA TARGET AUDIENCE (UPDATED WITH ICONS) ---
const targetAudience = [
  { 
    name: "Profesional Sibuk", 
    desc: "Dokter, Notaris, Freelancer berpenghasilan tinggi.", 
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>`
  },
  { 
    name: "UMKM & Startup", 
    desc: "Bisnis berkembang yang butuh efisiensi biaya.", 
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>`
  },
  { 
    name: "Tanpa Staff Pajak", 
    desc: "Perusahaan yang ingin hemat biaya operasional.", 
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>`
  },
  { 
    name: "Perusahaan Baru", 
    desc: "Butuh pendampingan legalitas dari awal.", 
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>`
  }
];

// --- 6. DATA PRICING (DARI PDF HAL 15) ---
const pricingPackages = [
  { 
    name: 'Karyawan Basic', 
    price: '149.000', 
    target: '< 60 Juta / Tahun',
    desc: 'SPT 1770SS',
    features: ['Lapor SPT 1770SS', 'Bukti Penerimaan Elektronik', 'Konsultasi Gratis', 'Analisa Sederhana'],
    popular: false
  },
  { 
    name: 'Karyawan Pro', 
    price: '299.000', 
    target: '> 60 Juta (1 Perusahaan)',
    desc: 'SPT 1770S',
    features: ['Lapor SPT 1770S', 'Analisa Harta & Utang', 'Bukti Penerimaan Elektronik', 'Konsultasi Via WhatsApp'],
    popular: true 
  },
  { 
    name: 'Karyawan Plus', 
    price: '499.000', 
    target: '> 60 Juta (2 Perusahaan)',
    desc: 'SPT 1770S Multisumber',
    features: ['Lapor SPT 1770S', 'Kredit Pajak PPh 21', 'Analisa Harta Detail', 'Bukti Penerimaan Elektronik'],
    popular: false
  },
  { 
    name: 'Pengusaha / Freelancer', 
    price: '999.000', 
    target: 'Penghasilan Bebas',
    desc: 'SPT 1770 Lengkap',
    features: ['Lapor SPT 1770', 'Rekonsiliasi Peredaran Bruto', 'Laporan Keuangan Sederhana', 'Konsultasi Prioritas'],
    popular: false
  }
];

// --- 7. DATA FAQ (DARI PDF HAL 6 & 10) ---
const faqs = [
  { 
    q: "Apa risiko jika saya mengurus pajak sendiri?", 
    a: "Risiko utama adalah denda keterlambatan (sanksi s.d Rp 6 juta/tahun), kesalahan perhitungan (human error) yang fatal, serta waktu produktif yang terbuang (±2 jam/hari) hanya untuk administrasi." 
  },
  { 
    q: "Siapa saja yang cocok menggunakan MaJak_io?", 
    a: "Kami melayani Profesional sibuk (Dokter, Notaris), UMKM/Startup yang sedang berkembang, serta perusahaan yang ingin efisiensi tanpa harus merekrut staff pajak internal." 
  },
  { 
    q: "Mengapa biaya MaJak lebih efisien dibanding rekrut staff?", 
    a: "Menggaji staff pajak internal bisa memakan biaya s.d Rp 68 juta/tahun (gaji + tunjangan). Dengan MaJak, Anda membayar sesuai paket kebutuhan dengan biaya jauh lebih rendah." 
  },
  { 
    q: "Apakah data saya dijamin aman?", 
    a: "Sangat aman. Kami memegang teguh kode etik kerahasiaan data klien sebagai prioritas utama dalam setiap layanan kami." 
  },
  { 
    q: "Layanan apa saja yang tersedia selain SPT Tahunan?", 
    a: "Kami menyediakan Tax Handling Bulanan (PPh 21/26, PPN), pembuatan NPWP/PKP, penanganan SP2DK, hingga pembuatan akun Coretax dan sertifikat elektronik." 
  }
];
</script>

<template>
  <div class="overflow-hidden relative">
    
    <FloatingIcons />
    
 <section id="home" class="relative pt-36 pb-16 z-10">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12" data-aos="fade-down">
            <span class="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-majak-orange text-xs font-bold tracking-widest uppercase mb-4">
              Your Trusted Tax Partner
            </span>
            <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                Solusi Pajak <span class="text-transparent bg-clip-text bg-gradient-to-r from-majak-blue to-majak-orange">Cerdas & Aman</span>
            </h1>
            <p class="text-gray-400 text-lg max-w-2xl mx-auto">Kelola kewajiban perpajakan dengan mudah, cepat, dan tepat. Dari profesional untuk profesional.</p>
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
            <div class="grid md:grid-cols-2 min-h-[380px]">
                <div :class="`bg-gradient-to-br ${slide.color} p-10 flex flex-col justify-center relative overflow-hidden`">
                    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                    <div class="relative z-10">
                        <div class="inline-flex items-center gap-2 mb-4">
                          <span class="w-2 h-2 rounded-full bg-majak-orange"></span>
                          <span class="text-gray-300 text-xs font-bold uppercase tracking-widest">{{ slide.category }}</span>
                        </div>
                        <h2 class="text-3xl font-bold text-white leading-tight mb-2">{{ slide.client }}</h2>
                        <div class="h-1 w-20 bg-white/20 rounded-full mt-4"></div>
                    </div>
                </div>
                <div class="p-10 flex flex-col justify-center bg-[#1e293b]/50 backdrop-blur-sm">
                    <h3 class="text-xl font-bold text-white mb-3">{{ slide.title }}</h3>
                    <p class="text-gray-400 mb-8 text-sm leading-relaxed">{{ slide.desc }}</p>
                    <div class="mt-auto">
                        <p class="text-xs text-gray-500 uppercase font-semibold mb-1">Impact</p>
                        <div class="text-lg text-majak-orange font-bold flex items-center gap-2">
                           <span>{{ slide.result }}</span>
                        </div>
                    </div>
                </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="py-16 relative z-10 border-y border-white/5 bg-white/[0.02]">
      <div class="container mx-auto px-6">
        <div class="text-center mb-10" data-aos="fade-up">
          <h2 class="text-2xl font-bold text-white">Siapa yang Cocok Menggunakan MaJak?</h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
           <div v-for="(target, idx) in targetAudience" :key="idx" 
                class="group bg-[#1e293b]/40 p-6 rounded-2xl border border-white/5 text-center hover:bg-[#1e293b] hover:border-majak-orange/30 transition-all duration-300"
                data-aos="zoom-in" :data-aos-delay="idx * 100">
              <div class="flex justify-center mb-4 text-majak-blue group-hover:text-majak-orange transition-colors duration-300">
                 <div class="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-majak-orange/30" v-html="target.svg"></div>
              </div>
              <h3 class="text-white font-bold mb-2 text-sm md:text-base">{{ target.name }}</h3>
              <p class="text-gray-400 text-xs leading-relaxed">{{ target.desc }}</p>
           </div>
        </div>
      </div>
    </section>

    <section id="services" class="py-24 relative z-10">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Layanan Unggulan</h2>
                <p class="text-gray-400">Solusi komprehensif untuk setiap kebutuhan pajak Anda.</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="(svc, idx) in serviceIcons" :key="idx"
                     data-aos="fade-up" :data-aos-delay="idx * 100"
                     class="group bg-[#1e293b]/30 backdrop-blur-md border border-white/5 rounded-3xl p-8 hover:bg-[#1e293b] hover:border-white/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div :class="`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border transition-all duration-300 shadow-lg ${svc.color}`">
                        <div class="w-8 h-8" v-html="svc.svg"></div>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-3 relative z-10">{{ svc.title }}</h3>
                    <p class="text-sm text-gray-400 leading-relaxed relative z-10">{{ svc.desc }}</p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-24 relative z-10 bg-[#0b1221]">
      <div class="container mx-auto px-6">
         <div class="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
               <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
                 4 Langkah Mudah <br>
                 <span class="text-majak-orange">Bersama MaJak_io</span>
               </h2>
               <p class="text-gray-400 mb-8 leading-relaxed">
                 Kami menyederhanakan proses perpajakan yang rumit menjadi langkah-langkah praktis agar Anda bisa tetap tenang dan fokus pada pengembangan bisnis.
               </p>
               <button class="bg-majak-blue hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition shadow-lg shadow-blue-500/30">
                 Mulai Konsultasi Gratis
               </button>
            </div>
            <div class="grid gap-6">
               <div v-for="(step, idx) in steps" :key="idx" 
                    class="flex gap-5 bg-[#1e293b]/30 p-5 rounded-2xl border border-white/5 hover:border-majak-orange/30 transition-all"
                    data-aos="fade-left" :data-aos-delay="idx * 100">
                  <div class="w-12 h-12 rounded-full bg-majak-orange/20 text-majak-orange flex items-center justify-center font-bold text-xl shrink-0 border border-majak-orange/30">
                    {{ step.icon }}
                  </div>
                  <div>
                    <h4 class="text-white font-bold text-lg mb-1">{{ step.title }}</h4>
                    <p class="text-gray-400 text-sm">{{ step.desc }}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>

    <section id="about" class="py-24 relative z-10">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
           <h2 class="text-3xl font-bold text-white mb-4">Siapa di Balik MAJAK_IO?</h2>
           <p class="text-gray-400">Tim profesional yang siap membantu Anda.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
           <div v-for="(member, idx) in teamMembers" :key="idx" 
                class="group relative bg-[#0b1221] border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.1)] hover:border-majak-orange/50 overflow-hidden"
                data-aos="fade-up" :data-aos-delay="idx * 150">
              
              <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-majak-blue to-majak-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div class="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                <div class="relative shrink-0">
                   <div class="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-white/10 to-transparent border border-white/10">
                      <img :src="member.image" alt="Profile" class="w-full h-full rounded-full object-cover">
                   </div>
                </div>
                
                <div>
                   <h3 class="text-xl font-bold text-white">{{ member.name }}</h3>
                   <p class="text-majak-orange text-xs font-bold uppercase tracking-wider mb-3">{{ member.role }}</p>
                   <p class="text-gray-400 text-sm italic mb-4">"{{ member.quote }}"</p>
                   
                   <div class="bg-white/5 rounded-xl p-4 border border-white/5">
                      <p class="text-xs text-gray-500 font-semibold uppercase mb-2">Keahlian & Pengalaman:</p>
                      <ul class="text-sm text-gray-300 space-y-1">
                          <li v-for="exp in member.experience" :key="exp" class="flex items-center gap-2">
                             <span class="w-1.5 h-1.5 rounded-full bg-majak-blue"></span>
                             {{ exp }}
                          </li>
                      </ul>
                   </div>
                </div>
              </div>

           </div>
        </div>
      </div>
    </section>

    <section id="pricing" class="py-24 z-10 relative">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <span class="text-majak-orange font-bold text-sm tracking-widest uppercase">Paket SPT Tahunan</span>
                <h2 class="text-3xl md:text-4xl font-bold text-white mt-2">Harga Transparan</h2>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="(pkg, i) in pricingPackages" :key="i"
                     data-aos="fade-up" :data-aos-delay="i * 100"
                     :class="`relative rounded-3xl p-[1px] bg-gradient-to-b transition-transform duration-300 hover:-translate-y-2 ${pkg.popular ? 'from-majak-orange to-majak-blue shadow-lg' : 'from-white/10 to-transparent'}`">
                    
                    <div class="bg-[#0f172a] h-full rounded-[23px] p-6 flex flex-col relative overflow-hidden">
                        <div v-if="pkg.popular" class="absolute top-0 right-0 bg-majak-orange text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                            Popular
                        </div>

                        <h3 class="text-lg font-bold text-white mb-1">{{ pkg.name }}</h3>
                        <p class="text-xs text-gray-400 mb-5 pb-5 border-b border-white/5">{{ pkg.desc }}</p>
                        
                        <div class="mb-6">
                            <span class="text-xs text-gray-500 align-top">Rp</span>
                            <span class="text-3xl font-bold text-white tracking-tight">{{ pkg.price }}</span>
                        </div>

                        <ul class="space-y-3 mb-8 flex-1">
                            <li v-for="feat in pkg.features" :key="feat" class="flex items-start gap-2 text-sm text-gray-300">
                                <span class="text-green-500 font-bold mt-0.5">✓</span>
                                <span class="text-xs leading-relaxed opacity-90">{{ feat }}</span>
                            </li>
                        </ul>

                        <button :class="`w-full py-3 rounded-xl font-bold text-sm transition ${pkg.popular ? 'bg-majak-orange text-white hover:bg-orange-600' : 'bg-white/5 text-white hover:bg-white hover:text-majak-dark'}`">
                            Pilih Paket
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="faq" class="py-20 z-10 relative border-t border-white/5 bg-[#0b1221]/50">
        <div class="container mx-auto px-6 max-w-3xl">
            <h2 class="text-2xl font-bold text-center mb-10 text-white">Pertanyaan Sering Diajukan</h2>
            <div class="space-y-4">
                <div v-for="(faq, index) in faqs" :key="index" class="group bg-[#1e293b]/30 border border-white/5 rounded-2xl overflow-hidden transition-all hover:border-white/10">
                    <button @click="toggleFaq(index)" class="w-full flex justify-between items-center p-5 text-left">
                        <span class="font-semibold text-white text-sm md:text-base group-hover:text-majak-orange transition-colors">{{ faq.q }}</span>
                        <span class="text-xl text-gray-500 transition-transform duration-300" :class="{'rotate-180': activeFaq === index}">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                        </span>
                    </button>
                    <div v-show="activeFaq === index" class="p-5 pt-0 text-sm text-gray-400 leading-relaxed border-t border-white/5 mt-0 animate-fade-in-down">
                        {{ faq.a }}
                    </div>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<style scoped>
/* Swiper Custom */
:deep(.swiper-pagination-bullet) {
  background: white;
  opacity: 0.2;
  transition: all 0.3s ease;
}
:deep(.swiper-pagination-bullet-active) {
  background: #f97316;
  opacity: 1;
  width: 24px;
  border-radius: 999px;
}

/* Animation */
.animate-fade-in-down {
  animation: fadeInDown 0.3s ease-out forwards;
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>