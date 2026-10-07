import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface PackageItem {
  count: number;
  label: string;
}

interface PackagePrice {
  tier: string;
  label: string;
  price: string;
}

interface Package {
  size: string;
  label: string;
  eyebrow: string;
  items: PackageItem[];
  prices: PackagePrice[];
  savings: string;
  highlight?: boolean;
}

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section id="pakiety" appScrollReveal class="relative overflow-hidden bg-[#f8f3ec] px-4 sm:px-8 pt-12 pb-10">
      <div class="relative max-w-[1420px] mx-auto">
        <div class="text-center">
          <h2 class="font-cormorant font-medium text-[34px] sm:text-[40px] leading-tight text-[#293b2e]">
            Be Harmony <span class="text-[#a9533a]">Pakiety</span>
          </h2>
          <p class="font-cormorant uppercase leading-none mt-4 text-[clamp(2.5rem,9vw,3.75rem)]">
            <span class="text-[#293b2e]">EMS</span>
            <span class="text-[#293b2e] text-[0.6em] mx-1 sm:mx-2 align-middle">+</span><br class="sm:hidden">
            <span class="text-[#a9533a]">Endoterapia</span>
          </p>
          <p class="font-manrope mt-5 text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#343c30]">
            Skuteczne duo dla sylwetki, którą widać i czuć.
          </p>
        </div>

        <!-- Baner -->
        <div class="relative z-10 flex justify-center mt-10 mb-5">
          <p class="font-cormorant font-semibold text-center text-white text-[17px] sm:text-xl lg:text-[26px] leading-snug px-6 sm:px-8 py-3 lg:py-3.5 rounded-[28px] lg:rounded-full bg-[#a9533a] shadow-[0px_14px_30px_-12px_rgba(106,57,43,0.45)]">
            Pakiet opłaca się bardziej - oszczędzaj więcej niż w karnetach EMS i Endoterapii.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
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
                  <h3 class="font-cormorant font-medium text-[44px] sm:text-[50px] leading-[1.1] pt-2" [ngClass]="theme(pkg).title">
                    Pakiet {{ pkg.size }}
                  </h3>
                </div>
                <div class="pt-1 flex-shrink-0">
                  <div class="w-12 h-12 rounded-full border flex items-center justify-center" [ngClass]="theme(pkg).mono">
                    <span class="font-cormorant text-2xl leading-8">{{ pkg.size }}</span>
                  </div>
                </div>
              </div>

              <!-- Zawartość pakietu -->
              <div class="mt-8 py-5 border-y grid grid-cols-2 gap-3" [ngClass]="theme(pkg).line">
                <div *ngFor="let item of pkg.items" class="flex items-center gap-2.5">
                  <span class="w-6 h-6 flex-shrink-0 rounded-full flex items-center justify-center" [ngClass]="theme(pkg).checkBg">
                    <img src="assets/img/pakiety/check.svg" alt="" width="16" height="16" class="w-4 h-4">
                  </span>
                  <p class="text-xs leading-4 whitespace-nowrap" [ngClass]="theme(pkg).item">
                    {{ item.count }} × {{ item.label }}
                  </p>
                </div>
              </div>

              <!-- Zakresy -->
              <div class="pt-6 flex-1">
                <p class="text-[10px] leading-[15px] font-semibold tracking-[1.6px] uppercase" [ngClass]="theme(pkg).legend">Wybierz swój zakres Endo</p>
                <div class="pt-3.5 flex flex-col gap-2.5">
                  <div *ngFor="let row of pkg.prices; let last = last"
                       class="flex items-center gap-3 px-4 py-4 rounded-xl border" [ngClass]="theme(pkg).row">
                    <div class="flex-1 min-w-0">
                      <p class="text-[10px] leading-[15px] font-medium tracking-[1.6px] uppercase" [ngClass]="theme(pkg).rowSub">{{ row.tier }}</p>
                      <p class="pt-1 text-xs leading-[18px] font-semibold" [ngClass]="theme(pkg).rowTitle">{{ row.label }}</p>
                      <span *ngIf="last && pkg.savings" class="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#eadfc5]">
                        <img src="assets/img/pakiety/check-oszczedzasz.svg" alt="" width="12" height="12" class="w-4 h-4">
                        <span class="text-xs leading-4 font-medium text-[#536441] whitespace-nowrap">Oszczędzasz {{ pkg.savings }} zł</span>
                      </span>
                    </div>
                    <p class="flex-shrink-0 whitespace-nowrap" [ngClass]="theme(pkg).price">
                      <span class="font-cormorant text-[26px] leading-8 font-semibold">{{ row.price }}</span>
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
      size: 'S', label: 'Na dobry start', eyebrow: 'Pierwszy krok', savings: '150',
      items: [{ count: 4, label: 'Trening EMS' }, { count: 4, label: 'Endo' }],
      prices: [
        { tier: 'Solo', label: '1 partia ciała', price: '1 340' },
        { tier: 'Duo', label: '2 partie ciała', price: '1 760' },
        { tier: 'Multi', label: 'Zakres rozszerzony', price: '2 100' },
      ],
    },
    {
      size: 'M', label: 'Najczęściej wybierany', eyebrow: 'Więcej dla siebie', savings: '550', highlight: true,
      items: [{ count: 8, label: 'Trening EMS' }, { count: 8, label: 'Endo' }],
      prices: [
        { tier: 'Solo', label: '1 partia ciała', price: '2 510' },
        { tier: 'Duo', label: '2 partie ciała', price: '3 300' },
        { tier: 'Multi', label: 'Zakres rozszerzony', price: '3 930' },
      ],
    },
    {
      size: 'L', label: 'Pełna przemiana', eyebrow: 'Maksimum efektu', savings: '1 200',
      items: [{ count: 12, label: 'Trening EMS' }, { count: 12, label: 'Endo' }],
      prices: [
        { tier: 'Solo', label: '1 partia ciała', price: '3 510' },
        { tier: 'Duo', label: '2 partie ciała', price: '4 630' },
        { tier: 'Multi', label: 'Zakres rozszerzony', price: '5 510' },
      ],
    },
  ];

  // Ciemny wariant 1:1 z Figmy, jasny dla pakietów S i L
  private themes = {
    dark: {
      card: 'bg-[#a9533a] border-[#9b4a31]',
      strap: 'bg-[#99472f] border-white/15',
      strapDot: 'bg-[#fff7eb]',
      strapLabel: 'text-[#fff7eb]',
      strapNum: 'text-[#e1bda9]',
      eyebrow: 'text-[#e6c1ab]',
      title: 'text-[#fff7eb]',
      mono: 'border-[rgba(236,196,172,0.35)] text-[#e8c9ae]',
      line: 'border-white/20',
      checkBg: 'bg-[#293b2e]',
      item: 'text-[#fff7eb]',
      legend: 'text-[#e6c1ab]',
      row: 'bg-white/[0.04] border-white/25',
      rowTitle: 'text-[#fff7eb]',
      rowSub: 'text-[#e1bca7]',
      price: 'text-[#fff7eb]',
    },
    light: {
      card: 'bg-[#fffbf5] border-[#eadbc8]',
      strap: 'bg-[#f4e9db] border-[#eadbc8]',
      strapDot: 'bg-[#a9533a]',
      strapLabel: 'text-[#593b2d]',
      strapNum: 'text-[#91725f]',
      eyebrow: 'text-[#a9533a]',
      title: 'text-[#293b2e]',
      mono: 'border-[#9b5036]/35 text-[#9b5036]',
      line: 'border-[#eadbc8]',
      checkBg: 'bg-[#a9533a]',
      item: 'text-[#343c30]',
      legend: 'text-[#a9533a]',
      row: 'bg-white border-[#eadbc8]',
      rowTitle: 'text-[#293b2e]',
      rowSub: 'text-[#91725f]',
      price: 'text-[#293b2e]',
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
