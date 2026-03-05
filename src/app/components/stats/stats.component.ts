import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
  current: number;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 md:py-20 bg-gradient-to-r from-mint-800 via-mint-700 to-mint-800 relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-48 h-48 bg-terracotta rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div *ngFor="let stat of stats"
               class="text-center group">
            <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 mb-4 group-hover:bg-white/20 transition-colors duration-300">
              <span class="text-2xl" [innerHTML]="stat.icon"></span>
            </div>
            <div class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
              {{ stat.current }}{{ stat.suffix }}
            </div>
            <p class="text-mint-200 text-sm sm:text-base font-medium">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class StatsComponent implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;
  private animated = false;

  stats: Stat[] = [
    { label: 'Clientes satisfechos', value: 500, suffix: '+', icon: '👥', current: 0 },
    { label: 'Años de experiencia', value: 5, suffix: '+', icon: '🏆', current: 0 },
    { label: 'Tipos de terapia', value: 10, suffix: '+', icon: '💆', current: 0 },
    { label: 'Sesiones realizadas', value: 1000, suffix: '+', icon: '✅', current: 0 },
  ];

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.animated) {
            this.animated = true;
            this.animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private animateCounters() {
    this.stats.forEach((stat) => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          stat.current = stat.value;
          clearInterval(interval);
        } else {
          stat.current = Math.floor(current);
        }
      }, duration / steps);
    });
  }
}
