import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section id="sobre-nosotros" class="py-20 md:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" appScrollReveal>
          <span class="inline-block px-4 py-1.5 bg-mint-50 text-mint-800 rounded-full text-sm font-medium mb-4">Sobre nosotros</span>
          <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Be Harmony <span class="text-terracotta">— Natalia Matusz</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div appScrollReveal>
            <p class="text-lg text-gray-600 leading-relaxed mb-6">
              Centro moderno de entrenamiento EMS y bienestar corporal que combina el conocimiento 
              fisioterapéutico con la tecnología avanzada de estimulación muscular eléctrica. Gracias 
              al entrenamiento EMS, en poco tiempo puedes fortalecer eficazmente todo tu cuerpo y mejorar tu figura.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed mb-6">
              Esta combinación libera tensiones, reduce el dolor, mejora la condición física y te permite 
              sentirte mejor en tu propia piel. La eficacia se basa en un enfoque individual, un ambiente 
              excepcional y una visión holística del ser humano.
            </p>
            <div class="flex flex-wrap gap-3 mt-8">
              <span *ngFor="let tag of tags"
                    class="px-4 py-2 bg-mint-50 text-mint-800 rounded-full text-sm font-medium border border-mint-200">
                {{ tag }}
              </span>
            </div>
          </div>

          <div appScrollReveal [revealDelay]="0.2" class="relative min-w-0">
            <div class="aspect-[4/5] max-h-[70vh] md:max-h-none rounded-2xl overflow-hidden shadow-2xl relative w-full">
              <img src="assets/img/104691.jpg" alt="Be Harmony — Natalia Matusz, centro de entrenamiento EMS" class="block w-full h-full max-w-full max-h-full object-cover object-center img-content img-scale-mobile" decoding="async" fetchpriority="high" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 text-center p-6">
                <p class="font-display text-2xl text-white font-semibold drop-shadow">Be Harmony</p>
                <p class="text-white/90 mt-2 italic drop-shadow text-sm">Tu centro de entrenamiento EMS</p>
              </div>
            </div>
            <!-- Decorative element -->
            <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-terracotta/10 rounded-2xl -z-10"></div>
            <div class="absolute -top-4 -left-4 w-16 h-16 bg-mint-300/30 rounded-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent {
  tags = ['Entrenamiento EMS', 'Bienestar corporal', 'Enfoque individual', 'Tecnología avanzada'];
}
