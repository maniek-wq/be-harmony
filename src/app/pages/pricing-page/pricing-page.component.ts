import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface PricingCategory {
  name: string;
  icon: string;
  items: PricingItem[];
  isEms?: boolean;
}

interface PricingItem {
  name: string;
  description?: string;
  price: string;
  note?: string;
}

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  template: `
    <div class="min-h-screen bg-mint-50 pt-24 pb-20">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-16" appScrollReveal>
          <a routerLink="/" class="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-600 transition-colors text-sm mb-6">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Volver a la página principal
          </a>
          <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            <span class="text-terracotta">Precios</span> de servicios
          </h1>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            Precios transparentes de todos nuestros servicios. Precios en euros.
          </p>
        </div>

        <!-- EMS HIGHLIGHT -->
        <div appScrollReveal class="mb-10">
          <div class="relative bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-mint-300">
            <div class="absolute top-0 right-0 px-6 py-2 bg-terracotta text-white text-sm font-bold rounded-bl-2xl uppercase tracking-wider z-10">
              ¡Novedad!
            </div>
            <div class="flex flex-col lg:flex-row">
              <!-- EMS Image -->
              <div class="lg:w-2/5 relative">
                <img src="assets/img/cennik_ems.jpg" 
                     alt="Precios EMS - Entrenamiento Electrical Muscle Stimulation" 
                     class="w-full h-full object-cover min-h-[250px] lg:min-h-full">
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-r"></div>
              </div>
              <!-- EMS Info -->
              <div class="lg:w-3/5 p-8 md:p-10">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-mint to-mint-400 flex items-center justify-center shadow-lg">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h2 class="font-display text-2xl md:text-3xl font-bold text-gray-900">Entrenamiento EMS</h2>
                    <p class="text-mint-600 text-sm">Electrical Muscle Stimulation</p>
                  </div>
                </div>
                <div class="bg-mint-50 rounded-xl p-6">
                  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h3 class="font-semibold text-gray-900 text-lg">Sesión de prueba</h3>
                      <p class="text-gray-500 text-sm mt-1">Tu primer entrenamiento EMS a precio promocional</p>
                    </div>
                    <div class="text-right">
                      <span class="text-4xl font-bold text-terracotta">90</span>
                      <span class="text-gray-500 text-lg ml-1">€</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-16" appScrollReveal>
          <p class="text-gray-500 text-sm mb-6">¿Tienes preguntas sobre los precios? Contáctanos.</p>
          <a routerLink="/" fragment="contacto"
             class="inline-flex items-center gap-2 px-8 py-4 bg-terracotta text-white font-semibold rounded-full hover:bg-terracotta-600 hover:shadow-xl transition-all duration-300 text-lg">
            Reservar cita
          </a>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class PricingPageComponent {
  categories: PricingCategory[] = [];
}
