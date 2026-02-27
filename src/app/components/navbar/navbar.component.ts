import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

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
            <span class="font-display text-xl md:text-2xl font-semibold text-white group-hover:text-mint-100 transition-colors">
              Be Harmony
            </span>
          </a>

          <!-- Desktop Menu -->
          <div class="hidden lg:flex items-center gap-1">
            <a *ngFor="let item of menuItems" 
               [href]="item.href"
               (click)="smoothScroll($event, item.href)"
               class="px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200">
              {{ item.label }}
            </a>
            <a routerLink="/cennik"
               class="px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200">
              Cennik
            </a>
            <a href="#kontakt" (click)="smoothScroll($event, '#kontakt')"
               class="ml-2 px-5 py-2.5 bg-mint text-terracotta-800 font-semibold rounded-full hover:bg-mint-200 hover:shadow-lg transition-all duration-300 text-sm">
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

      <!-- Mobile Menu -->
      <div *ngIf="mobileOpen"
           class="lg:hidden bg-terracotta-600 border-t border-white/10 animate-fade-in">
        <div class="px-4 py-4 space-y-1">
          <a *ngFor="let item of menuItems"
             [href]="item.href"
             (click)="smoothScroll($event, item.href); toggleMobile()"
             class="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-sm font-medium">
            {{ item.label }}
          </a>
          <a routerLink="/cennik" (click)="toggleMobile()"
             class="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-sm font-medium">
            Cennik
          </a>
          <a href="#kontakt" (click)="smoothScroll($event, '#kontakt'); toggleMobile()"
             class="block mx-4 mt-3 px-5 py-3 bg-mint text-terracotta-800 font-semibold rounded-full text-center hover:bg-mint-200 transition-all text-sm">
            Umów wizytę
          </a>
        </div>
      </div>
    </nav>
  `,
    styles: []
})
export class NavbarComponent {
    scrolled = false;
    mobileOpen = false;

    menuItems = [
        { label: 'O nas', href: '#o-nas' },
        { label: 'Usługi', href: '#uslugi' },
        { label: 'Zespół', href: '#zespol' },
        { label: 'Galeria', href: '#galeria' },
        { label: 'Kontakt', href: '#kontakt' },
    ];

    @HostListener('window:scroll')
    onScroll() {
        this.scrolled = window.scrollY > 50;
    }

    toggleMobile() {
        this.mobileOpen = !this.mobileOpen;
    }

    smoothScroll(event: Event, target: string) {
        event.preventDefault();
        const el = document.querySelector(target);
        if (el) {
            const offset = 80;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }
}
