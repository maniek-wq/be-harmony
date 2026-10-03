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
          <div class="bg-endo-sheet rounded-3xl shadow-xl overflow-hidden -mx-2 sm:mx-0 md:max-w-4xl md:mx-auto px-3 sm:px-8 pt-7 pb-5 sm:pt-7 sm:pb-5">
            <!-- Logo -->
            <div class="text-center">
              <svg class="mx-auto w-24 h-5 text-endo-accent" viewBox="0 0 120 20" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round">
                <path d="M0 10h44l4-6 5 12 5-14 5 12 3-4h54"/>
              </svg>
              <p class="font-display text-[1.75rem] sm:text-3xl text-endo-dark mt-1 leading-none">Be Harmony</p>
              <p class="mt-2 text-[9px] sm:text-[10px] tracking-[0.3em] font-semibold text-endo-muted uppercase">Gabinet terapii ciała</p>
            </div>

            <!-- Title -->
            <h2 class="font-display text-center uppercase leading-[0.95] mt-5 sm:mt-4 text-[clamp(2rem,10.5vw,3.25rem)] tracking-tight">
              <span class="block sm:inline text-endo-dark">Cennik</span>
              <span class="block sm:inline text-endo-accent sm:ml-3">Endoterapia</span>
            </h2>
            <p class="text-center mt-4 sm:mt-3 text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.35em] leading-relaxed uppercase text-endo-muted">
              Modelowanie · Ujędrnianie<span class="hidden sm:inline"> · </span><br class="sm:hidden">Redukcja cellulitu
            </p>

            <!-- Benefits -->
            <div class="grid grid-cols-3 gap-2 sm:gap-6 mt-6 sm:mt-5 max-w-2xl mx-auto">
              <div *ngFor="let b of endoBenefits" class="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 sm:justify-center text-center sm:text-left">
                <span class="flex-shrink-0 w-10 h-10 rounded-full border border-endo-accent/40 bg-endo-accent/5 flex items-center justify-center text-endo-accent">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
                    <path [attr.d]="b.icon"/>
                  </svg>
                </span>
                <span class="text-[9px] sm:text-[10px] font-semibold uppercase leading-tight text-endo-dark">
                  {{ b.line1 }}<br>{{ b.line2 }}
                </span>
              </div>
            </div>

            <!-- CENNIK -->
            <div class="mt-7 sm:mt-6 rounded-2xl sm:rounded-3xl bg-endo-dark overflow-hidden">
              <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-4 sm:px-6 pt-3.5 pb-3 sm:pt-3 sm:pb-2.5">
                <h3 class="font-display uppercase text-endo-cream text-[1.35rem] sm:text-2xl leading-tight whitespace-nowrap">Cennik Endoterapia</h3>
                <span class="flex-1 h-px bg-endo-cream/50 hidden sm:block"></span>
                <span class="text-[9px] tracking-[0.15em] uppercase text-endo-cream/80 sm:text-endo-cream/90 sm:text-right leading-snug">
                  Zakres dobieramy<br class="hidden sm:inline"> do Twoich potrzeb
                </span>
              </div>
              <div class="bg-endo-paper rounded-2xl sm:rounded-3xl grid grid-cols-1 md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-endo-line">
                <div *ngFor="let t of endoTiers" class="px-4 py-5 md:px-5 md:pt-5 md:pb-6">
                  <div class="flex items-center justify-between gap-3 md:flex-col md:justify-start md:text-center">
                    <span class="inline-block px-4 md:px-7 py-1.5 md:py-1 rounded-full bg-endo-pill text-endo-dark text-xs md:text-sm font-bold uppercase whitespace-nowrap">
                      Zakres {{ t.name }}
                    </span>
                    <div class="text-right md:text-center md:mt-1">
                      <p class="font-display text-endo-accent leading-none whitespace-nowrap">
                        <span class="text-3xl">{{ t.price }}</span>
                        <sup class="text-[10px] font-sans font-semibold ml-1 align-super">PLN</sup>
                      </p>
                      <p class="text-[11px] md:text-xs font-medium text-endo-muted md:text-endo-dark mt-1">(ok. {{ t.duration }} min)</p>
                    </div>
                  </div>
                  <ul class="mt-3 md:mt-4 flex flex-wrap gap-1.5 md:block md:space-y-1">
                    <li *ngFor="let a of t.areas"
                        class="px-2.5 py-1 rounded-full border border-endo-line bg-white/60 text-xs text-endo-dark
                               md:flex md:gap-2 md:p-0 md:rounded-none md:border-0 md:bg-transparent md:text-xs">
                      <span class="hidden md:inline text-endo-dark/80">•</span>{{ a }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- KARNETY -->
            <div class="mt-4 rounded-2xl sm:rounded-3xl bg-endo-dark overflow-hidden">
              <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-4 sm:px-6 pt-3.5 pb-3 sm:pt-3 sm:pb-2.5">
                <h3 class="font-display uppercase text-endo-cream text-[1.35rem] sm:text-2xl leading-tight whitespace-nowrap">Karnety Endoterapia</h3>
                <span class="flex-1 h-px bg-endo-cream/50 hidden sm:block"></span>
                <span class="text-[9px] tracking-[0.15em] uppercase text-endo-cream/80 sm:text-endo-cream/90 sm:text-right leading-snug">
                  Ważne 3 miesiące<br class="hidden sm:inline"> od daty zakupu
                </span>
              </div>
              <div class="bg-endo-paper rounded-2xl sm:rounded-3xl p-3">
                <!-- Desktop: tabela -->
                <table class="hidden md:table w-full border-collapse text-endo-dark">
                  <thead>
                    <tr class="bg-endo-pill">
                      <th class="py-2 px-3 text-xs font-bold border border-endo-line rounded-tl-lg">Zakres</th>
                      <th *ngFor="let c of endoPassCounts" class="py-2 px-3 text-xs font-bold border border-endo-line">{{ c }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor="let p of endoPasses; let odd = odd" [class.bg-endo-row]="odd">
                      <td class="py-2.5 px-3 border border-endo-line">
                        <p class="text-sm font-bold">Zakres {{ p.name }}</p>
                        <p class="text-[10px] text-endo-muted">(ok. {{ p.duration }} min)</p>
                      </td>
                      <td *ngFor="let price of p.prices" class="py-2.5 px-3 border border-endo-line text-center whitespace-nowrap">
                        <span class="font-display text-xl font-bold text-endo-accent">{{ price }}</span>
                        <span class="text-[10px] font-semibold text-endo-accent ml-1">PLN</span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <!-- Mobile: karty -->
                <div class="md:hidden space-y-3">
                  <div *ngFor="let p of endoPasses" class="rounded-xl border border-endo-line bg-white/60 overflow-hidden">
                    <div class="bg-endo-pill px-4 py-2 flex items-baseline justify-between">
                      <span class="text-sm font-bold text-endo-dark">Zakres {{ p.name }}</span>
                      <span class="text-[10px] text-endo-muted">(ok. {{ p.duration }} min)</span>
                    </div>
                    <div class="grid grid-cols-3 divide-x divide-endo-line">
                      <div *ngFor="let price of p.prices; let i = index" class="py-3 text-center">
                        <p class="text-[10px] text-endo-muted">{{ endoPassCounts[i] }}</p>
                        <p class="font-display text-lg sm:text-xl font-bold text-endo-accent leading-tight whitespace-nowrap">{{ price }}</p>
                        <p class="text-[9px] font-semibold text-endo-accent">PLN</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p class="text-center text-[11px] text-endo-muted mt-4">Zakres zabiegu dobieramy indywidualnie do Twoich potrzeb.</p>
          </div>
        </div>

        <!-- EMS HIGHLIGHT -->
        <div appScrollReveal class="mb-10">
          <div class="relative bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-olive/40">
            <div class="absolute top-0 right-0 px-6 py-2 bg-terracotta text-white text-sm font-bold rounded-bl-2xl uppercase tracking-wider z-10">
              Nowość!
            </div>
            <div class="flex flex-col lg:flex-row min-h-[216px] sm:min-h-[260px] lg:min-h-[300px]">
              <div class="lg:w-2/5 relative">
                <img src="assets/img/cennik_ems.jpg"
                     alt="Cennik EMS - Trening Electrical Muscle Stimulation"
                     class="w-full h-full object-cover min-h-[216px] sm:min-h-[260px] lg:min-h-full">
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

                <div class="flex items-center gap-3 flex-wrap mb-6 mt-2">
                  <div class="flex items-baseline gap-1">
                    <span class="text-3xl font-bold" [ngClass]="pkg.highlight ? 'text-white' : 'text-terracotta'">{{ pkg.price }}</span>
                    <span class="font-medium" [ngClass]="pkg.highlight ? 'text-white/70' : 'text-gray-400'">zł</span>
                  </div>
                  <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border"
                        [ngClass]="pkg.highlight
                          ? 'bg-white/15 text-white border-white/30'
                          : 'bg-green-500/10 text-green-600 border-green-500/25'">
                    Oszczędzasz {{ pkg.savings }} zł
                  </span>
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
                <p class="text-center text-xs mt-3"
                   [ngClass]="pkg.highlight ? 'text-white/50' : 'text-gray-400'">
                  * Możliwość indywidualnego dopasowania
                </p>
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

  endoBenefits = [
    { line1: 'Ujędrnia', line2: 'i modeluje sylwetkę', icon: 'M8 3c0 4-2 5-2 9s2 5 2 9M16 3c0 4 2 5 2 9s-2 5-2 9M10 12h4' },
    { line1: 'Redukuje', line2: 'cellulit', icon: 'M7 4c1 4 0 6 0 9s2 7 5 7 5-4 5-7-1-5 0-9M10 10l2 2 2-2' },
    { line1: 'Poprawia krążenie', line2: 'i regenerację', icon: 'M12 21V11M12 14c-4 0-6-3-6-7 4 0 6 3 6 7zM12 11c0-4 2-7 6-7 0 4-2 7-6 7z' },
  ];

  endoTiers = [
    { name: 'SOLO',  price: '170', duration: 20, areas: ['twarz / szyja / dekolt', 'brzuch', 'pośladki', 'uda'] },
    { name: 'DUO',   price: '270', duration: 40, areas: ['uda + pośladki', 'uda + brzuch', 'brzuch + pośladki', 'całe nogi + pośladki'] },
    { name: 'MULTI', price: '380', duration: 50, areas: ['uda + pośladki + brzuch', 'całe nogi + pośladki', 'własna personalizacja'] },
  ];

  endoPassCounts = ['4 zabiegi', '8 zabiegów', '12 zabiegów'];

  endoPasses = [
    { name: 'SOLO',  duration: 20, prices: ['650', '1 220', '1 730'] },
    { name: 'DUO',   duration: 40, prices: ['1 030', '1 940', '2 750'] },
    { name: 'MULTI', duration: 60, prices: ['1 480', '2 810', '3 980'] },
  ];

  packages = [
    {
      size: 'S', name: 'Pakiet „S"', price: 1450, savings: 330, highlight: false, badge: '',
      items: [
        { count: '4×', label: 'Trening EMS' },
        { count: '4×', label: 'Endoterapia Uda + Pośladki' },
        { count: '1×', label: 'Masaż relaksacyjny twarzy i głowy' },
      ],
    },
    {
      size: 'M', name: 'Pakiet „M"', price: 2250, savings: 710, highlight: true, badge: 'Najpopularniejszy',
      items: [
        { count: '8×', label: 'Trening EMS' },
        { count: '6×', label: 'Endoterapia Uda + Pośladki' },
        { count: '1×', label: 'Masaż relaksacyjny całego ciała' },
      ],
    },
    {
      size: 'L', name: 'Pakiet „L"', price: 3260, savings: 1060, highlight: false, badge: '',
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
