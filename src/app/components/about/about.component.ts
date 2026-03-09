import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule, ScrollRevealDirective],
    template: `
    <section id="o-nas" class="py-20 md:py-28 bg-cream-100">
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
                    class="px-4 py-2 rounded-full text-sm font-medium border"
                    [ngClass]="tag.variant">
                {{ tag.label }}
              </span>
            </div>
          </div>

          <div appScrollReveal [revealDelay]="0.2" class="relative min-w-0">
            <div class="aspect-[4/5] max-h-[70vh] md:max-h-none rounded-2xl overflow-hidden shadow-2xl relative w-full">
              <img src="assets/img/104691.jpg" alt="Be Harmony — Natalia Matusz, gabinet fizjoterapii" class="block w-full h-full max-w-full max-h-full object-cover object-center img-content img-scale-mobile" decoding="async" fetchpriority="high" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 text-center p-6">
                <p class="font-display text-2xl text-white font-semibold drop-shadow">Be Harmony</p>
                <p class="text-white/90 mt-2 italic drop-shadow text-sm">Twój gabinet pracy z ciałem</p>
              </div>
            </div>
            <!-- Decorative element -->
            <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-beige-300/40 rounded-2xl -z-10"></div>
            <div class="absolute -top-4 -left-4 w-16 h-16 bg-mint-300/30 rounded-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  `,
    styles: []
})
export class AboutComponent {
    tags: { label: string; variant: string }[] = [
        { label: 'Terapia ciała', variant: 'bg-terracotta/15 text-terracotta-700 border-terracotta/30' },
        { label: 'Masaż', variant: 'bg-terracotta/15 text-terracotta-700 border-terracotta/30' },
        { label: 'Trening EMS', variant: 'bg-terracotta/15 text-terracotta-700 border-terracotta/30' },
        { label: 'Trening Funkcjonalny', variant: 'bg-terracotta/15 text-terracotta-700 border-terracotta/30' },
        { label: 'Holistyczne podejście', variant: 'bg-terracotta/15 text-terracotta-700 border-terracotta/30' },
        { label: 'Indywidualny plan', variant: 'bg-terracotta/15 text-terracotta-700 border-terracotta/30' },
    ];
}
