import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cookie-banner',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div *ngIf="showBanner"
         class="fixed bottom-0 left-0 right-0 z-40 p-4 md:p-6 animate-slide-up">
      <div class="max-w-4xl mx-auto bg-gray-900 text-white rounded-2xl p-6 shadow-2xl border border-gray-700">
        <div class="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div class="flex-1">
            <h3 class="font-semibold text-sm mb-1">🍪 Ta strona używa plików cookies</h3>
            <p class="text-gray-400 text-xs leading-relaxed">
              Używamy plików cookies, aby zapewnić Ci najlepszą jakość korzystania z naszej strony.
              Kontynuując przeglądanie, wyrażasz zgodę na ich używanie.
              <a href="/polityka-prywatnosci" class="text-mint hover:text-mint-200 underline ml-1">Więcej informacji</a>
            </p>
          </div>
          <div class="flex gap-3 flex-shrink-0">
            <button (click)="acceptCookies()"
                    class="px-5 py-2 bg-mint text-gray-900 font-semibold rounded-lg hover:bg-mint-200 transition-colors text-sm">
              Akceptuję
            </button>
            <button (click)="declineCookies()"
                    class="px-5 py-2 bg-gray-700 text-gray-300 font-medium rounded-lg hover:bg-gray-600 transition-colors text-sm">
              Odrzuć
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
    styles: [`
    @keyframes slideUpBanner {
      from { transform: translateY(100%); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    :host .animate-slide-up {
      animation: slideUpBanner 0.5s ease-out;
    }
  `]
})
export class CookieBannerComponent implements OnInit {
    showBanner = false;

    ngOnInit() {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            setTimeout(() => this.showBanner = true, 2500);
        }
    }

    acceptCookies() {
        localStorage.setItem('cookie_consent', 'accepted');
        this.showBanner = false;
    }

    declineCookies() {
        localStorage.setItem('cookie_consent', 'declined');
        this.showBanner = false;
    }
}
