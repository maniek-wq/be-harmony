import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-voucher-banner',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  template: `
    <section class="py-16 md:py-24 bg-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative rounded-3xl overflow-hidden shadow-2xl group" appScrollReveal>
          <div class="flex flex-col md:flex-row bg-mint-50">
            <!-- Image Side -->
            <div class="md:w-1/2 relative min-h-[300px] md:min-h-[400px] overflow-hidden">
              <img src="assets/img/10453.jpg" alt="Tarjeta regalo Be Harmony" 
                   class="absolute inset-0 w-full h-full object-cover object-center img-content img-scale-mobile scale-100 group-hover:scale-105 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <!-- Content Side -->
            <div class="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-white">
              <span class="inline-block px-4 py-1.5 bg-terracotta/10 text-terracotta rounded-full text-xs font-bold tracking-wider uppercase mb-6 self-start border border-terracotta/20">
                Regalo Perfecto
              </span>
              <h2 class="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Regala a tus seres queridos <span class="text-terracotta">salud y bienestar</span>
              </h2>
              <p class="text-gray-600 text-lg leading-relaxed mb-8">
                ¿Buscas un regalo especial? Una tarjeta regalo del centro Be Harmony es la manera perfecta de cuidar el bienestar de quienes más quieres. Elige cualquier servicio de nuestra oferta o un importe personalizado.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4">
                <a href="#contacto"
                   class="inline-flex justify-center items-center px-8 py-3.5 bg-terracotta text-white font-semibold rounded-full hover:bg-terracotta-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  Preguntar por la tarjeta
                </a>
                <a routerLink="/precios"
                   class="inline-flex justify-center items-center px-8 py-3.5 bg-white text-terracotta border-2 border-terracotta/20 font-semibold rounded-full hover:border-terracotta hover:bg-terracotta/5 transition-all duration-300">
                  Ver servicios
                </a>
              </div>
            </div>
          </div>
          
          <!-- Decorative element -->
          <div class="absolute -top-12 -right-12 w-40 h-40 bg-terracotta/5 rounded-full blur-2xl pointer-events-none"></div>
          <div class="absolute -bottom-8 -left-8 w-32 h-32 bg-mint-300/20 rounded-full blur-xl pointer-events-none"></div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class VoucherBannerComponent { }
