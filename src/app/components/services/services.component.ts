import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Service {
    name: string;
    description: string;
    price: string;
    icon: string;
    isEms?: boolean;
    subItems?: { name: string; price: string }[];
}

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule, RouterLink, ScrollRevealDirective],
    template: `
    <section id="uslugi" class="py-20 md:py-28 bg-mint-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" appScrollReveal>
          <span class="inline-block px-4 py-1.5 bg-white text-terracotta rounded-full text-sm font-medium mb-4 shadow-sm">Usługi</span>
          <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nasze <span class="text-terracotta">usługi</span>
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">
            Kompleksowa oferta łącząca fizjoterapię, techniki manualne i nowoczesne technologie
          </p>
        </div>

        <!-- EMS HIGHLIGHT CARD -->
        <div appScrollReveal class="mb-12">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl">
            <!-- Animated gradient border -->
            <div class="absolute inset-0 bg-gradient-to-r from-mint via-terracotta to-mint bg-[length:200%_100%] animate-[gradientBorder_3s_ease_infinite] p-[3px] rounded-3xl">
              <div class="w-full h-full bg-white rounded-3xl"></div>
            </div>
            
            <div class="relative bg-white rounded-3xl p-8 md:p-12">
              <div class="flex flex-col lg:flex-row items-center gap-8">
                <div class="flex-shrink-0">
                  <div class="relative">
                    <div class="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-mint to-mint-400 flex items-center justify-center shadow-lg animate-pulse-glow">
                      <svg class="w-12 h-12 md:w-16 md:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </div>
                    <span class="absolute -top-3 -right-3 px-3 py-1 bg-terracotta text-white text-xs font-bold rounded-full shadow-lg uppercase tracking-wider animate-bounce">
                      Nowość!
                    </span>
                  </div>
                </div>

                <div class="flex-1 text-center lg:text-left">
                  <h3 class="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    Trening EMS
                    <span class="text-mint-600 text-lg font-normal ml-2">(Electrical Muscle Stimulation)</span>
                  </h3>
                  <p class="text-gray-600 text-lg leading-relaxed mb-4">
                    Nowoczesna technologia treningowa wykorzystująca impulsy elektryczne do stymulacji mięśni. 
                    W krótkim czasie wzmacnia całe ciało i poprawia sylwetkę. 20 minut treningu EMS to ekwiwalent 
                    kilku godzin tradycyjnego ćwiczenia.
                  </p>
                  <div class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                    <span class="text-3xl font-bold text-terracotta">90 zł</span>
                    <span class="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">trening próbny</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Service Cards Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let service of services; let i = index"
               appScrollReveal [revealDelay]="i * 0.1"
               class="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-mint-100 hover:border-mint-300 hover:-translate-y-1">
            
            <div class="w-14 h-14 rounded-xl bg-mint-50 flex items-center justify-center mb-5 group-hover:bg-mint-100 transition-colors">
              <span class="text-2xl" [innerHTML]="service.icon"></span>
            </div>

            <h3 class="font-display text-xl font-semibold text-gray-900 mb-3 group-hover:text-terracotta transition-colors">
              {{ service.name }}
            </h3>
            
            <p class="text-gray-500 text-sm leading-relaxed mb-5">
              {{ service.description }}
            </p>

            <!-- Sub items for massages -->
            <div *ngIf="service.subItems" class="space-y-2 mb-5">
              <div *ngFor="let sub of service.subItems"
                   class="flex justify-between items-center py-1.5 border-b border-gray-100 last:border-0">
                <span class="text-sm text-gray-600">{{ sub.name }}</span>
                <span class="text-sm font-semibold text-terracotta">{{ sub.price }}</span>
              </div>
            </div>

            <div *ngIf="!service.subItems" class="mt-auto">
              <span class="text-2xl font-bold text-terracotta">{{ service.price }}</span>
              <span *ngIf="service.price !== 'Do ustalenia'" class="text-gray-400 text-sm ml-1">zł</span>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div appScrollReveal class="text-center mt-14">
          <a routerLink="/cennik"
             class="inline-flex items-center gap-2 px-8 py-4 bg-terracotta text-white font-semibold rounded-full hover:bg-terracotta-600 hover:shadow-xl transition-all duration-300 text-lg transform hover:-translate-y-0.5">
            Zobacz pełny cennik
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
    styles: [`
    @keyframes gradientBorder {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `]
})
export class ServicesComponent {
    services: Service[] = [
        {
            name: 'Terapia ciała',
            description: 'Kompleksowa praca z ciałem łącząca techniki fizjoterapeutyczne, masaż i ruch. Indywidualnie dobierane metody leczenia.',
            price: '180',
            icon: '🧘',
        },
        {
            name: 'Terapia po zabiegach medycyny estetycznej i chirurgii plastycznej',
            description: 'Specjalistyczna terapia wspierająca regenerację po zabiegach medycyny estetycznej i operacjach chirurgii plastycznej.',
            price: '200',
            icon: '✨',
        },
        {
            name: 'Masaże',
            description: 'Profesjonalne masaże dostosowane do Twoich potrzeb. Głęboki, powięziowy i relaksacyjny.',
            price: '170/180',
            icon: '💆',
            subItems: [
                { name: 'Masaż głęboki', price: '170 zł' },
                { name: 'Masaż powięziowy', price: '180 zł' },
                { name: 'Masaż relaksacyjny', price: '170 zł' },
            ]
        },
        {
            name: 'Praca z blizną i obrzękami',
            description: 'Terapia manualna blizn pooperacyjnych i pourazowych. Redukcja obrzęków i poprawa elastyczności tkanek.',
            price: '180/200',
            icon: '🩹',
        },
        {
            name: 'Terapia wisceralna',
            description: 'Delikatna terapia manualna narządów wewnętrznych wspierająca ich prawidłowe funkcjonowanie i mobilność.',
            price: '200',
            icon: '🫀',
        },
        {
            name: 'HTR — Holistyczna Terapia Relaksacyjna',
            description: 'Głęboka relaksacja łącząca techniki manualne, oddechowe i energetyczne. Kompleksowe odprężenie ciała i umysłu.',
            price: '380',
            icon: '🌿',
        },
        {
            name: 'Masaż Kobido',
            description: 'Japoński masaż liftingujący twarzy. Naturalny lifting bez skalpela, pobudzający krążenie i odmładzający skórę.',
            price: 'Do ustalenia',
            icon: '🌸',
        },
        {
            name: 'Masaż Transbukalny',
            description: 'Innowacyjny masaż modelujący twarz wykonywany od wewnątrz jamy ustnej. Redukcja napięć i poprawa owalu twarzy.',
            price: 'Do ustalenia',
            icon: '💎',
        },
        {
            name: 'Trening Funkcjonalny',
            description: 'Indywidualnie dobrany program treningowy poprawiający wydolność, siłę i koordynację ruchową.',
            price: '180',
            icon: '💪',
        },
    ];
}
