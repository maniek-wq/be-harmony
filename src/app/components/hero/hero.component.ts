import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img src="assets/img/10507.jpg" alt="Gabinet Fizjoterapii Be Harmony" 
             class="w-full h-full object-cover object-center img-content img-scale-mobile" fetchpriority="high">
        <!-- Gradient Overlay for text readability -->
        <div class="absolute inset-0 bg-gradient-to-r from-mint-50/95 via-white/80 to-white/40 sm:from-mint-50/90 sm:via-white/70 sm:to-white/30"></div>
        <!-- Additional gradient from bottom for content blending -->
        <div class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 md:py-32">
        <div appScrollReveal class="mb-6">
          <span class="inline-block px-4 py-1.5 bg-terracotta/10 text-terracotta rounded-full text-sm font-medium border border-terracotta/20">
            Gabinet Fizjoterapii
          </span>
        </div>

        <h1 appScrollReveal [revealDelay]="0.1"
            class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Zadbaj o ciało.<br>
          <span class="text-terracotta">Zadbaj o siebie.</span><br>
          <span class="text-mint-700">Znajdź harmonię.</span>
        </h1>

        <p appScrollReveal [revealDelay]="0.2"
           class="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          Nowoczesny gabinet pracy z ciałem i strefa treningowa, które łączą wiedzę fizjoterapeutyczną, 
          techniki manualne, masaż, ruch i oddech.
        </p>

        <div appScrollReveal [revealDelay]="0.3" class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#uslugi"
             class="px-8 py-4 bg-terracotta text-white font-semibold rounded-full hover:bg-terracotta-600 hover:shadow-xl hover:shadow-terracotta/20 transition-all duration-300 text-lg transform hover:-translate-y-0.5">
            Poznaj nasze usługi
          </a>
          <a href="#kontakt"
             class="px-8 py-4 bg-white/70 text-terracotta font-semibold rounded-full border-2 border-terracotta/20 hover:border-terracotta hover:bg-white hover:shadow-lg transition-all duration-300 text-lg transform hover:-translate-y-0.5 backdrop-blur-sm">
            Skontaktuj się
          </a>
        </div>

        <!-- Scroll indicator -->
        <div appScrollReveal [revealDelay]="0.5" class="mt-16 md:mt-24">
          <div class="flex flex-col items-center gap-2 text-gray-400">
            <span class="text-xs uppercase tracking-widest">Przewiń w dół</span>
            <div class="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
              <div class="w-1.5 h-3 bg-gray-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent { }
