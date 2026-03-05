import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-google-maps',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section class="py-16 md:py-20 bg-mint-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10" appScrollReveal>
          <h2 class="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Jak do nas <span class="text-terracotta">trafić</span>
          </h2>
          <p class="text-gray-500">Znajdź nas na mapie</p>
        </div>

        <div appScrollReveal class="rounded-2xl overflow-hidden shadow-lg border border-mint-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.0489344925395!2d14.568150677490866!3d53.508912072336756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa0b706cad80a9%3A0x8d30628b3986b3cb!2sOrzechowa%2033%2C%2072-010%20Prz%C4%99socin!5e1!3m2!1spl!2spl!4v1772205794266!5m2!1spl!2spl"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-[300px] md:h-[450px]">
          </iframe>
        </div>

        <div appScrollReveal class="mt-6 text-center">
          <p class="text-gray-600 flex items-center justify-center gap-2">
            <svg class="w-5 h-5 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <a href="https://maps.google.com/?q=Orzechowa+33B/7,+Przęsocin" target="_blank" rel="noopener" class="hover:text-terracotta transition-colors">
              Przęsocin, ul. Orzechowa 33B/7
            </a>
          </p>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class GoogleMapsComponent { }
