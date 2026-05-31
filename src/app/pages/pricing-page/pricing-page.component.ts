import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface PricingCategory {
  name: string;
  icon: string;
  items: PricingItem[];
  isEms?: boolean;
  hideHeader?: boolean; // bez nagłówka kategorii — tylko pozycje
}

interface PricingItem {
  name: string;
  description?: string;
  price: string;
  note?: string;
  badge?: string;
}

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  template: `
    <div class="min-h-screen bg-white pt-24 pb-20">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-16" appScrollReveal>
          <a routerLink="/" class="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-600 transition-colors text-sm mb-6">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Powrót do strony głównej
          </a>
          <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            <span class="text-terracotta">Cennik</span> usług
          </h1>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            Przejrzysty cennik wszystkich naszych usług. Ceny podane w złotych polskich.
          </p>
        </div>

        <!-- ENDOTERAPIA HIGHLIGHT -->
        <div appScrollReveal class="mb-10">
          <div class="relative bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-terracotta/30">
              <!-- Endo Info -->
              <div class="p-5 sm:p-7 md:p-10">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-terracotta to-terracotta-600 flex items-center justify-center shadow-lg">
                    <span class="text-2xl">🌊</span>
                  </div>
                  <div>
                    <h2 class="font-display text-2xl md:text-3xl font-bold text-gray-900">Endoterapia</h2>
                    <p class="text-terracotta text-sm">Kompresyjne mikrowibracje</p>
                  </div>
                </div>

                <div class="overflow-x-auto rounded-xl border border-gray-100">
                  <table class="w-full text-sm min-w-[340px]">
                    <thead>
                      <tr class="bg-terracotta/5">
                        <th class="text-left px-3 sm:px-4 py-3 text-gray-500 font-medium">Strefa</th>
                        <th class="text-center px-3 sm:px-4 py-3 text-gray-500 font-medium">Pojedynczy</th>
                        <th class="text-center px-3 sm:px-4 py-3 text-gray-500 font-medium">Karnet 6×</th>
                        <th class="text-center px-3 sm:px-4 py-3 text-gray-500 font-medium">Karnet 10×</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-50">
                      <tr *ngFor="let item of endoPricing; let odd = odd"
                          [class]="odd ? 'bg-gray-50/40' : ''">
                        <td class="px-3 sm:px-4 py-2.5 text-gray-700 text-xs sm:text-sm font-medium">{{ item.name }}</td>
                        <td class="px-3 sm:px-4 py-2.5 text-center text-xs sm:text-sm text-gray-600">{{ item.single }} zł</td>
                        <td class="px-3 sm:px-4 py-2.5 text-center text-xs sm:text-sm font-semibold text-terracotta">{{ item.x6 }} zł</td>
                        <td class="px-3 sm:px-4 py-2.5 text-center text-xs sm:text-sm font-semibold text-terracotta">{{ item.x10 }} zł</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
          </div>
        </div>

        <!-- EMS HIGHLIGHT -->
        <div appScrollReveal class="mb-10">
          <div class="relative bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-olive/40">
            <div class="absolute top-0 right-0 px-6 py-2 bg-terracotta text-white text-sm font-bold rounded-bl-2xl uppercase tracking-wider z-10">
              Nowość!
            </div>
            <div class="flex flex-col lg:flex-row">
              <div class="lg:w-2/5 relative">
                <img src="assets/img/cennik_ems.jpg"
                     alt="Cennik EMS - Trening Electrical Muscle Stimulation"
                     class="w-full h-full object-cover min-h-[250px] lg:min-h-full">
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-r"></div>
              </div>
              <div class="lg:w-3/5 p-5 sm:p-7 md:p-10">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-olive to-olive-400 flex items-center justify-center shadow-lg">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h2 class="font-display text-2xl md:text-3xl font-bold text-gray-900">Trening EMS</h2>
                    <p class="text-olive text-sm">Electrical Muscle Stimulation</p>
                  </div>
                </div>
                <div class="bg-olive/5 rounded-xl p-6">
                  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h3 class="font-semibold text-gray-900 text-lg">Trening próbny</h3>
                      <p class="text-gray-500 text-sm mt-1">Pierwszy trening EMS w promocyjnej cenie</p>
                    </div>
                    <div class="text-right">
                      <span class="text-4xl font-bold text-terracotta">90</span>
                      <span class="text-gray-500 text-lg ml-1">zł</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- OTHER CATEGORIES -->
        <div class="space-y-8">
          <div *ngFor="let category of categories; let ci = index"
               appScrollReveal [revealDelay]="ci * 0.1"
               class="bg-white rounded-2xl shadow-sm overflow-hidden border border-olive/25 hover:shadow-md transition-shadow">
            
            <div *ngIf="!category.hideHeader" class="px-8 py-6 bg-gradient-to-r from-olive/5 to-white border-b border-olive/25">
              <div class="flex items-center gap-3">
                <span class="text-2xl">{{ category.icon }}</span>
                <h2 class="font-display text-xl md:text-2xl font-bold text-gray-900">{{ category.name }}</h2>
              </div>
            </div>

            <div class="divide-y divide-gray-100">
              <div *ngFor="let item of category.items"
                   class="px-4 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-olive/5 transition-colors">
                <div class="flex-1">
                  <div class="flex items-center gap-3 flex-wrap">
                    <h3 *ngIf="item.name" class="font-medium text-gray-900">{{ item.name }}</h3>
                    <span *ngIf="item.badge" class="px-2.5 py-0.5 bg-terracotta/20 text-terracotta-700 border border-terracotta/30 text-xs font-medium rounded-full">{{ item.badge }}</span>
                  </div>
                  <p *ngIf="item.description" class="text-gray-500 text-sm mt-0.5">{{ item.description }}</p>
                </div>
                <div class="flex items-baseline gap-1 flex-shrink-0">
                  <span class="text-2xl font-bold text-terracotta">{{ item.price }}</span>
                  <span *ngIf="item.price !== 'Do ustalenia'" class="text-gray-400 text-sm">zł</span>
                  <span *ngIf="item.note" class="text-gray-400 text-xs ml-2">({{ item.note }})</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- PAKIETY -->
        <div appScrollReveal class="mt-12 mb-4">
          <div class="text-center mb-8">
            <span class="inline-block px-4 py-1.5 bg-terracotta text-white rounded-full text-sm font-medium mb-4">Pakiety</span>
            <h2 class="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Be Harmony <span class="text-terracotta">Pakiety</span>
            </h2>
            <p class="text-gray-500 max-w-xl mx-auto">EMS + Endoterapia — skuteczne duo dla sylwetki, którą widać i czuć.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch pt-6">
            <div *ngFor="let pkg of packages"
                 class="relative flex flex-col rounded-3xl transition-all duration-300"
                 [ngClass]="pkg.highlight
                   ? 'bg-gradient-to-b from-terracotta to-terracotta-700 shadow-2xl shadow-terracotta/25 md:scale-[1.03] ring-2 ring-terracotta/50'
                   : 'bg-white border-2 border-gray-100 hover:border-terracotta/30 shadow-sm hover:shadow-md'">

              <div *ngIf="pkg.badge" class="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span class="px-5 py-1.5 bg-[#1a1f16] text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg whitespace-nowrap">
                  {{ pkg.badge }}
                </span>
              </div>

              <div class="p-7 flex flex-col flex-1">
                <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                     [ngClass]="pkg.highlight ? 'bg-white/20' : 'bg-terracotta/10'">
                  <span class="text-xl font-bold" [ngClass]="pkg.highlight ? 'text-white' : 'text-terracotta'">{{ pkg.size }}</span>
                </div>

                <h3 class="font-display text-lg font-bold mb-1" [ngClass]="pkg.highlight ? 'text-white' : 'text-gray-900'">
                  {{ pkg.name }}
                </h3>

                <div class="flex items-baseline gap-1 mb-6 mt-2">
                  <span class="text-3xl font-bold" [ngClass]="pkg.highlight ? 'text-white' : 'text-terracotta'">{{ pkg.price }}</span>
                  <span class="font-medium" [ngClass]="pkg.highlight ? 'text-white/70' : 'text-gray-400'">zł</span>
                </div>

                <ul class="space-y-2.5 flex-1 mb-6">
                  <li *ngFor="let item of pkg.items" class="flex items-start gap-2.5 text-sm">
                    <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"
                         [ngClass]="pkg.highlight ? 'text-white/80' : 'text-terracotta'">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span [ngClass]="pkg.highlight ? 'text-white/90' : 'text-gray-600'">
                      <strong [ngClass]="pkg.highlight ? 'text-white' : 'text-gray-900'">{{ item.count }}</strong>
                      {{ item.label }}
                    </span>
                  </li>
                </ul>

                <button (click)="navigateToContact()"
                        class="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300"
                        [ngClass]="pkg.highlight
                          ? 'bg-white text-terracotta hover:bg-gray-50'
                          : 'bg-terracotta/10 text-terracotta border border-terracotta/30 hover:bg-terracotta hover:text-white'">
                  Zapytaj o pakiet
                </button>
              </div>
            </div>
          </div>

          <p class="text-center text-gray-400 text-sm mt-8">
            Już wkrótce więcej pakietów — z terapią ciała i nie tylko.
          </p>
        </div>

        <!-- CTA -->
        <div class="text-center mt-16" appScrollReveal>
          <p class="text-gray-500 text-sm mb-6">Masz pytania dotyczące cennika? Skontaktuj się z nami.</p>
          <a href="javascript:void(0)" (click)="navigateToContact()"
             class="inline-flex items-center gap-2 px-8 py-4 bg-terracotta text-white font-semibold rounded-full hover:bg-terracotta-600 hover:shadow-xl transition-all duration-300 text-lg">
            Umów wizytę
          </a>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class PricingPageComponent {
  constructor(private router: Router) {}

  navigateToContact() {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const el = document.getElementById('kontakt');
        if (el) {
          const offset = 80;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    });
  }

  endoPricing = [
    { name: 'Twarz',                      single: '120', x6: '640',  x10: '1020' },
    { name: 'Brzuch + Boczki',            single: '160', x6: '860',  x10: '1360' },
    { name: 'Uda',                        single: '170', x6: '920',  x10: '1445' },
    { name: 'Pośladki',                   single: '160', x6: '860',  x10: '1360' },
    { name: 'Całe Nogi',                  single: '210', x6: '1130', x10: '1785' },
    { name: 'Uda + Pośladki',             single: '210', x6: '1130', x10: '1785' },
    { name: 'Uda + Brzuch',               single: '245', x6: '1320', x10: '2080' },
    { name: 'Pośladki + Brzuch + Boczki', single: '245', x6: '1320', x10: '2080' },
  ];

  packages = [
    {
      size: 'S', name: 'Pakiet „S"', price: 1450, highlight: false, badge: '',
      items: [
        { count: '4×', label: 'Trening EMS' },
        { count: '4×', label: 'Endoterapia Uda + Pośladki' },
        { count: '1×', label: 'Masaż relaksacyjny twarzy i głowy' },
      ],
    },
    {
      size: 'M', name: 'Pakiet „M"', price: 2250, highlight: true, badge: 'Najpopularniejszy',
      items: [
        { count: '8×', label: 'Trening EMS' },
        { count: '6×', label: 'Endoterapia Uda + Pośladki' },
        { count: '1×', label: 'Masaż relaksacyjny całego ciała' },
      ],
    },
    {
      size: 'L', name: 'Pakiet „L"', price: 3260, highlight: false, badge: '',
      items: [
        { count: '12×', label: 'Trening EMS' },
        { count: '8×', label: 'Endoterapia Uda + Pośladki' },
        { count: '1×', label: 'Masaż tkanek głębokich' },
        { count: '1×', label: 'Masaż relaksacyjny całego ciała' },
      ],
    },
  ];

  categories: PricingCategory[] = [
    {
      name: 'Terapia',
      icon: '🧘',
      items: [
        { name: 'Terapia ciała', description: '50 min — kompleksowa praca z ciałem', price: '180' },
        { name: 'Terapia po zabiegach medycyny estetycznej i chirurgii plastycznej', description: '50 min — specjalistyczna terapia wspierająca regenerację', price: '200' },
        { name: 'Terapia wisceralna', description: '50 min — delikatna praca w obrębie jamy brzusznej i klatki piersiowej', price: '200' },
      ]
    },
    {
      name: 'Masaż indywidualnie dobrany',
      icon: '💆',
      items: [
        { name: 'Masaż indywidualnie dopasowany', description: '50 min', price: '180' },
      ]
    },
    {
      name: 'HTR — Holistyczna Terapia Relaksacyjna',
      icon: '🌿',
      items: [
        { name: '', description: '90 min — głęboka relaksacja łącząca techniki manualne, oddechowe i energetyczne', price: '380', badge: 'Autorska metoda' },
      ]
    },
    {
      name: 'Trening',
      icon: '💪',
      items: [
        { name: 'Trening Funkcjonalny', description: '45 min — indywidualny program ćwiczeń', price: '180' },
      ]
    },
  ];
}
