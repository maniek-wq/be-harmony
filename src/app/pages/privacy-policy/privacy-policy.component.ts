import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-privacy-policy',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="min-h-screen bg-mint-50 pt-24 pb-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="mb-12">
          <a routerLink="/" class="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-600 transition-colors text-sm mb-6">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Powrót do strony głównej
          </a>
          <h1 class="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Polityka prywatności i plików cookies
          </h1>
          <p class="text-gray-500 text-sm">Ostatnia aktualizacja: {{ lastUpdated }}</p>
        </div>

        <!-- Content -->
        <div class="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-mint-100 space-y-8">
          <section *ngFor="let section of sections">
            <h2 class="font-display text-xl font-semibold text-gray-900 mb-4 text-terracotta">
              {{ section.title }}
            </h2>
            <div class="text-gray-600 text-sm leading-relaxed space-y-3">
              <p *ngFor="let paragraph of section.paragraphs">{{ paragraph }}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  `,
    styles: []
})
export class PrivacyPolicyComponent {
    lastUpdated = '27.02.2026';

    sections = [
        {
            title: '1. Administrator danych',
            paragraphs: [
                'Administratorem Twoich danych osobowych jest Be Harmony — Natalia Matusz, z siedzibą pod adresem gabinetu (do uzupełnienia).',
                'W sprawach dotyczących ochrony danych osobowych można kontaktować się za pośrednictwem adresu e-mail: kontakt@be-harmony.pl.'
            ]
        },
        {
            title: '2. Zakres zbieranych danych',
            paragraphs: [
                'Zbieramy dane osobowe, które podajesz nam dobrowolnie za pośrednictwem formularza kontaktowego na stronie: imię i nazwisko, adres e-mail, numer telefonu oraz treść wiadomości.',
                'Dodatkowo, podczas korzystania ze strony, automatycznie zbieramy informacje dotyczące Twojej wizyty, takie jak adres IP, typ przeglądarki, czas spędzony na stronie oraz odwiedzane podstrony.'
            ]
        },
        {
            title: '3. Cel przetwarzania danych',
            paragraphs: [
                'Twoje dane osobowe przetwarzamy w celu: odpowiedzi na Twoje zapytania przesłane przez formularz kontaktowy, umówienia wizyt w gabinecie, doskonalenia jakości naszych usług oraz w celach statystycznych i analitycznych.'
            ]
        },
        {
            title: '4. Podstawa prawna przetwarzania',
            paragraphs: [
                'Przetwarzanie danych odbywa się na podstawie: art. 6 ust. 1 lit. a RODO — Twojej zgody, art. 6 ust. 1 lit. b RODO — niezbędności do wykonania umowy lub podjęcia działań przed jej zawarciem, art. 6 ust. 1 lit. f RODO — prawnie uzasadnionego interesu administratora.'
            ]
        },
        {
            title: '5. Pliki cookies',
            paragraphs: [
                'Nasza strona internetowa używa plików cookies (ciasteczek). Są to niewielkie pliki tekstowe zapisywane na Twoim urządzeniu w celu zapewnienia prawidłowego funkcjonowania strony.',
                'Używamy następujących rodzajów plików cookies: niezbędne — konieczne do prawidłowego działania strony; analityczne — pomagają nam zrozumieć, jak odwiedzający korzystają ze strony; funkcjonalne — zapamiętują Twoje preferencje.',
                'Możesz w każdej chwili zmienić ustawienia dotyczące plików cookies w swojej przeglądarce, w tym zablokować ich zapisywanie. Może to jednak wpłynąć na dostępność niektórych funkcji strony.'
            ]
        },
        {
            title: '6. Okres przechowywania danych',
            paragraphs: [
                'Twoje dane osobowe przechowujemy przez okres niezbędny do realizacji celów, dla których zostały zebrane, a następnie przez okres wymagany przepisami prawa lub do czasu wycofania zgody.'
            ]
        },
        {
            title: '7. Prawa użytkownika',
            paragraphs: [
                'Masz prawo do: dostępu do swoich danych, ich sprostowania, usunięcia lub ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu wobec przetwarzania, cofnięcia zgody w dowolnym momencie.',
                'Aby skorzystać ze swoich praw, skontaktuj się z nami pod adresem: kontakt@be-harmony.pl.'
            ]
        },
        {
            title: '8. Zmiany w polityce prywatności',
            paragraphs: [
                'Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce prywatności. O wszelkich zmianach poinformujemy na naszej stronie internetowej.'
            ]
        },
    ];
}
