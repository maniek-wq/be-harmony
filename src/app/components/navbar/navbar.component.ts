import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
         [class]="scrolled ? 'bg-terracotta shadow-lg' : 'bg-terracotta/95 backdrop-blur-sm'">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 md:h-20">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center gap-3 group">
            <img src="assets/img/be-harmony_logo.png" alt="Be Harmony Logo" class="h-10 md:h-14 w-auto rounded-full">
            <span class="font-display text-xl md:text-2xl font-semibold text-white group-hover:text-mint-100 transition-colors">
              Be Harmony
            </span>
          </a>

          <!-- Desktop Menu -->
          <div class="hidden lg:flex items-center gap-1">
            <a *ngFor="let item of menuItems" 
               href="javascript:void(0)"
               (click)="navigateToSection(item.href)"
               class="px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200">
              {{ item.label }}
            </a>
            <a routerLink="/cennik"
               class="px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200">
              Cennik
            </a>
            <a href="javascript:void(0)" (click)="navigateToSection('#kontakt')"
               class="ml-2 px-5 py-2.5 bg-olive text-white font-semibold rounded-full hover:bg-olive-600 hover:shadow-lg transition-all duration-300 text-sm">
              Umów wizytę
            </a>
          </div>

          <!-- Mobile Hamburger -->
          <button (click)="toggleMobile()" class="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors">
            <svg *ngIf="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg *ngIf="mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu (offcanvas slide) -->
      <div class="lg:hidden overflow-hidden transition-all duration-300 ease-out"
           [style.max-height]="mobileOpen ? '36rem' : '0'"
           [class.opacity-100]="mobileOpen"
           [class.opacity-0]="!mobileOpen">
        <div class="bg-terracotta-600 border-t border-white/10">
          <div class="px-4 py-4 pb-10 space-y-0.5">
            <a *ngFor="let item of menuItems"
               href="javascript:void(0)"
               (click)="navigateToSection(item.href); toggleMobile()"
               class="flex items-center gap-3 px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-colors text-sm font-medium">
              <span class="flex-shrink-0 w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <ng-container [ngSwitch]="item.icon">
                  <svg *ngSwitchCase="'about'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <svg *ngSwitchCase="'services'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                  <svg *ngSwitchCase="'team'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                  <svg *ngSwitchCase="'gallery'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  <svg *ngSwitchCase="'contact'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </ng-container>
              </span>
              {{ item.label }}
            </a>
            <a routerLink="/cennik" (click)="toggleMobile()"
               class="flex items-center gap-3 px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-colors text-sm font-medium">
              <span class="flex-shrink-0 w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
              </span>
              Cennik
            </a>
            <div class="border-t border-white/10 mt-4 mb-0"></div>
            <div class="pt-6">
              <a href="javascript:void(0)" (click)="navigateToSection('#kontakt'); toggleMobile()"
                 class="flex items-center justify-center gap-2 mx-4 px-5 py-3.5 bg-olive text-white font-semibold rounded-xl hover:bg-olive-600 transition-all text-sm shadow-sm">
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              Umów wizytę
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent {
  scrolled = false;
  mobileOpen = false;
  private ignoreNextDocumentClick = false;

  menuItems = [
    { label: 'O nas', href: '#o-nas', icon: 'about' },
    { label: 'Usługi', href: '#uslugi', icon: 'services' },
    { label: 'Zespół', href: '#zespol', icon: 'team' },
    { label: 'Galeria', href: '#galeria', icon: 'gallery' },
    { label: 'Kontakt', href: '#kontakt', icon: 'contact' },
  ];

  constructor(
    private router: Router,
    private el: ElementRef<HTMLElement>
  ) { }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.ignoreNextDocumentClick) {
      this.ignoreNextDocumentClick = false;
      return;
    }
    if (!this.mobileOpen) return;
    const target = event.target as Node;
    if (target && !this.el.nativeElement.contains(target)) {
      this.mobileOpen = false;
    }
  }

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
    if (this.mobileOpen) {
      this.ignoreNextDocumentClick = true;
    }
  }

  navigateToSection(hash: string) {
    const sectionId = hash.replace('#', '');

    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      // Already on home page — just scroll
      this.scrollToElement(sectionId);
    } else {
      // On a subpage — navigate to home first, then scroll
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scrollToElement(sectionId), 100);
      });
    }
  }

  private scrollToElement(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
