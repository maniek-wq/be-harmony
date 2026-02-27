import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule, ScrollRevealDirective],
    template: `
    <section id="o-nas" class="py-20 md:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" appScrollReveal>
          <span class="inline-block px-4 py-1.5 bg-mint-50 text-mint-800 rounded-full text-sm font-medium mb-4">O nas</span>
          <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Be Harmony <span class="text-terracotta">— Natalia Matusz</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div appScrollReveal>
            <p class="text-lg text-gray-600 leading-relaxed mb-6">
              Nowoczesny gabinet pracy z ciałem i strefa treningowa, które łączą wiedzę fizjoterapeutyczną, 
              techniki manualne, masaż, ruch i oddech. Ofertę uzupełnia nowoczesny trening EMS, dzięki któremu 
              w krótkim czasie można skutecznie wzmocnić całe ciało i poprawić sylwetkę.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed mb-6">
              To połączenie uwalnia napięcia, zmniejsza ból, poprawia kondycję i pozwala poczuć się lepiej 
              we własnej skórze. Skuteczność oparta jest na indywidualnym podejściu, wyjątkowej atmosferze 
              i holistycznym spojrzeniu na człowieka.
            </p>
            <div class="flex flex-wrap gap-3 mt-8">
              <span *ngFor="let tag of tags"
                    class="px-4 py-2 bg-mint-50 text-mint-800 rounded-full text-sm font-medium border border-mint-200">
                {{ tag }}
              </span>
            </div>
          </div>

          <div appScrollReveal [revealDelay]="0.2" class="relative">
            <div class="aspect-[4/5] rounded-2xl bg-gradient-to-br from-mint-100 to-mint-200 overflow-hidden shadow-2xl">
              <div class="w-full h-full flex items-center justify-center">
                <div class="text-center p-8">
                  <div class="w-32 h-32 mx-auto mb-6 rounded-full bg-terracotta/10 flex items-center justify-center">
                    <svg class="w-16 h-16 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                  </div>
                  <p class="font-display text-2xl text-terracotta font-semibold">Be Harmony</p>
                  <p class="text-mint-700 mt-2 italic">Twój gabinet fizjoterapii</p>
                </div>
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
    tags = ['Fizjoterapia', 'Masaż', 'Trening EMS', 'Holistyczne podejście', 'Indywidualny plan'];
}
