import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-floating-cta',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div *ngIf="isVisible"
         class="fixed bottom-0 left-0 right-0 z-40 md:hidden animate-slide-up">
      <div class="bg-white/90 backdrop-blur-md border-t border-mint-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3">
        <a href="tel:+48601160646"
           class="flex items-center justify-center gap-3 w-full py-3.5 bg-terracotta text-white font-semibold rounded-2xl hover:bg-terracotta-600 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-terracotta/25">
          <svg class="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          Zadzwoń teraz — 601 160 646
        </a>
      </div>
    </div>
  `,
    styles: []
})
export class FloatingCtaComponent {
    isVisible = false;

    @HostListener('window:scroll')
    onWindowScroll() {
        // Show after scrolling past hero, hide when near contact section
        const contactSection = document.getElementById('kontakt');
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;

        if (contactSection) {
            const contactTop = contactSection.getBoundingClientRect().top + scrollY;
            this.isVisible = scrollY > viewportHeight * 0.5 && scrollY < contactTop - viewportHeight;
        } else {
            this.isVisible = scrollY > viewportHeight * 0.5;
        }
    }
}
