import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    photo?: string;
    storySections?: string[];
}

@Component({
    selector: 'app-team',
    standalone: true,
    imports: [CommonModule, ScrollRevealDirective],
    template: `
    <section id="zespol" class="py-20 md:py-28 bg-cream-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" appScrollReveal>
          <span class="inline-block px-4 py-1.5 bg-olive/10 text-olive rounded-full text-sm font-medium mb-4">Nasz zespół</span>
          <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Poznaj <span class="text-terracotta">nasz zespół</span>
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">
            Wykwalifikowani specjaliści z pasją do pomagania
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          <div *ngFor="let member of teamMembers; let i = index"
               appScrollReveal [revealDelay]="i * 0.15"
               class="group text-center">
            <div class="relative mb-6 mx-auto w-48 h-48 md:w-56 md:h-56">
              <div class="w-full h-full rounded-full bg-gradient-to-br from-olive-100 to-olive-200 overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 flex items-center justify-center">
                <img *ngIf="member.photo" [src]="member.photo" [alt]="member.name" class="w-full h-full object-cover object-center" width="224" height="224" decoding="async" />
                <svg *ngIf="!member.photo" class="w-20 h-20 text-olive-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <!-- Decorative ring -->
              <div class="absolute inset-0 rounded-full border-2 border-dashed border-beige-300 scale-110 group-hover:scale-115 group-hover:border-beige-400 transition-all duration-300"></div>
            </div>
            <h3 class="font-display text-xl font-semibold text-gray-900 mb-1 group-hover:text-terracotta transition-colors">
              {{ member.name }}
            </h3>
            <p class="text-olive font-medium text-sm mb-3">{{ member.role }}</p>
            <p class="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{{ member.bio }}</p>
            <ul *ngIf="member.storySections?.length" class="mt-8 text-left max-w-3xl mx-auto list-none space-y-5 pl-0">
              <li *ngFor="let section of member.storySections" class="flex gap-3.5 text-gray-600 leading-relaxed text-base">
                <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-olive" aria-hidden="true"></span>
                <span class="min-w-0">{{ section }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
    styles: []
})
export class TeamComponent {
    teamMembers: TeamMember[] = [
        {
            name: 'Natalia Matusz',
            role: 'Fizjoterapeutka / Założycielka',
            bio: 'Fizjoterapeutka z pasją do ruchu i holistycznego podejścia do ciała.',
            photo: 'assets/img/zdjecie_na_profil.jpg',
            storySections: [
                'Aktywność i praca z ciałem towarzyszą mi od zawsze – przez 15 lat grałam w siatkówkę na poziomie wyczynowym, wtedy nauczyłam się, że słuchanie ciała i dbanie o jego harmonię to proces, który nigdy się nie kończy. Każdy dzień przynosi nowe doświadczenia, a ciało wciąż potrafi mnie czymś zaskoczyć.',
                'Od ponad 10 lat łączę terapię z treningiem. Pomagam w pracy nad bólem, napięciem i codziennym funkcjonowaniem.',
                'Ukończyłam liczne szkolenia z fizjoterapii, diagnostyki, terapii manualnej i alternatywnych metod pracy z ciałem. Ciągle rozwijam swoje umiejętności, aby sesje były skuteczne i dopasowane do indywidualnych potrzeb.',
                'W mojej pracy stawiam na całościowe podejście – nie skupiam się tylko na objawach, ale szukam przyczyny problemu i wspieram organizm w odzyskaniu równowagi.',
            ],
        },
    ];
}
