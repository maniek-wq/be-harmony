import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
    selector: 'app-gallery',
    standalone: true,
    imports: [CommonModule, ScrollRevealDirective],
    template: `
    <section id="galeria" class="py-20 md:py-28 bg-mint-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" appScrollReveal>
          <span class="inline-block px-4 py-1.5 bg-white text-terracotta rounded-full text-sm font-medium mb-4 shadow-sm">Galeria</span>
          <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nasz <span class="text-terracotta">gabinet</span>
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">
            Przestrzeń stworzona z myślą o Twoim komforcie
          </p>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div *ngFor="let img of galleryImages; let i = index"
               appScrollReveal [revealDelay]="i * 0.08"
               (click)="openLightbox(i)"
               class="group cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
               [class]="img.size === 'large' ? 'col-span-2 row-span-2' : ''">
            <div class="relative aspect-square bg-gradient-to-br overflow-hidden"
                 [ngClass]="img.gradient">
              <div class="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <div class="text-center p-4">
                  <svg class="w-10 h-10 mx-auto text-white/60 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <p class="text-white/80 text-sm font-medium">{{ img.label }}</p>
                </div>
              </div>
              <!-- Hover overlay -->
              <div class="absolute inset-0 bg-terracotta/0 group-hover:bg-terracotta/20 transition-colors duration-300 flex items-center justify-center">
                <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div *ngIf="lightboxOpen" 
         class="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in"
         (click)="closeLightbox()">
      <div class="relative max-w-4xl w-full">
        <button (click)="closeLightbox()"
                class="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <div class="aspect-video rounded-xl overflow-hidden bg-gradient-to-br"
             [ngClass]="galleryImages[selectedImage].gradient">
          <div class="w-full h-full flex items-center justify-center">
            <p class="text-white text-2xl font-display">{{ galleryImages[selectedImage].label }}</p>
          </div>
        </div>
        <!-- Navigation -->
        <div class="flex justify-between mt-4">
          <button (click)="prevImage($event)" class="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
            ← Poprzednie
          </button>
          <button (click)="nextImage($event)" class="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
            Następne →
          </button>
        </div>
      </div>
    </div>
  `,
    styles: []
})
export class GalleryComponent {
    lightboxOpen = false;
    selectedImage = 0;

    galleryImages = [
        { label: 'Gabinet', gradient: 'from-mint-200 to-mint-400', size: 'large' },
        { label: 'Strefa EMS', gradient: 'from-terracotta-200 to-terracotta-400', size: 'normal' },
        { label: 'Sala zabiegowa', gradient: 'from-mint-300 to-mint-500', size: 'normal' },
        { label: 'Recepcja', gradient: 'from-terracotta-100 to-mint-200', size: 'normal' },
        { label: 'Strefa relaksu', gradient: 'from-mint-100 to-terracotta-100', size: 'normal' },
        { label: 'Sprzęt EMS', gradient: 'from-terracotta-300 to-terracotta-500', size: 'large' },
        { label: 'Wnętrze', gradient: 'from-mint-200 to-terracotta-200', size: 'normal' },
        { label: 'Atmosfera', gradient: 'from-terracotta-100 to-mint-300', size: 'normal' },
    ];

    openLightbox(index: number) {
        this.selectedImage = index;
        this.lightboxOpen = true;
        document.body.style.overflow = 'hidden';
    }

    closeLightbox() {
        this.lightboxOpen = false;
        document.body.style.overflow = '';
    }

    prevImage(e: Event) {
        e.stopPropagation();
        this.selectedImage = this.selectedImage > 0 ? this.selectedImage - 1 : this.galleryImages.length - 1;
    }

    nextImage(e: Event) {
        e.stopPropagation();
        this.selectedImage = this.selectedImage < this.galleryImages.length - 1 ? this.selectedImage + 1 : 0;
    }
}
