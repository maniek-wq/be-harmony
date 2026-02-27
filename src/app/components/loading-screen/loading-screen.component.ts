import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-loading-screen',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="loading-overlay" [class.fade-out]="fadeOut">
      <div class="flex flex-col items-center gap-6">
        <!-- Logo animation -->
        <div class="relative">
          <div class="w-28 h-28 md:w-36 md:h-36 rounded-full bg-terracotta flex items-center justify-center animate-pulse">
            <svg class="w-16 h-16 md:w-20 md:h-20 text-mint-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <!-- Spinning ring -->
          <div class="absolute inset-0 w-28 h-28 md:w-36 md:h-36 border-4 border-transparent border-t-mint rounded-full animate-spin-slow"></div>
        </div>

        <div class="text-center">
          <h1 class="font-display text-3xl md:text-4xl text-terracotta font-semibold tracking-wide">
            Be Harmony
          </h1>
          <p class="text-mint-700 text-sm md:text-base mt-1 italic font-display">Natalia Matusz</p>
        </div>

        <div class="flex gap-1.5 mt-2">
          <div class="w-2.5 h-2.5 bg-mint rounded-full animate-bounce" style="animation-delay: 0s"></div>
          <div class="w-2.5 h-2.5 bg-mint-400 rounded-full animate-bounce" style="animation-delay: 0.15s"></div>
          <div class="w-2.5 h-2.5 bg-terracotta rounded-full animate-bounce" style="animation-delay: 0.3s"></div>
        </div>
      </div>
    </div>
  `,
    styles: []
})
export class LoadingScreenComponent implements OnInit {
    @Output() loadingComplete = new EventEmitter<void>();
    fadeOut = false;

    ngOnInit() {
        setTimeout(() => {
            this.fadeOut = true;
            setTimeout(() => {
                this.loadingComplete.emit();
            }, 800);
        }, 2000);
    }
}
