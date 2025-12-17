<script setup>
// Komponen Background dengan Animasi 3D "Traveling" (Menjelajah Layar)
</script>

<template>
  <div class="fixed inset-0 overflow-hidden pointer-events-none -z-5 perspective-container">
    
    <div class="absolute top-[80%] left-[10%] text-amber-300 opacity-30 animate-travel-1 drop-shadow-[0_0_15px_rgba(252,211,77,0.4)]">
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    </div>

    <div class="absolute top-[20%] left-[20%] text-orange-400 opacity-25 animate-orbit-wide blur-[1px]">
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
    </div>

    <div class="absolute top-[10%] right-[10%] text-yellow-200 opacity-20 animate-travel-2 drop-shadow-[0_0_10px_rgba(254,240,138,0.3)]">
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
    </div>

    <div class="absolute bottom-[20%] right-[20%] text-orange-300 opacity-30 animate-float-wild drop-shadow-[0_0_12px_rgba(253,186,116,0.4)]">
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    </div>

    <div class="absolute top-[50%] left-[50%] text-amber-500 opacity-20 animate-travel-3 blur-[2px]">
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
    </div>

    <div class="absolute top-[15%] left-[-10%] text-yellow-400 opacity-25 animate-travel-horizontal">
      <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/><path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"/></svg>
    </div>

    <div class="absolute bottom-[-10%] left-[40%] text-orange-200 opacity-20 animate-travel-up">
      <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="14"/><line x1="16" y1="18" x2="16" y2="18"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="12" y1="18" x2="12" y2="18"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="8" y1="18" x2="8" y2="18"/></svg>
    </div>

  </div>
</template>

<style scoped>
.perspective-container {
  perspective: 1000px; /* Kunci efek 3D */
  transform-style: preserve-3d;
}

/* ANIMASI 1: Travel Diagonal (Kiri Bawah -> Kanan Atas) 
  Menggunakan translate3d untuk X, Y, dan Z (kedalaman)
*/
@keyframes travel-1 {
  0% { transform: translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg); }
  50% { transform: translate3d(60vw, -40vh, 100px) rotate3d(1, 1, 0, 180deg); }
  100% { transform: translate3d(0, 0, 0) rotate3d(0, 1, 0, 360deg); }
}

/* ANIMASI 2: Travel Diagonal (Kanan Atas -> Kiri Bawah) */
@keyframes travel-2 {
  0% { transform: translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg); }
  50% { transform: translate3d(-50vw, 50vh, -150px) rotate3d(1, 0, 1, -120deg); }
  100% { transform: translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg); }
}

/* ANIMASI 3: Orbit Lebar (Melingkar) */
@keyframes orbit-wide {
  0% { transform: translate3d(0, 0, 0) rotate(0deg); }
  25% { transform: translate3d(30vw, 20vh, 50px) rotate(90deg); }
  50% { transform: translate3d(0, 40vh, 0) rotate(180deg); }
  75% { transform: translate3d(-30vw, 20vh, -50px) rotate(270deg); }
  100% { transform: translate3d(0, 0, 0) rotate(360deg); }
}

/* ANIMASI 4: Floating Liar (Acak) */
@keyframes float-wild {
  0% { transform: translate3d(0, 0, 0) rotate3d(1,0,0,0deg); }
  33% { transform: translate3d(-20vw, -30vh, 200px) rotate3d(1,1,0,120deg); }
  66% { transform: translate3d(10vw, -50vh, -100px) rotate3d(0,1,1,240deg); }
  100% { transform: translate3d(0, 0, 0) rotate3d(1,0,0,360deg); }
}

/* ANIMASI 5: Horizontal Panjang (Kiri ke Kanan Layar) */
@keyframes travel-horizontal {
  0% { transform: translate3d(0, 0, 0) rotateZ(-10deg); }
  50% { transform: translate3d(110vw, 10vh, 100px) rotateZ(10deg); }
  100% { transform: translate3d(0, 0, 0) rotateZ(-10deg); }
}

/* ANIMASI 6: Vertical Up (Bawah ke Atas) */
@keyframes travel-up {
  0% { transform: translate3d(0, 0, 0) rotateY(0deg); }
  100% { transform: translate3d(20vw, -120vh, 0) rotateY(360deg); }
}

/* Pengaturan Kelas Animasi */
.animate-travel-1 { animation: travel-1 35s ease-in-out infinite alternate; }
.animate-travel-2 { animation: travel-2 40s ease-in-out infinite alternate; }
.animate-travel-3 { animation: float-wild 45s ease-in-out infinite alternate; }
.animate-orbit-wide { animation: orbit-wide 50s linear infinite; }
.animate-float-wild { animation: float-wild 38s ease-in-out infinite; }
.animate-travel-horizontal { animation: travel-horizontal 60s ease-in-out infinite; }
.animate-travel-up { animation: travel-up 30s linear infinite; }

</style>