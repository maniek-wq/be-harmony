import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

/** Wysokość widocznego paska z komunikatem (0 gdy pasek jest ukryty). */
export function announcementBarHeight(): number {
  const el = document.querySelector<HTMLElement>('[data-announcement-bar]');
  return el ? el.offsetHeight : 0;
}

@Component({
  selector: 'app-announcement-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="visible">
      <div #bar data-announcement-bar class="fixed top-16 md:top-20 left-0 right-0 z-40 bg-olive text-white shadow-md">
        <div class="max-w-7xl mx-auto px-4 pr-11 sm:px-6 sm:pr-12 lg:px-8 lg:pr-12 py-2.5">
          <div class="flex flex-col sm:flex-row sm:items-center justify-center gap-2 sm:gap-4 text-center sm:text-left">
            <p class="flex items-start sm:items-center justify-center gap-2 text-sm leading-snug text-white/95">
              <svg class="w-4 h-4 flex-shrink-0 mt-0.5 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>
                W związku z okresem urlopowym kontakt telefoniczny może być ograniczony.
                W razie problemów prosimy o kontakt przez formularz na stronie.
              </span>
            </p>

            <button type="button" (click)="goToContact()"
                    class="flex-shrink-0 inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-white text-olive-500 text-sm font-semibold rounded-full hover:bg-olive-50 transition-colors duration-200">
              Przejdź do formularza
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </button>
          </div>
        </div>

        <button type="button" (click)="dismiss()" aria-label="Zamknij komunikat"
                class="absolute top-1.5 right-2 p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Spacer: przesuwa treść strony o wysokość paska -->
      <div [style.height.px]="barHeight"></div>
    </ng-container>
  `,
  styles: []
})
export class AnnouncementBarComponent implements AfterViewInit, OnDestroy {
  private static readonly STORAGE_KEY = 'announcement-holidays-dismissed';

  visible = true;
  barHeight = 0;

  @ViewChild('bar') barRef?: ElementRef<HTMLElement>;

  private resizeObserver?: ResizeObserver;

  constructor(private router: Router, private zone: NgZone) {
    try {
      this.visible = sessionStorage.getItem(AnnouncementBarComponent.STORAGE_KEY) !== '1';
    } catch {
      this.visible = true;
    }
  }

  ngAfterViewInit() {
    const el = this.barRef?.nativeElement;
    if (!el || typeof ResizeObserver === 'undefined') return;

    this.resizeObserver = new ResizeObserver(() => {
      this.zone.run(() => (this.barHeight = el.offsetHeight));
    });
    this.resizeObserver.observe(el);
  }

  ngOnDestroy() {
    this.resizeObserver?.disconnect();
  }

  dismiss() {
    this.visible = false;
    try {
      sessionStorage.setItem(AnnouncementBarComponent.STORAGE_KEY, '1');
    } catch {
      // brak dostępu do sessionStorage — pasek po prostu wróci przy odświeżeniu
    }
  }

  goToContact() {
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      this.scrollToContact();
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scrollToContact(), 100);
      });
    }
  }

  private scrollToContact() {
    const el = document.getElementById('kontakt');
    if (el) {
      const offset = 80 + announcementBarHeight();
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
