<script setup>
</script>

<template>
  <footer class="bg-dark text-white pt-16 pb-8 border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div class="space-y-4">
          <img src="/majak-logo.png" alt="MAJAK Logo" class="h-10 w-auto object-contain brightness-0 invert" />
          <p class="text-gray-400 text-sm leading-relaxed">
            Mitra perpajakan profesional untuk pengusaha dan individu di Indonesia. Mengedepankan kepastian dan kepatuhan.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-lg font-bold mb-6 text-gray-200">Navigasi</h4>
          <ul class="space-y-3 text-sm text-gray-400">
            <li><a href="#home" class="hover:text-accent transition-colors">Beranda</a></li>
            <li><a href="#about" class="hover:text-accent transition-colors">Tentang Kami</a></li>
            <li><a href="#services" class="hover:text-accent transition-colors">Layanan</a></li>
            <li><a href="#faq" class="hover:text-accent transition-colors">FAQ</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-lg font-bold mb-6 text-gray-200">Hubungi Kami</h4>
          <ul class="space-y-4 text-sm text-gray-400">
            <li class="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>0851 2115 2820 (WA)</span>
            </li>
            <li class="flex items-start gap-3">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>majak.amanpajak2025@gmail.com</span>
            </li>
             <li class="flex items-start gap-3">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Gang Gatot Kaca No.04, Bangka</span>
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div>
             <h4 class="text-lg font-bold mb-6 text-gray-200">Social Media</h4>
             <div class="flex gap-4">
                 <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-accent hover:text-dark transition-all duration-300">
                     <!-- Generic Social Icon -->
                     <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.68c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                 </a>
                 <div class="text-sm text-gray-400 mt-2">@majak_io</div>
             </div>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; 2025 PT Indonesian Taxlaw Center. All rights reserved.</p>
        <div class="flex gap-6 mt-4 md:mt-0">
             <a href="#" class="hover:text-white">Privacy</a>
             <a href="#" class="hover:text-white">Terms</a>
        </div>
      </div>
    </div>
  </footer>
</template>