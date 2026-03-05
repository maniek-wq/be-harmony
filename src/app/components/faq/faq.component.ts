import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface FaqItem {
    question: string;
    answer: string;
    open: boolean;
}

@Component({
    selector: 'app-faq',
    standalone: true,
    imports: [CommonModule, ScrollRevealDirective],
    template: `
    <section class="py-20 md:py-28 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" appScrollReveal>
          <span class="inline-block px-4 py-1.5 bg-mint-50 text-mint-800 rounded-full text-sm font-medium mb-4">FAQ</span>
          <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Najczęściej zadawane <span class="text-terracotta">pytania</span>
          </h2>
          <p class="text-gray-600 text-lg">
            Odpowiedzi na pytania, które otrzymujemy najczęściej
          </p>
        </div>

        <div class="space-y-4">
          <div *ngFor="let item of faqItems; let i = index"
               appScrollReveal [revealDelay]="i * 0.08"
               class="border border-mint-100 rounded-2xl overflow-hidden transition-all duration-300"
               [class.shadow-md]="item.open"
               [class.border-mint-300]="item.open">
            
            <button (click)="toggle(i)"
                    class="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-mint-50/50 transition-colors duration-200">
              <span class="font-semibold text-gray-900 text-sm md:text-base pr-4">{{ item.question }}</span>
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                   [class.bg-terracotta]="item.open"
                   [class.bg-mint-100]="!item.open"
                   [class.rotate-45]="item.open">
                <svg class="w-4 h-4 transition-colors" 
                     [class.text-white]="item.open"
                     [class.text-mint-600]="!item.open"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/>
                </svg>
              </div>
            </button>

            <div class="overflow-hidden transition-all duration-300"
                 [style.max-height]="item.open ? '500px' : '0px'"
                 [style.opacity]="item.open ? '1' : '0'">
              <div class="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                <p class="text-gray-600 text-sm leading-relaxed">{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
    styles: []
})
export class FaqComponent {
    faqItems: FaqItem[] = [
        {
            question: 'Czy potrzebuję skierowania od lekarza?',
            answer: 'Nie, do naszego gabinetu nie potrzebujesz skierowania. Możesz umówić się na wizytę bezpośrednio, dzwoniąc pod numer 601 160 646 lub wypełniając formularz kontaktowy na stronie. Na pierwszej wizycie przeprowadzimy szczegółowy wywiad i badanie funkcjonalne.',
            open: false,
        },
        {
            question: 'Jak przygotować się do treningu EMS?',
            answer: 'Na trening EMS weź ze sobą wygodne ubranie (koszulka i spodenki/leginsy) oraz buty sportowe. Przed treningiem jedz lekki posiłek minimum 1,5 godziny wcześniej i pamiętaj o nawodnieniu. Cały sprzęt EMS zapewniamy na miejscu.',
            open: false,
        },
        {
            question: 'Ile trwa pierwsza wizyta?',
            answer: 'Pierwsza wizyta trwa zazwyczaj od 60 do 90 minut. Obejmuje szczegółowy wywiad, ocenę funkcjonalną oraz pierwszą sesję terapeutyczną. Kolejne wizyty trwają zgodnie z czasem opisanym przy danej usłudze.',
            open: false,
        },
        {
            question: 'Czy mogę odwołać wizytę?',
            answer: 'Tak, prosimy o odwołanie wizyty minimum 24 godziny wcześniej, telefonicznie lub za pośrednictwem wiadomości. Dzięki temu możemy zaproponować termin innemu pacjentowi. W przypadku braku odwołania może zostać naliczona opłata.',
            open: false,
        },
        {
            question: 'Dla kogo jest trening EMS? Czy są przeciwwskazania?',
            answer: 'Trening EMS jest bezpieczny dla większości osób, niezależnie od poziomu sprawności. Przeciwwskazaniami są m.in. ciąża, rozrusznik serca, epilepsja, aktywne stany zapalne i choroby nowotworowe. Przed pierwszym treningiem zawsze przeprowadzamy wywiad zdrowotny.',
            open: false,
        },
        {
            question: 'Czy oferujecie bony podarunkowe?',
            answer: 'Tak! Oferujemy eleganckie bony podarunkowe na dowolną usługę lub konkretną kwotę. To idealny prezent dla bliskich — na urodziny, święta lub po prostu tak. Zapytaj o szczegóły telefonicznie lub przez formularz kontaktowy.',
            open: false,
        },
    ];

    toggle(index: number) {
        this.faqItems[index].open = !this.faqItems[index].open;
    }
}
