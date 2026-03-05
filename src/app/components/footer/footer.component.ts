import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <!-- Brand -->
          <div class="lg:col-span-1">
            <h3 class="font-display text-2xl font-semibold text-white mb-2">Be Harmony</h3>
            <p class="text-mint italic text-sm font-display mb-4">Natalia Matusz</p>
            <p class="text-gray-400 text-sm leading-relaxed">
              Gabinet fizjoterapii.<br>
              Zadbaj o ciało, zadbaj o siebie, znajdź harmonię.
            </p>

            <!-- Social media -->
            <div class="flex gap-3 mt-6">
              <a href="#" target="_blank" rel="noopener"
                 class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mint hover:text-gray-900 transition-all duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/beharmony_nataliamatusz/" target="_blank" rel="noopener"
                 class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mint hover:text-gray-900 transition-all duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener"
                 class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mint hover:text-gray-900 transition-all duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46A6.21 6.21 0 0015.76 15V8.73a8.19 8.19 0 004.78 1.53V6.82a4.84 4.84 0 01-.95-.13z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Navigation -->
          <div>
            <h4 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Nawigacja</h4>
            <ul class="space-y-3">
              <li><a href="#o-nas" class="text-gray-400 hover:text-mint transition-colors text-sm">O nas</a></li>
              <li><a href="#uslugi" class="text-gray-400 hover:text-mint transition-colors text-sm">Usługi</a></li>
              <li><a href="#zespol" class="text-gray-400 hover:text-mint transition-colors text-sm">Zespół</a></li>
              <li><a href="#galeria" class="text-gray-400 hover:text-mint transition-colors text-sm">Galeria</a></li>
              <li><a routerLink="/cennik" class="text-gray-400 hover:text-mint transition-colors text-sm">Cennik</a></li>
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h4 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Usługi</h4>
            <ul class="space-y-3">
              <li><span class="text-gray-400 text-sm">Trening EMS</span></li>
              <li><span class="text-gray-400 text-sm">Terapia ciała</span></li>
              <li><span class="text-gray-400 text-sm">Masaże</span></li>
              <li><span class="text-gray-400 text-sm">Terapia wisceralna</span></li>
              <li><span class="text-gray-400 text-sm">HTR</span></li>
              <li><span class="text-gray-400 text-sm">Trening Funkcjonalny</span></li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Kontakt</h4>
            <ul class="space-y-3">
              <li class="flex items-center gap-2 text-gray-400 text-sm">
                <svg class="w-4 h-4 text-mint flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                </svg>
                <span>Przęsocin<br>ul. Orzechowa 33B/7</span>
              </li>
              <li class="flex items-center gap-2 text-gray-400 text-sm">
                <svg class="w-4 h-4 text-mint flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+48601160646" class="hover:text-white transition-colors">601 160 646</a>
              </li>
              <li class="flex items-center gap-2 text-gray-400 text-sm">
                <svg class="w-4 h-4 text-mint flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:beharmonynataliamatusz@gmail.com" class="hover:text-white transition-colors">beharmonynataliamatusz&#64;gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-gray-500 text-sm">
            &copy; {{ currentYear }} Be Harmony — Natalia Matusz. Wszelkie prawa zastrzeżone.
          </p>
          <div class="flex gap-4">
            <a routerLink="/polityka-prywatnosci" class="text-gray-500 hover:text-mint transition-colors text-sm">
              Polityka prywatności
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
