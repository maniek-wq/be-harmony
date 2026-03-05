import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      *ngIf="isVisible"
      (click)="scrollToTop()"
      class="fixed bottom-20 right-6 md:bottom-10 lg:right-10 z-40 p-3 bg-terracotta text-white rounded-full shadow-xl hover:bg-terracotta-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fade-in group"
      aria-label="Wróć na górę"
    >
      <svg class="w-6 h-6 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7"/>
      </svg>
    </button>
  `,
  styles: []
})
export class BackToTopComponent {
  isVisible = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isVisible = window.scrollY > 400;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
