import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Testimonial {
    quote: string;
    name: string;
    service: string;
    stars: number;
}

@Component({
    selector: 'app-testimonials',
    standalone: true,
    imports: [CommonModule, ScrollRevealDirective],
    template: `
    <section class="py-20 md:py-28 bg-white">
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

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div *ngFor="let t of testimonials; let i = index"
               appScrollReveal [revealDelay]="i * 0.12"
               class="relative bg-mint-50/50 border border-mint-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            
            <!-- Quote mark -->
            <div class="absolute -top-3 left-6">
              <span class="text-4xl text-terracotta/20 font-display leading-none">"</span>
            </div>
            
            <!-- Stars -->
            <div class="flex gap-0.5 mb-4">
              <svg *ngFor="let s of getStars(t.stars)" class="w-4 h-4 text-terracotta" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>

            <!-- Quote -->
            <p class="text-gray-600 text-sm leading-relaxed mb-5 italic">
              "{{ t.quote }}"
            </p>

            <!-- Author -->
            <div class="border-t border-mint-100 pt-4">
              <p class="font-semibold text-gray-900 text-sm">{{ t.name }}</p>
              <p class="text-mint-600 text-xs">{{ t.service }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
    styles: []
})
export class TestimonialsComponent {
    testimonials: Testimonial[] = [
        {
            quote: 'Po kilku sesjach terapii ciała ból pleców, z którym chodziłam latami, w końcu ustąpił. Natalia ma niesamowite ręce i podejście do pacjenta.',
            name: 'Anna K.',
            service: 'Terapia ciała',
            stars: 5,
        },
        {
            quote: 'Trening EMS to strzał w dziesiątkę! W 20 minut czuję więcej niż po godzinie na siłowni. Efekty widoczne już po kilku tygodniach.',
            name: 'Michał W.',
            service: 'Trening EMS',
            stars: 5,
        },
        {
            quote: 'Masaż Kobido to czysta magia. Twarz wygląda na odmłodzoną i wypoczętą. Polecam każdej kobiecie, która chce naturalnego liftingu.',
            name: 'Katarzyna M.',
            service: 'Masaż Kobido',
            stars: 5,
        },
        {
            quote: 'Trafiłam tu po operacji i jestem wdzięczna za profesjonalną rehabilitację. Wrócenie do formy przyszło szybciej niż się spodziewałam.',
            name: 'Joanna P.',
            service: 'Terapia pooperacyjna',
            stars: 5,
        },
    ];

    getStars(count: number): number[] {
        return Array(count).fill(0);
    }
}
