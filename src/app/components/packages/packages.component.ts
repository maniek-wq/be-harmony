import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface PackageItem {
  label: string;
  count: string;
}

interface Package {
  size: string;
  name: string;
  price: number;
  items: PackageItem[];
  highlight?: boolean;
  badge?: string;
}

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule, DecimalPipe, RouterLink, ScrollRevealDirective],
  template: `
    <section id="pakiety" class="py-20 md:py-28 bg-[#1a1f16] relative overflow-hidden">

      <!-- Background texture -->
      <div class="absolute inset-0 opacity-5"
           style="background-image: radial-gradient(circle at 20% 50%, #c5714e 0%, transparent 50%), radial-gradient(circle at 80% 20%, #6b7c4a 0%, transparent 50%);">
      </div>
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-terracotta/40 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-olive/30 to-transparent"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <!-- Header -->
        <div class="text-center mb-6" appScrollReveal>
          <span class="inline-block px-4 py-1.5 bg-terracotta/20 text-terracotta rounded-full text-sm font-medium mb-4 border border-terracotta/30">Pakiety</span>
          <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            EMS + Endoterapia<br class="hidden sm:block">
            <span class="text-terracotta">skuteczne duo</span>
          </h2>
          <p class="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            W naszym gabinecie łączymy Trening EMS z Endoterapią, tworząc skuteczne duo dla pięknej sylwetki,
            jędrnego ciała i lepszego samopoczucia. <span class="text-terracotta font-medium">Efekty, które widać i czuć!</span>
          </p>
        </div>

        <!-- Duo visual badges -->
        <div appScrollReveal class="flex items-center justify-center gap-3 mb-16 flex-wrap">
          <div class="flex items-center gap-2 px-4 py-2 bg-terracotta/15 border border-terracotta/30 rounded-full">
            <span class="text-lg">⚡</span>
            <span class="text-white text-sm font-medium">Trening EMS</span>
          </div>
          <div class="text-terracotta font-bold text-xl">+</div>
          <div class="flex items-center gap-2 px-4 py-2 bg-olive/15 border border-olive/30 rounded-full">
            <span class="text-lg">🌊</span>
            <span class="text-white text-sm font-medium">Endoterapia</span>
          </div>
          <div class="text-gray-400 font-bold text-xl">=</div>
          <div class="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full">
            <span class="text-lg">✨</span>
            <span class="text-white text-sm font-medium">Kompleksowe rezultaty</span>
          </div>
        </div>

        <!-- Package cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-6">
          <div *ngFor="let pkg of packages; let i = index"
               appScrollReveal [revealDelay]="i * 0.1"
               class="relative flex flex-col rounded-3xl transition-all duration-300"
               [ngClass]="pkg.highlight
                 ? 'bg-gradient-to-b from-terracotta to-terracotta-700 shadow-2xl shadow-terracotta/30 md:scale-[1.03] ring-2 ring-terracotta/60'
                 : 'bg-white/8 border border-white/15 hover:border-terracotta/40 hover:bg-white/12'">

            <!-- Most popular badge -->
            <div *ngIf="pkg.badge" class="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <span class="px-5 py-1.5 bg-white text-terracotta text-xs font-bold rounded-full uppercase tracking-wider shadow-lg whitespace-nowrap">
                {{ pkg.badge }}
              </span>
            </div>

            <div class="p-7 lg:p-8 flex flex-col flex-1">

              <!-- Size badge + name -->
              <div class="mb-6">
                <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
                     [ngClass]="pkg.highlight ? 'bg-white/20' : 'bg-terracotta/15'">
                  <span class="text-2xl font-bold"
                        [ngClass]="pkg.highlight ? 'text-white' : 'text-terracotta'">
                    {{ pkg.size }}
                  </span>
                </div>
                <h3 class="font-display text-xl font-bold"
                    [ngClass]="pkg.highlight ? 'text-white' : 'text-white'">
                  {{ pkg.name }}
                </h3>
              </div>

              <!-- Price -->
              <div class="mb-7">
                <div class="flex items-baseline gap-1">
                  <span class="text-4xl font-bold"
                        [ngClass]="pkg.highlight ? 'text-white' : 'text-terracotta'">
                    {{ pkg.price | number:'1.0-0' }}
                  </span>
                  <span class="text-lg font-medium"
                        [ngClass]="pkg.highlight ? 'text-white/80' : 'text-gray-400'">
                    zł
                  </span>
                </div>
                <p class="text-sm mt-1"
                   [ngClass]="pkg.highlight ? 'text-white/70' : 'text-gray-500'">
                  jednorazowo
                </p>
              </div>

              <!-- Items list -->
              <ul class="space-y-3 mb-8 flex-1">
                <li *ngFor="let item of pkg.items"
                    class="flex items-start gap-3">
                  <div class="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                       [ngClass]="pkg.highlight ? 'bg-white/25' : 'bg-terracotta/20'">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"
                         [ngClass]="pkg.highlight ? 'text-white' : 'text-terracotta'">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-sm leading-snug"
                        [ngClass]="pkg.highlight ? 'text-white/90' : 'text-gray-300'">
                    <span class="font-bold"
                          [ngClass]="pkg.highlight ? 'text-white' : 'text-white'">
                      {{ item.count }}
                    </span>
                    {{ item.label }}
                  </span>
                </li>
              </ul>

              <!-- CTA -->
              <button (click)="goToContact()"
                      class="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
                      [ngClass]="pkg.highlight
                        ? 'bg-white text-terracotta hover:bg-gray-50 hover:shadow-lg'
                        : 'bg-terracotta/20 text-white border border-terracotta/40 hover:bg-terracotta hover:border-terracotta'">
                Zapytaj o pakiet
              </button>
            </div>
          </div>
        </div>

        <!-- Footer note -->
        <p appScrollReveal class="text-center text-gray-500 text-sm mt-10">
          Już wkrótce więcej pakietów — z terapią ciała i nie tylko.
          <a routerLink="/cennik" class="text-terracotta hover:underline ml-1">Zobacz pełny cennik →</a>
        </p>

      </div>
    </section>
  `,
  styles: []
})
export class PackagesComponent {
  constructor(private router: Router) {}

  packages: Package[] = [
    {
      size: 'S',
      name: 'Be Harmony Pakiet „S"',
      price: 1450,
      items: [
        { count: '4×', label: 'Trening EMS' },
        { count: '4×', label: 'Endoterapia Uda + Pośladki' },
        { count: '1×', label: 'Relaksacyjny masaż twarzy i głowy' },
      ],
    },
    {
      size: 'M',
      name: 'Be Harmony Pakiet „M"',
      price: 2250,
      highlight: true,
      badge: 'Najpopularniejszy',
      items: [
        { count: '8×', label: 'Trening EMS' },
        { count: '6×', label: 'Endoterapia Uda + Pośladki' },
        { count: '1×', label: 'Relaksacyjny masaż całego ciała' },
      ],
    },
    {
      size: 'L',
      name: 'Be Harmony Pakiet „L"',
      price: 3260,
      items: [
        { count: '12×', label: 'Trening EMS' },
        { count: '8×', label: 'Endoterapia Uda + Pośladki' },
        { count: '1×', label: 'Masaż tkanek głębokich' },
        { count: '1×', label: 'Relaksacyjny masaż całego ciała' },
      ],
    },
  ];

  goToContact() {
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      this.scrollToSection('kontakt');
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scrollToSection('kontakt'), 100);
      });
    }
  }

  private scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
