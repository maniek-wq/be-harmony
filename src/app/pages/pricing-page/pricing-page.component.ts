import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { PackagesComponent } from '../../components/packages/packages.component';

interface PricingCategory {
  id: string;
  name: string;
  eyebrow: string;
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
  imports: [CommonModule, RouterLink, ScrollRevealDirective, PackagesComponent],
  template: `
    <div class="min-h-screen bg-white pt-24 pb-20 overflow-x-hidden">
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
        <div id="cennik-endoterapia" appScrollReveal class="mb-10 scroll-mt-28">
          <div class="bg-endo-sheet rounded-3xl shadow-xl overflow-hidden px-3 sm:px-8 pt-7 pb-5 sm:pt-7 sm:pb-5">
            <ng-container *ngTemplateOutlet="brandLogo"></ng-container>

            <!-- Title -->
            <h2 class="font-display text-center uppercase leading-[0.95] mt-5 sm:mt-4 text-[clamp(2rem,10.5vw,3.25rem)] tracking-tight">
              <span class="block sm:inline text-endo-dark">Cennik</span>
              <span class="block sm:inline text-endo-accent sm:ml-3">Endoterapia</span>
            </h2>
            <p class="text-center mt-4 sm:mt-3 text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.35em] leading-relaxed uppercase text-endo-muted">
              Modelowanie · Ujędrnianie<span class="hidden sm:inline"> · </span><br class="sm:hidden">Redukcja cellulitu
            </p>

            <!-- Benefits -->
            <div class="grid grid-cols-3 gap-2 sm:gap-0 mt-6 sm:mt-5 max-w-2xl mx-auto sm:divide-x sm:divide-endo-line">
              <div *ngFor="let b of endoBenefits; let i = index" class="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 sm:justify-center sm:px-4 text-center sm:text-left">
                <span class="relative flex-shrink-0 w-6 h-6 rounded-full bg-endo-accent/15 flex items-center justify-center">
                  <span class="absolute w-3 h-3 rounded-full bg-endo-accent animate-dot-pulse motion-reduce:animate-none" [style.animation-delay.ms]="i * 400"></span>
                  <span class="relative w-3 h-3 rounded-full bg-endo-accent"></span>
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
              <div class="bg-endo-paper rounded-2xl sm:rounded-3xl">
                <!-- ENDO START -->
                <div class="p-2 sm:p-3 pb-0 sm:pb-0">
                  <div class="rounded-2xl bg-endo-accent text-white shadow-lg shadow-endo-accent/25 px-4 sm:px-6 py-3.5 sm:py-3
                              flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center">
                    <div class="flex flex-col items-center gap-1">
                      <span class="px-2.5 py-0.5 rounded-full bg-endo-dark/70 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.08em] whitespace-nowrap">
                        Dla nowych osób · tylko jednorazowo
                      </span>
                      <span class="text-base sm:text-lg font-extrabold uppercase tracking-[0.08em] leading-none">Endo Start</span>
                    </div>
                    <div class="flex items-center gap-3 sm:gap-4">
                      <span class="px-3 py-1 rounded-full bg-white text-endo-dark text-xs sm:text-sm font-extrabold whitespace-nowrap">1+1 GRATIS</span>
                      <span class="w-px h-6 bg-white/50"></span>
                      <span class="text-[11px] sm:text-xs font-semibold leading-tight">2 partie ciała<br class="sm:hidden"> w cenie 1</span>
                      <span class="w-px h-6 bg-white/50"></span>
                      <span class="px-4 py-1 rounded-full bg-white text-endo-accent whitespace-nowrap">
                        <span class="font-display text-xl sm:text-2xl font-bold leading-none">170</span>
                        <span class="text-[9px] font-bold ml-0.5">zł</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-endo-line">
                <div *ngFor="let t of endoTiers" class="px-4 py-5 md:px-5 md:pt-5 md:pb-6">
                  <div class="flex items-center justify-between gap-3 md:flex-col md:justify-start md:text-center">
                    <span class="inline-block px-4 md:px-7 py-1.5 md:py-1 rounded-full bg-endo-pill text-endo-dark text-xs md:text-sm font-bold uppercase whitespace-nowrap">
                      Zakres {{ t.name }}
                    </span>
                    <div class="text-right md:text-center md:mt-1">
                      <p class="font-display text-endo-accent leading-none whitespace-nowrap">
                        <span class="text-3xl">{{ t.price }}</span>
                        <sup class="text-[10px] font-sans font-semibold ml-1 align-super">zł</sup>
                      </p>
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
            </div>

            <!-- KARNETY -->
            <div class="mt-4 rounded-2xl sm:rounded-3xl bg-endo-dark overflow-hidden">
              <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-4 sm:px-6 pt-3.5 pb-3 sm:pt-3 sm:pb-2.5">
                <h3 class="font-display uppercase text-endo-cream text-[1.35rem] sm:text-2xl leading-tight whitespace-nowrap">Karnety Endoterapia</h3>
                <span class="flex-1 h-px bg-endo-cream/50 hidden sm:block"></span>
              </div>
              <div class="bg-endo-paper rounded-2xl sm:rounded-3xl p-3">
                <!-- Desktop: tabela -->
                <div class="hidden md:block rounded-xl border border-endo-line overflow-hidden shadow-sm">
                  <table class="w-full border-collapse text-endo-dark">
                    <thead>
                      <tr class="bg-endo-pill">
                        <th class="py-2.5 px-3 text-xs font-bold">Zakres</th>
                        <th *ngFor="let c of endoPassCounts" class="py-2.5 px-3 text-xs font-bold border-l border-endo-line">{{ c }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr *ngFor="let p of endoPasses; let odd = odd" class="border-t border-endo-line" [ngClass]="odd ? 'bg-endo-row' : 'bg-white/60'">
                        <td class="py-3 px-3 w-[28%]">
                          <p class="text-sm font-bold">Zakres {{ p.name }}</p>
                        </td>
                        <td *ngFor="let price of p.prices; let i = index" class="py-3 px-3 border-l border-endo-line text-center whitespace-nowrap">
                          <span class="font-display text-xl font-bold text-endo-accent">{{ price }}</span>
                          <span class="text-[10px] font-semibold text-endo-accent ml-1">zł</span>
                          <p *ngIf="p.savings[i]" class="text-[10px] text-endo-muted mt-0.5">oszczędzasz {{ p.savings[i] }} zł</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- Mobile: karty -->
                <div class="md:hidden space-y-3">
                  <div *ngFor="let p of endoPasses" class="rounded-xl border border-endo-line bg-white/60 overflow-hidden">
                    <div class="bg-endo-pill px-4 py-2 flex items-baseline justify-between">
                      <span class="text-sm font-bold text-endo-dark">Zakres {{ p.name }}</span>
                    </div>
                    <div class="grid grid-cols-3 divide-x divide-endo-line">
                      <div *ngFor="let price of p.prices; let i = index" class="py-3 text-center">
                        <p class="text-[10px] text-endo-muted">{{ endoPassCounts[i] }}</p>
                        <p class="font-display text-lg sm:text-xl font-bold text-endo-accent leading-tight whitespace-nowrap">{{ price }}</p>
                        <p class="text-[9px] font-semibold text-endo-accent">zł</p>
                        <p *ngIf="p.savings[i]" class="text-[9px] text-endo-muted mt-0.5 leading-tight">oszczędzasz<br>{{ p.savings[i] }} zł</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p class="text-center text-[11px] text-endo-muted mt-4">Zakres zabiegu dobieramy indywidualnie do Twoich potrzeb.</p>
          </div>
        </div>

        <!-- EMS -->
        <div id="cennik-ems" appScrollReveal class="mb-10 scroll-mt-28">
          <div class="bg-endo-sheet rounded-3xl shadow-xl overflow-hidden px-3 sm:px-8 pt-7 pb-5">
            <ng-container *ngTemplateOutlet="brandLogo"></ng-container>

            <h2 class="font-display text-center uppercase leading-[0.95] mt-5 sm:mt-4 text-[clamp(2rem,10.5vw,3.25rem)] tracking-tight">
              <span class="text-endo-dark">Cennik</span>
              <span class="text-endo-accent ml-2 sm:ml-3">EMS</span>
            </h2>
            <p class="text-center mt-4 sm:mt-3 text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.35em] leading-relaxed uppercase text-endo-muted">Trening EMS</p>

            <!-- Benefits -->
            <div class="grid grid-cols-3 gap-2 sm:gap-6 mt-6 sm:mt-5 max-w-2xl mx-auto">
              <div *ngFor="let b of emsBenefits; let i = index" class="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 sm:justify-center text-center sm:text-left">
                <span class="relative flex-shrink-0 w-6 h-6 rounded-full bg-endo-accent/15 flex items-center justify-center">
                  <span class="absolute w-3 h-3 rounded-full bg-endo-accent animate-dot-pulse motion-reduce:animate-none" [style.animation-delay.ms]="i * 400"></span>
                  <span class="relative w-3 h-3 rounded-full bg-endo-accent"></span>
                </span>
                <span class="text-[9px] sm:text-[10px] font-semibold uppercase leading-tight text-endo-dark">
                  {{ b.line1 }}<br>{{ b.line2 }}
                </span>
              </div>
            </div>

            <div *ngFor="let sec of emsSections; let first = first"
                 class="rounded-2xl sm:rounded-3xl bg-endo-dark overflow-hidden"
                 [ngClass]="first ? 'mt-7 sm:mt-6' : 'mt-4'">
              <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-4 sm:px-6 pt-3.5 pb-3 sm:pt-3 sm:pb-2.5">
                <h3 class="font-display uppercase text-endo-cream text-[1.35rem] sm:text-2xl leading-tight whitespace-nowrap">{{ sec.title }}</h3>
                <span class="flex-1 h-px bg-endo-cream/50 hidden sm:block"></span>
                <span class="text-[9px] tracking-[0.15em] uppercase text-endo-cream/80 sm:text-endo-cream/90 sm:text-right leading-snug">
                  {{ sec.note[0] }}<br class="hidden sm:inline"> {{ sec.note[1] }}
                </span>
              </div>

              <div class="bg-endo-paper rounded-2xl sm:rounded-3xl px-3 sm:px-4 pt-3 pb-3 space-y-2">
                <div class="hidden sm:grid grid-cols-[1fr_auto_1fr] gap-4 px-5 text-[8px] font-bold tracking-[0.15em] uppercase text-endo-muted">
                  <span>Jednorazowe</span><span class="text-center w-28">Cena</span><span></span>
                </div>
                <p class="sm:hidden px-1 text-[8px] font-bold tracking-[0.15em] uppercase text-endo-muted">Jednorazowe</p>

                <ng-container *ngFor="let row of sec.single">
                  <ng-container *ngTemplateOutlet="emsRow; context: { $implicit: row }"></ng-container>
                </ng-container>

                <div class="flex items-center gap-3 py-0.5">
                  <span class="flex-1 h-px bg-endo-line"></span>
                  <span class="text-[8px] font-bold tracking-[0.2em] uppercase text-endo-muted">Karnety</span>
                  <span class="flex-1 h-px bg-endo-line"></span>
                </div>

                <ng-container *ngFor="let row of sec.passes">
                  <ng-container *ngTemplateOutlet="emsRow; context: { $implicit: row }"></ng-container>
                </ng-container>
              </div>
            </div>
          </div>
        </div>

        <!-- OTHER CATEGORIES -->
        <div class="space-y-8">
          <article *ngFor="let category of categories; let ci = index" [id]="category.id"
                   appScrollReveal [revealDelay]="ci * 0.1"
                   class="font-manrope overflow-hidden rounded-[24px] border border-[#eadbc8] bg-[#fffbf5] shadow-[0px_20px_60px_-25px_rgba(106,57,43,0.33)]">

            <!-- Pasek -->
            <div class="flex items-center justify-between gap-3 px-6 sm:px-8 py-[14px] border-b border-[#eadbc8] bg-[#f4e9db]">
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-[#a9533a]"></span>
                <p class="text-[10px] leading-[15px] font-semibold tracking-[1.6px] uppercase text-[#593b2d]">{{ category.eyebrow }}</p>
              </div>
              <p class="text-[10px] leading-[15px] font-medium whitespace-nowrap text-[#91725f]">0{{ ci + 1 }} / 0{{ categories.length }}</p>
            </div>

            <div class="px-6 sm:px-8 pt-6 pb-7">
              <!-- Nagłówek -->
              <div *ngIf="!category.hideHeader" class="flex items-center justify-between gap-4 pb-5 mb-5 border-b border-[#eadbc8]">
                <h2 class="font-cormorant font-medium text-[30px] sm:text-[38px] leading-[1.15] text-[#293b2e]">{{ category.name }}</h2>
                <div class="w-12 h-12 flex-shrink-0 rounded-full border border-[#9b5036]/35 flex items-center justify-center">
                  <span class="text-xl leading-none grayscale-[35%]">{{ category.icon }}</span>
                </div>
              </div>

              <!-- Pozycje -->
              <div class="flex flex-col gap-2.5">
                <div *ngFor="let item of category.items"
                     class="flex items-center gap-4 px-4 sm:px-5 py-4 rounded-xl border border-[#eadbc8] bg-white">
                  <div class="flex-1 min-w-0">
                    <span *ngIf="item.badge" class="mb-2 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#eadfc5]">
                      <img src="assets/img/pakiety/check-oszczedzasz.svg" alt="" width="12" height="12" class="w-4 h-4">
                      <span class="text-xs leading-4 font-medium text-[#536441] whitespace-nowrap">{{ item.badge }}</span>
                    </span>
                    <p *ngIf="item.name" class="text-[13px] sm:text-sm leading-5 font-semibold text-[#293b2e]">{{ item.name }}</p>
                    <p *ngIf="item.description" class="pt-1 text-[11px] sm:text-xs leading-[18px] text-[#91725f]">{{ item.description }}</p>
                  </div>
                  <p class="flex-shrink-0 whitespace-nowrap text-[#293b2e]">
                    <span class="font-cormorant text-[28px] sm:text-[30px] leading-8 font-semibold">{{ item.price }}</span>
                    <span *ngIf="item.price !== 'Do ustalenia'" class="ml-1 text-[10px] leading-[13.5px] font-medium opacity-65">zł</span>
                    <span *ngIf="item.note" class="ml-2 text-[10px] text-[#91725f]">({{ item.note }})</span>
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- PAKIETY -->
        <app-packages class="block mt-12 mb-4 w-screen ml-[calc(50%-50vw)]"></app-packages>

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
    <ng-template #brandLogo>
      <div class="text-center">
        <svg class="mx-auto w-24 h-5 text-endo-accent" viewBox="0 0 120 20" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round">
          <path d="M0 10h44l4-6 5 12 5-14 5 12 3-4h54"/>
        </svg>
        <p class="font-display text-[1.75rem] sm:text-3xl text-endo-dark mt-1 leading-none">Be Harmony</p>
        <p class="mt-2 text-[9px] sm:text-[10px] tracking-[0.3em] font-semibold text-endo-muted uppercase">Gabinet terapii ciała</p>
      </div>
    </ng-template>

    <ng-template #emsRow let-row>
      <div class="rounded-xl border px-4 sm:px-5 py-2.5 flex items-center justify-between gap-3 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:gap-4"
           [ngClass]="row.highlight ? 'bg-[#FDF0E2] border-[#EBCFB0]' : 'bg-white/60 border-endo-line'">
        <div>
          <p class="text-sm font-semibold text-endo-dark">{{ row.name }}</p>
          <p *ngIf="row.per" class="sm:hidden text-[11px] text-endo-muted">{{ row.per }} zł / trening</p>
        </div>
        <p class="font-display text-lg md:text-xl font-bold text-endo-accent whitespace-nowrap text-right sm:text-center sm:w-28">{{ row.price }} zł</p>
        <div class="hidden sm:block">
          <span *ngIf="row.per" class="block rounded-md bg-endo-pill/70 py-1 text-center text-[11px] text-endo-dark">{{ row.per }} zł / trening</span>
        </div>
      </div>
    </ng-template>
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
    { line1: 'Ujędrnia', line2: 'i modeluje sylwetkę' },
    { line1: 'Redukuje', line2: 'cellulit' },
    { line1: 'Poprawia krążenie', line2: 'i regenerację' },
  ];

  emsBenefits = [
    { line1: 'Wzmocnienie', line2: 'mięśni' },
    { line1: 'Modelowanie', line2: 'sylwetki' },
    { line1: 'Więcej', line2: 'energii' },
  ];

  emsSections = [
    {
      title: 'Trening EMS',
      note: ['Indywidualny trening', 'pod Twoje cele'],
      single: [
        { name: 'Trening próbny', price: '90', highlight: true },
        { name: '1 Trening', price: '190' },
      ],
      passes: [
        { name: 'Karnet 4', price: '720', per: '180' },
        { name: 'Karnet 8', price: '1 360', per: '170' },
        { name: 'Karnet 12', price: '1 920', per: '160' },
      ],
    },
    {
      title: 'Trening w duecie',
      note: ['Trenuj razem', 'i motywuj się nawzajem'],
      single: [
        { name: '1 Trening', price: '320' },
      ],
      passes: [
        { name: 'Karnet 4', price: '1 200', per: '300' },
        { name: 'Karnet 8', price: '2 240', per: '280' },
        { name: 'Karnet 12', price: '3 120', per: '260' },
      ],
    },
  ];

  endoTiers = [
    { name: 'SOLO',  price: '170', areas: ['twarz / szyja / dekolt', 'brzuch', 'pośladki', 'uda'] },
    { name: 'DUO',   price: '280', areas: ['uda + pośladki', 'uda + brzuch', 'brzuch + pośladki', 'całe nogi'] },
    { name: 'MULTI', price: '370', areas: ['uda + pośladki + brzuch', 'całe nogi + pośladki', 'własna personalizacja'] },
  ];

  endoPassCounts = ['4 zabiegi', '8 zabiegów', '12 zabiegów'];

  endoPasses = [
    { name: 'SOLO', prices: ['660', '1 090', '1 440'], savings: [0, 0, 0] },
    { name: 'DUO', prices: ['1 280', '2 110', '2 780'], savings: [80, 130, 180] },
    { name: 'MULTI', prices: ['1 860', '3 060', '4 040'], savings: [180, 300, 400] },
  ];

  categories: PricingCategory[] = [
    {
      id: 'cennik-terapia',
      name: 'Terapia',
      eyebrow: 'Praca z ciałem',
      icon: '🧘',
      items: [
        { name: 'Terapia ciała', description: '50 min — kompleksowa praca z ciałem', price: '180' },
        { name: 'Terapia po zabiegach medycyny estetycznej i chirurgii plastycznej', description: '50 min — specjalistyczna terapia wspierająca regenerację', price: '200' },
        { name: 'Terapia wisceralna', description: '50 min — delikatna praca w obrębie jamy brzusznej i klatki piersiowej', price: '200' },
      ]
    },
    {
      id: 'cennik-masaz',
      name: 'Masaż indywidualnie dobrany',
      eyebrow: 'Relaks i regeneracja',
      icon: '💆',
      items: [
        { name: 'Masaż indywidualnie dopasowany', description: '50 min', price: '180' },
      ]
    },
    {
      id: 'cennik-htr',
      name: 'HTR — Holistyczna Terapia Relaksacyjna',
      eyebrow: 'Głęboki relaks',
      icon: '🌿',
      items: [
        { name: '', description: '90 min — głęboka relaksacja łącząca techniki manualne, oddechowe i energetyczne', price: '380', badge: 'Autorska metoda' },
      ]
    },
    {
      id: 'cennik-trening',
      name: 'Trening',
      eyebrow: 'Ruch i siła',
      icon: '💪',
      items: [
        { name: 'Trening Funkcjonalny', description: '45 min — indywidualny program ćwiczeń', price: '180' },
      ]
    },
  ];
}
