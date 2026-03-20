import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface GalleryImage {
  label: string;
  src: string;
  size: 'normal' | 'large';
  loaded: boolean;
}

interface GallerySection {
  title: string;
  images: GalleryImage[];
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section id="galeria" class="py-20 md:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" appScrollReveal>
          <span class="inline-block px-4 py-1.5 bg-white text-terracotta rounded-full text-sm font-medium mb-4 shadow-sm">Galeria</span>
          <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nasz <span class="text-terracotta">gabinet</span>
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">
            Miejsce, w którym ciało i umysł odnajdują równowagę
          </p>
        </div>

        <!-- Gallery Sections -->
        <div *ngFor="let section of gallerySections; let sIdx = index" class="mb-16 last:mb-0" appScrollReveal [revealDelay]="sIdx * 0.1">
          <h3 class="font-display text-xl md:text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-terracotta/30">
            {{ section.title }}
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div *ngFor="let img of section.images; let i = index"
                 appScrollReveal [revealDelay]="(sIdx * 0.1) + (i * 0.08)"
                 (click)="openLightbox(getFlatIndex(sIdx, i))"
                 class="group cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 min-w-0"
                 [ngClass]="{'col-span-2 row-span-2': img.size === 'large'}">
              <div class="relative aspect-square overflow-hidden bg-mint-100 w-full">
                <div *ngIf="!img.loaded" class="absolute inset-0 skeleton-shimmer"></div>
                <img [src]="img.src" [alt]="img.label" decoding="async" loading="lazy"
                     (load)="img.loaded = true"
                     class="block w-full h-full max-w-full max-h-full object-cover object-center img-content img-scale-mobile group-hover:scale-110 transition-all duration-500"
                     [class.opacity-0]="!img.loaded"
                     [class.opacity-100]="img.loaded">
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
        <div class="relative">
          <!-- Lightbox skeleton -->
          <div *ngIf="!lightboxImageLoaded" class="absolute inset-0 flex items-center justify-center">
            <div class="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
          </div>
          <img [src]="allGalleryImages[selectedImage].src" 
               [alt]="allGalleryImages[selectedImage].label"
               decoding="async"
               (load)="lightboxImageLoaded = true"
               class="w-full max-w-full max-h-[80vh] object-contain rounded-xl img-content img-scale-mobile transition-opacity duration-300"
               [class.opacity-0]="!lightboxImageLoaded"
               [class.opacity-100]="lightboxImageLoaded">
        </div>
        <p class="text-white text-center mt-3 font-display text-lg">{{ allGalleryImages[selectedImage].label }}</p>
        <!-- Navigation -->
        <div class="flex justify-between mt-4">
          <button (click)="prevImage($event)" class="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
            ← Poprzednie
          </button>
          <span class="text-white/50 self-center text-sm">{{ selectedImage + 1 }} / {{ allGalleryImages.length }}</span>
          <button (click)="nextImage($event)" class="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
            Następne →
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .skeleton-shimmer {
      background: linear-gradient(90deg, #FAF6F1 25%, #F5EFE8 50%, #FAF6F1 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `]
})
export class GalleryComponent {
  lightboxOpen = false;
  lightboxImageLoaded = false;
  selectedImage = 0;

  gallerySections: GallerySection[] = [
    {
      title: 'Wejście i recepcja',
      images: [
        { label: 'Witryna gabinetu', src: 'assets/img/10445.jpg', size: 'large', loaded: false },
        { label: 'Wejście do gabinetu', src: 'assets/img/20260216_145321.jpg', size: 'normal', loaded: false },
        { label: 'Zapraszamy', src: 'assets/img/10469.jpg', size: 'normal', loaded: false },
      ],
    },
    {
      title: 'Poczekalnia',
      images: [
        { label: 'Poczekalnia', src: 'assets/img/20260216_145207.jpg', size: 'large', loaded: false },
        { label: 'Wnętrze – kanapa', src: 'assets/img/10460.jpg', size: 'normal', loaded: false },
      ],
    },
    {
      title: 'Sale zabiegowe',
      images: [
        { label: 'Sala zabiegowa', src: 'assets/img/20260216_143921.jpg', size: 'large', loaded: false },
        { label: 'Gabinet zabiegowy', src: 'assets/img/20260216_143912.jpg', size: 'normal', loaded: false },
      ],
    },
    {
      title: 'Strefa treningowa EMS',
      images: [
        { label: 'Strefa EMS – sprzęt i interfejs', src: 'assets/img/20260205_160321.jpg', size: 'large', loaded: false },
        { label: 'Trening EMS', src: 'assets/img/20250919_142036.jpg', size: 'normal', loaded: false },
        { label: 'Strefa treningowa z kamizelkami EMS', src: 'assets/img/20260216_145437.jpg', size: 'normal', loaded: false },
        { label: 'Sala treningowa', src: 'assets/img/10498.jpg', size: 'normal', loaded: false },
      ],
    },
  ];

  get allGalleryImages(): GalleryImage[] {
    return this.gallerySections.flatMap((s) => s.images);
  }

  openLightbox(index: number) {
    this.selectedImage = index;
    this.lightboxOpen = true;
    this.lightboxImageLoaded = false;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  getFlatIndex(sectionIdx: number, imageIdx: number): number {
    let idx = 0;
    for (let s = 0; s < sectionIdx; s++) idx += this.gallerySections[s].images.length;
    return idx + imageIdx;
  }

  prevImage(e: Event) {
    e.stopPropagation();
    this.lightboxImageLoaded = false;
    const n = this.allGalleryImages.length;
    this.selectedImage = this.selectedImage > 0 ? this.selectedImage - 1 : n - 1;
  }

  nextImage(e: Event) {
    e.stopPropagation();
    this.lightboxImageLoaded = false;
    const n = this.allGalleryImages.length;
    this.selectedImage = this.selectedImage < n - 1 ? this.selectedImage + 1 : 0;
  }
}
