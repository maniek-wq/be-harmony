import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface PackageItem {
  count: number;
  label: string;
}

interface PackagePrice {
  price: string;
  label: string;
  note: string;
}

interface Package {
  size: string;
  label: string;
  eyebrow: string;
  items: PackageItem[];
  prices: PackagePrice[];
  savings: number;
  highlight?: boolean;
}

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section id="pakiety" appScrollReveal class="relative overflow-hidden bg-gradient-to-br from-endo-sheet via-endo-paper to-endo-sheet px-4 sm:px-8 pt-12 pb-10">
      <!-- Tło: bańki w narożnikach i gałązka -->
      <div class="pointer-events-none absolute -left-24 -top-32 w-44 h-60 sm:-left-32 sm:-top-44 sm:w-[26rem] sm:h-[32rem] rounded-full bg-gradient-to-br from-[#A9583A] to-[#D59A79] opacity-80"></div>
      <div class="pointer-events-none absolute -left-40 -bottom-56 w-[26rem] h-[26rem] sm:w-[34rem] sm:h-[34rem] rounded-full bg-gradient-to-tr from-[#E2B79C]/70 to-[#F1DCCB]/40"></div>
      <div class="pointer-events-none absolute -right-40 -bottom-52 w-96 h-96 sm:w-[30rem] sm:h-[30rem] rounded-full bg-[#EBD5C4]/50"></div>
      <img src="assets/img/galazka-oliwna.png" alt="" aria-hidden="true" loading="lazy"
           class="pointer-events-none select-none absolute -right-8 -top-6 w-24 sm:-right-10 sm:-top-8 sm:w-56 lg:w-64 -scale-y-100 opacity-70 sm:opacity-90">

      <div class="relative max-w-[1360px] mx-auto">
        <div class="text-center mb-10">
          <span class="inline-block px-4 py-1.5 bg-terracotta/85 text-white rounded-full text-sm font-medium mb-4">Pakiety</span>
          <h2 class="font-display text-3xl md:text-4xl font-bold text-gray-900">
            Be Harmony <span class="text-terracotta">Pakiety</span>
          </h2>
          <p class="font-display uppercase leading-none mt-6 text-[clamp(2rem,9vw,3.5rem)] tracking-tight">
            <span class="text-olive-600">EMS</span>
            <span class="text-gray-900 mx-1 sm:mx-2">+</span><br class="sm:hidden">
            <span class="text-endo-accent">Endoterapia</span>
          </p>
          <p class="mt-4 text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-endo-muted">
            Skuteczne duo dla sylwetki, którą widać i czuć.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-4">
          <article *ngFor="let pkg of packages; let i = index"
                   class="font-manrope w-full max-w-[480px] lg:max-w-none mx-auto flex flex-col overflow-hidden rounded-[24px] border shadow-[0px_20px_60px_-25px_rgba(106,57,43,0.33)]"
                   [ngClass]="theme(pkg).card">

            <!-- Pasek -->
            <div class="flex items-center justify-between gap-3 px-6 sm:px-8 py-[14px] border-b" [ngClass]="theme(pkg).strap">
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full" [ngClass]="theme(pkg).strapDot"></span>
                <p class="text-[10px] leading-[15px] font-semibold tracking-[1.6px] uppercase whitespace-nowrap" [ngClass]="theme(pkg).strapLabel">{{ pkg.label }}</p>
              </div>
              <p class="text-[10px] leading-[15px] font-medium whitespace-nowrap" [ngClass]="theme(pkg).strapNum">PAKIET 0{{ i + 1 }} / 0{{ packages.length }}</p>
            </div>

            <div class="flex flex-col flex-1 px-6 sm:px-8 pt-7 pb-8">
              <!-- Nagłówek -->
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="text-[10px] leading-[15px] font-semibold tracking-[2.1px] uppercase" [ngClass]="theme(pkg).eyebrow">{{ pkg.eyebrow }}</p>
                  <h3 class="font-display font-normal text-[40px] sm:text-[46px] leading-[1.2] pt-1.5" [ngClass]="theme(pkg).title">
                    Pakiet {{ pkg.size }}<span [ngClass]="theme(pkg).titleDot">.</span>
                  </h3>
                </div>
                <div class="pt-1 flex-shrink-0">
                  <div class="w-12 h-12 rounded-full border flex items-center justify-center" [ngClass]="theme(pkg).mono">
                    <span class="font-display text-2xl leading-8">{{ pkg.size }}</span>
                  </div>
                </div>
              </div>

              <p class="pt-3 max-w-[280px] text-[13px] leading-6" [ngClass]="theme(pkg).desc">
                Trening i pielęgnacja w jednym planie.<br>Małe kroki. Odczuwalna różnica.
              </p>

              <!-- Zawartość pakietu -->
              <div class="mt-6 py-5 border-y grid grid-cols-2 gap-3" [ngClass]="theme(pkg).line">
                <div *ngFor="let item of pkg.items" class="flex items-center gap-2.5">
                  <span class="w-6 h-6 flex-shrink-0 rounded-full flex items-center justify-center" [ngClass]="theme(pkg).checkBg">
                    <img src="assets/img/pakiety/check.svg" alt="" width="16" height="16" class="w-4 h-4">
                  </span>
                  <p class="text-xs leading-4 whitespace-nowrap" [ngClass]="theme(pkg).item">
                    <span class="font-bold">{{ item.count }} ×</span> {{ item.label }}
                  </p>
                </div>
              </div>

              <!-- Zakresy -->
              <div class="pt-6 flex-1">
                <p class="text-[10px] leading-[15px] font-semibold tracking-[1.6px] uppercase" [ngClass]="theme(pkg).legend">Wybierz swój zakres</p>
                <div class="pt-3.5 flex flex-col gap-2.5">
                  <div *ngFor="let row of pkg.prices; let last = last"
                       class="flex items-center gap-3 px-3.5 py-4 rounded-xl border" [ngClass]="theme(pkg).row">
                    <div class="flex-1 min-w-0">
                      <p class="text-xs leading-[18px] font-bold" [ngClass]="theme(pkg).rowTitle">{{ row.label }}</p>
                      <p class="pt-1 text-[10px] leading-[15px]" [ngClass]="theme(pkg).rowSub">{{ row.note }}</p>
                      <span *ngIf="last && pkg.savings" class="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#eadfc5]">
                        <img src="assets/img/pakiety/check-oszczedzasz.svg" alt="" width="12" height="12" class="w-4 h-4">
                        <span class="text-xs leading-4 font-bold text-[#536441] whitespace-nowrap">Oszczędzasz {{ pkg.savings }} zł</span>
                      </span>
                    </div>
                    <p class="flex-shrink-0 whitespace-nowrap" [ngClass]="theme(pkg).price">
                      <span class="text-[21px] leading-[31.5px] font-semibold tracking-[-0.6px]">{{ row.price }}</span>
                      <span class="ml-1 text-[9px] leading-[13.5px] font-medium opacity-65">zł</span>
                    </p>
                  </div>
                </div>
              </div>

              <!-- CTA -->
              <div class="pt-6">
                <button (click)="goToContact()"
                        class="w-full flex items-center justify-between px-5 py-[17px] rounded-xl bg-[#293b2e] hover:bg-[#1f2d23] transition-colors">
                  <span class="text-xs leading-[18px] font-semibold text-[#fff5e6]">Zapytaj o pakiet</span>
                  <img src="assets/img/pakiety/strzalka.svg" alt="" width="20" height="20" class="w-5 h-5">
                </button>
              </div>
              <p class="pt-3.5 text-center text-[10px] leading-[15px]" [ngClass]="theme(pkg).foot">Bez zobowiązań. Zaczynamy od rozmowy.</p>
            </div>
          </article>
        </div>

        <p class="text-center text-endo-muted text-sm mt-8">
          Zakres terapii dopasowujemy indywidualnie do Twoich potrzeb.
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
      size: 'S', label: 'Na dobry start', eyebrow: 'Pierwszy krok', savings: 150,
      items: [{ count: 4, label: 'Trening EMS' }, { count: 4, label: 'Endo SOLO' }],
      prices: [
        { price: '1 340', label: '1 partia ciała', note: 'Skup się na swoim celu' },
        { price: '1 760', label: '2 partie ciała', note: 'Więcej możliwości' },
        { price: '2 100', label: 'Zakres rozszerzony', note: 'Kompleksowa troska o ciało' },
      ],
    },
    {
      size: 'M', label: 'Najczęściej wybierany', eyebrow: 'Więcej dla siebie', savings: 550, highlight: true,
      items: [{ count: 8, label: 'Trening EMS' }, { count: 8, label: 'Endo SOLO' }],
      prices: [
        { price: '2 510', label: '1 partia ciała', note: 'Skup się na swoim celu' },
        { price: '3 300', label: '2 partie ciała', note: 'Więcej możliwości' },
        { price: '3 930', label: 'Zakres rozszerzony', note: 'Kompleksowa troska o ciało' },
      ],
    },
    {
      size: 'L', label: 'Pełna przemiana', eyebrow: 'Maksimum efektu', savings: 1200,
      items: [{ count: 12, label: 'Trening EMS' }, { count: 12, label: 'Endo SOLO' }],
      prices: [
        { price: '3 510', label: '1 partia ciała', note: 'Skup się na swoim celu' },
        { price: '4 630', label: '2 partie ciała', note: 'Więcej możliwości' },
        { price: '5 510', label: 'Zakres rozszerzony', note: 'Kompleksowa troska o ciało' },
      ],
    },
  ];

  // Ciemny wariant 1:1 z Figmy, jasny dla pakietów S i L
  private themes = {
    dark: {
      card: 'bg-[#9b5036] border-[#8f492f]',
      strap: 'bg-[#87412d] border-white/15',
      strapDot: 'bg-[#e5d1a7]',
      strapLabel: 'text-[#fff7eb]',
      strapNum: 'text-[#e1bda9]',
      eyebrow: 'text-[#e6c1ab]',
      title: 'text-[#fff7eb]',
      titleDot: 'text-[#d9ad8d]',
      mono: 'border-[rgba(236,196,172,0.35)] text-[#e8c9ae]',
      desc: 'text-[#efd0bd]',
      line: 'border-white/20',
      checkBg: 'bg-[#293b2e]',
      item: 'text-[#fff7eb]',
      legend: 'text-[#e6c1ab]',
      row: 'bg-white/[0.03] border-white/20',
      rowTitle: 'text-[#fff7eb]',
      rowSub: 'text-[#e1bca7]',
      price: 'text-[#fff7eb]',
      foot: 'text-[#e2bba6]',
    },
    light: {
      card: 'bg-[#fffbf5] border-[#eadbc8]',
      strap: 'bg-[#f4e9db] border-[#eadbc8]',
      strapDot: 'bg-[#9b5036]',
      strapLabel: 'text-[#593b2d]',
      strapNum: 'text-[#91725f]',
      eyebrow: 'text-[#b0785c]',
      title: 'text-[#343c30]',
      titleDot: 'text-[#9b5036]',
      mono: 'border-[#9b5036]/35 text-[#9b5036]',
      desc: 'text-[#6b655c]',
      line: 'border-[#eadbc8]',
      checkBg: 'bg-[#9b5036]',
      item: 'text-[#343c30]',
      legend: 'text-[#b0785c]',
      row: 'bg-white border-[#eadbc8]',
      rowTitle: 'text-[#593b2d]',
      rowSub: 'text-[#91725f]',
      price: 'text-[#593b2d]',
      foot: 'text-[#91725f]',
    },
  };

  theme(pkg: Package) {
    return pkg.highlight ? this.themes.dark : this.themes.light;
  }

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
