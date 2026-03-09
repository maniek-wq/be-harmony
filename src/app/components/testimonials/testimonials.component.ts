import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Testimonial {
    quote: string;
    name: string;
    service: string;
    stars: number;
}

const PREVIEW_LENGTH = 120;

@Component({
    selector: 'app-testimonials',
    standalone: true,
    imports: [CommonModule, ScrollRevealDirective],
    template: `
    <section class="py-20 md:py-28 bg-cream-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" appScrollReveal>
          <span class="inline-block px-4 py-1.5 bg-terracotta/10 text-terracotta rounded-full text-sm font-medium mb-4">Opinie</span>
          <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Co mówią <span class="text-terracotta">nasi klienci</span>
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">
            Zaufanie i zadowolenie pacjentów to nasza największa nagroda
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div *ngFor="let t of testimonials; let i = index"
               appScrollReveal [revealDelay]="i * 0.12"
               class="relative bg-white/90 border border-beige-200 rounded-xl p-4 hover:shadow-warm hover:ring-2 hover:ring-beige-300 hover:-translate-y-0.5 transition-all duration-300">
            
            <div class="absolute -top-2 left-4">
              <span class="text-2xl text-terracotta/20 font-display leading-none">"</span>
            </div>
            
            <div class="flex gap-0.5 mb-2">
              <svg *ngFor="let s of getStars(t.stars)" class="w-3.5 h-3.5 text-terracotta" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>

            <p class="text-gray-600 text-xs leading-relaxed mb-3 italic">
              "{{ getPreview(t.quote) }}{{ t.quote.length > previewLength ? '…' : '' }}"
            </p>

            <button *ngIf="t.quote.length > previewLength"
                    (click)="openModal(t)"
                    class="text-terracotta text-xs font-medium hover:underline mb-3">
              Zobacz więcej
            </button>

            <div class="border-t border-mint-100 pt-3">
              <p class="font-semibold text-gray-900 text-sm">{{ t.name }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      @if (selectedTestimonial) {
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4"
             (click)="closeModal()">
          <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true"></div>
          <div class="relative bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[85vh] overflow-hidden"
               (click)="$event.stopPropagation()">
            <div class="p-6 overflow-y-auto max-h-[85vh]">
              <button (click)="closeModal()"
                      class="absolute top-4 right-4 p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                      aria-label="Zamknij">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
              <div class="flex gap-0.5 mb-4">
                <svg *ngFor="let s of getStars(selectedTestimonial.stars)" class="w-5 h-5 text-terracotta" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <p class="text-gray-700 text-sm leading-relaxed italic mb-6">
                "{{ selectedTestimonial.quote }}"
              </p>
              <p class="font-semibold text-gray-900">{{ selectedTestimonial.name }}</p>
            </div>
          </div>
        </div>
      }
    </section>
  `,
    styles: []
})
export class TestimonialsComponent {
    readonly previewLength = PREVIEW_LENGTH;
    selectedTestimonial: Testimonial | null = null;

    testimonials: Testimonial[] = [
        {
            quote: 'Trening EMS to było MEGA doświadczenie! Pełna energia, doping i motywacja przez cały czas. Jako fizjoterapeutka Natalia zwracała uwagę na każdy detal, czułam się w 100% bezpiecznie i pod dobrą opieką. Do tego trening był krótki, a intensywny — idealny dla mnie, bo nie przepadam za długimi ćwiczeniami. Polecam każdemu, kto chce połączyć efektywność z super atmosferą!',
            name: 'Paula Paula',
            service: 'Trening EMS',
            stars: 5,
        },
        {
            quote: 'Pani Natalia to trenerka z ogromną wiedzą i pasją do tego, co robi! 💪 Od pierwszego spotkania widać jej pełen profesjonalizm i indywidualne podejście do klienta. Treningi są zawsze dobrze zaplanowane, różnorodne i dopasowane do potrzeb. Oprócz tego Natalia jest doskonałym fizjoterapeutą — potrafi szybko zdiagnozować problem, skutecznie pomóc i doradzić, jak zapobiegać kontuzjom. Usługi świadczone są na najwyższym poziomie — z pełnym zaangażowaniem, empatią i uśmiechem. Z całego serca polecam każdemu!',
            name: 'Paulina Duraj',
            service: 'Trening EMS',
            stars: 5,
        },
        {
            quote: 'Bardzo gorąco polecam. Natalia zna się na rzeczy i nieustannie dalej się rozwija na szkoleniach dzięki czemu jeszcze lepiej może pomagać swoim pacjentom. Nie raz mnie i moje ciało uratowała! Zawsze można liczyć na dobrą rozmowę :)) Piękna i relaksująca przestrzeń, świetnie zadbana.',
            name: 'Hania Maruszczak',
            service: 'Terapia ciała',
            stars: 5,
        },
        {
            quote: 'Pani Natalia jest osobą o niezwykle ogromnej wiedzy. Szybko i prawidłowo diagnozuje problem oraz wie jak mu zaradzić. Zawsze podchodzi holistycznie wraz z ogromną empatią. Jako miejsce, gabinet jest zawsze przytulny i pełen ciepła. Serdecznie polecam każdemu!',
            name: 'Igor',
            service: 'Terapia',
            stars: 5,
        },
    ];

    getStars(count: number): number[] {
        return Array(count).fill(0);
    }

    getPreview(quote: string): string {
        if (quote.length <= PREVIEW_LENGTH) return quote;
        return quote.slice(0, PREVIEW_LENGTH).trim();
    }

    openModal(t: Testimonial): void {
        this.selectedTestimonial = t;
    }

    closeModal(): void {
        this.selectedTestimonial = null;
    }
}
