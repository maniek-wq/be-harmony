import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface GalleryImage {
  label: string;
  src: string;
  size: 'normal' | 'large';
}

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
               [ngClass]="{'col-span-2 row-span-2': img.size === 'large'}">
            <div class="relative aspect-square overflow-hidden bg-mint-100">
              <img [src]="img.src" [alt]="img.label"
                   class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              <!-- Hover overlay -->
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                <div class="w-full p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p class="text-white text-sm font-medium drop-shadow-lg">{{ img.label }}</p>
                </div>
              </div>
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg class="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
         class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
         (click)="closeLightbox()">
      <div class="relative max-w-5xl w-full" (click)="$event.stopPropagation()">
        <button (click)="closeLightbox()"
                class="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors z-10">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <img [src]="galleryImages[selectedImage].src" 
             [alt]="galleryImages[selectedImage].label"
             class="w-full max-h-[80vh] object-contain rounded-xl">
        <p class="text-white text-center mt-3 font-display text-lg">{{ galleryImages[selectedImage].label }}</p>
        <!-- Navigation -->
        <div class="flex justify-between mt-4">
          <button (click)="prevImage($event)" class="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
            ← Poprzednie
          </button>
          <span class="text-white/50 self-center text-sm">{{ selectedImage + 1 }} / {{ galleryImages.length }}</span>
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

  galleryImages: GalleryImage[] = [
    { label: 'Gabinet', src: 'assets/img/1.jpeg', size: 'large' },
    { label: 'Strefa EMS', src: 'assets/img/foto_ems1.jpg', size: 'normal' },
    { label: 'Sala zabiegowa', src: 'assets/img/3.jpeg', size: 'normal' },
    { label: 'Strefa relaksu', src: 'assets/img/6.jpeg', size: 'normal' },
    { label: 'Sprzęt EMS', src: 'assets/img/5.jpg', size: 'large' },
    { label: 'Wnętrze', src: 'assets/img/2.jpeg', size: 'normal' },
    { label: 'Atmosfera', src: 'assets/img/4.jpg', size: 'normal' },
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
