import { Component, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

const MOBILE_BREAKPOINT = 768;

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-white" style="transform: translateZ(0);">
      <!-- Background: najpierw film (16s), potem zdjęcia -->
      <div class="absolute inset-0 z-0 overflow-hidden" style="transform: translateZ(0);">
        <video #heroVideoDesktop
               class="hero-bg-video hero-bg-video-desktop"
               [class.video-ended]="videoEnded"
               src="assets/videos/DJI_0254_compressed.mp4"
               autoplay muted playsinline preload="auto"
               (ended)="onVideoEnded()"
               (loadeddata)="playVideo()"
               (canplay)="playVideo()">
        </video>
        <!-- Mobile: Pexels – masaż/fizjoterapia. Zamień na assets/videos/hero-mobile.mp4 -->
        <video #heroVideoMobile
               class="hero-bg-video hero-bg-video-mobile"
               [class.video-ended]="videoEnded"
               src="https://videos.pexels.com/video-files/8313077/8313077-hd_1080_1920_30fps.mp4"
               autoplay muted playsinline preload="auto"
               (ended)="onVideoEnded()"
               (loadeddata)="playVideo()"
               (canplay)="playVideo()">
        </video>
        <img src="assets/img/10507.jpg" alt="Gabinet terapii ciała" class="hero-bg-img img-scale-mobile" style="animation-delay: 16s;">
        <img src="assets/img/2.jpeg" alt="Fizjoterapia Be Harmony" class="hero-bg-img img-scale-mobile" style="animation-delay: 22s;">
        <img src="assets/img/6.jpeg" alt="Masaż relaksacyjny" class="hero-bg-img img-scale-mobile" style="animation-delay: 28s;">
        <img src="assets/img/5.jpg" alt="Strefa Treningowa" class="hero-bg-img img-scale-mobile" style="animation-delay: 34s;">
        <!-- Gradient Overlay for text readability -->
        <div class="absolute inset-0 bg-gradient-to-r from-mint-50/95 via-white/80 to-white/40 sm:from-mint-50/90 sm:via-white/70 sm:to-white/30"></div>
        <!-- Additional gradient from bottom for content blending -->
        <div class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 md:py-32 hero-content"
           [class.hero-content-visible]="videoEnded">
        <div class="hero-content-item mb-6">
          <span class="inline-block px-4 py-1.5 bg-terracotta/10 text-terracotta rounded-full text-sm font-medium border border-terracotta/20">
            Gabinet terapii ciała
          </span>
        </div>

        <h1 class="hero-content-item font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Zadbaj o ciało.<br>
          <span class="text-terracotta">Zadbaj o siebie.</span><br>
          <span class="text-mint-700">Znajdź harmonię.</span>
        </h1>

        <p class="hero-content-item max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          Nowoczesny gabinet pracy z ciałem i strefa treningowa, które łączą wiedzę fizjoterapeutyczną, 
          techniki manualne, masaż, ruch i oddech.
        </p>

        <div class="hero-content-item flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="javascript:void(0)" (click)="navigateToSection('#uslugi')"
             class="px-8 py-4 bg-terracotta text-white font-semibold rounded-full hover:bg-terracotta-600 hover:shadow-xl hover:shadow-warm transition-all duration-300 text-lg transform hover:-translate-y-0.5">
            Poznaj nasze usługi
          </a>
          <a href="javascript:void(0)" (click)="navigateToSection('#kontakt')"
             class="px-8 py-4 bg-white/70 text-terracotta font-semibold rounded-full border-2 border-terracotta/20 hover:border-terracotta hover:bg-white hover:shadow-lg transition-all duration-300 text-lg transform hover:-translate-y-0.5 backdrop-blur-sm">
            Skontaktuj się
          </a>
        </div>

        <!-- Scroll indicator -->
        <div class="hero-content-item mt-16 md:mt-24">
          <div class="flex flex-col items-center gap-2 text-gray-400">
            <span class="text-xs uppercase tracking-widest">Przewiń w dół</span>
            <div class="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
              <div class="w-1.5 h-3 bg-gray-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-bg-video {
      position: absolute;
      top: 1px;
      left: 0px;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      object-fit: cover;
      object-position: center;
      outline: 0;
      border: 0;
      filter: grayscale(0.7);
      transition: opacity 1.2s ease-out;
      backface-visibility: hidden;
      z-index: 1;
    }
    .hero-bg-video-desktop {
      display: none;
    }
    .hero-bg-video-mobile {
      display: block;
    }
    @media (min-width: 768px) {
      .hero-bg-video-desktop {
        display: block;
      }
      .hero-bg-video-mobile {
        display: none;
      }
    }
    .hero-bg-video.video-ended {
      opacity: 0;
      pointer-events: none;
    }
    .hero-bg-img {
      position: absolute;
      top: 5px;
      left: 5px;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      object-fit: cover;
      object-position: center;
      opacity: 0;
      filter: grayscale(0.7);
      animation: heroCrossfade 24s linear infinite;
      will-change: transform, opacity;
      image-rendering: auto;
      backface-visibility: hidden;
    }
    
    @keyframes heroCrossfade {
      0% { opacity: 0; transform: scale(1.01); }
      5% { opacity: 1; transform: scale(1.03); }
      25% { opacity: 1; transform: scale(1.08); }
      30% { opacity: 0; transform: scale(1.1); }
      100% { opacity: 0; transform: scale(1.1); }
    }

    /* Treść ukryta podczas filmu, animacja po pojawieniu się zdjęcia */
    .hero-content .hero-content-item {
      opacity: 0;
      transform: translateY(24px);
      transition: none;
      pointer-events: none;
    }
    .hero-content-visible .hero-content-item {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .hero-content-visible .hero-content-item:nth-child(1) { transition-delay: 0.1s; }
    .hero-content-visible .hero-content-item:nth-child(2) { transition-delay: 0.25s; }
    .hero-content-visible .hero-content-item:nth-child(3) { transition-delay: 0.4s; }
    .hero-content-visible .hero-content-item:nth-child(4) { transition-delay: 0.55s; }
    .hero-content-visible .hero-content-item:nth-child(5) { transition-delay: 0.7s; }
    .hero-content-visible .hero-content-item:nth-child(6) { transition-delay: 0.85s; }
  `]
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('heroVideoDesktop') heroVideoDesktopRef?: ElementRef<HTMLVideoElement>;
  @ViewChild('heroVideoMobile') heroVideoMobileRef?: ElementRef<HTMLVideoElement>;
  videoEnded = false;

  constructor(private router: Router) {}

  private get isMobileView(): boolean {
    return typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT;
  }

  private get activeVideo(): HTMLVideoElement | null {
    const desktop = this.heroVideoDesktopRef?.nativeElement;
    const mobile = this.heroVideoMobileRef?.nativeElement;
    if (this.isMobileView && mobile) return mobile;
    if (!this.isMobileView && desktop) return desktop;
    return desktop ?? mobile ?? null;
  }

  ngAfterViewInit() {
    setTimeout(() => this.playVideo(), 100);
  }

  @HostListener('window:resize')
  onResize() {
    const desktop = this.heroVideoDesktopRef?.nativeElement;
    const mobile = this.heroVideoMobileRef?.nativeElement;
    if (this.isMobileView) {
      desktop?.pause();
      if (mobile && !this.videoEnded && mobile.paused) this.playVideo();
    } else {
      mobile?.pause();
      if (desktop && !this.videoEnded && desktop.paused) this.playVideo();
    }
  }

  playVideo() {
    const vid = this.activeVideo;
    if (vid && !this.videoEnded && vid.paused) {
      vid.muted = true;
      vid.play().catch(() => {});
    }
  }

  onVideoEnded() {
    this.videoEnded = true;
  }

  navigateToSection(hash: string) {
    const sectionId = hash.replace('#', '');
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      this.scrollToElement(sectionId);
    } else {
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
