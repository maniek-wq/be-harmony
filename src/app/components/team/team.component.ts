import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section id="equipo" class="py-20 md:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" appScrollReveal>
          <span class="inline-block px-4 py-1.5 bg-mint-50 text-mint-800 rounded-full text-sm font-medium mb-4">Nuestro equipo</span>
          <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Conoce a <span class="text-terracotta">nuestro equipo</span>
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">
            Especialistas cualificados con pasión por ayudar
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div *ngFor="let member of teamMembers; let i = index"
               appScrollReveal [revealDelay]="i * 0.15"
               class="group text-center">
            <div class="relative mb-6 mx-auto w-48 h-48 md:w-56 md:h-56">
              <div class="w-full h-full rounded-full bg-gradient-to-br from-mint-100 to-mint-200 overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 flex items-center justify-center">
                <svg class="w-20 h-20 text-mint-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <!-- Decorative ring -->
              <div class="absolute inset-0 rounded-full border-2 border-dashed border-terracotta/20 scale-110 group-hover:scale-115 group-hover:border-terracotta/40 transition-all duration-300"></div>
            </div>
            <h3 class="font-display text-xl font-semibold text-gray-900 mb-1 group-hover:text-terracotta transition-colors">
              {{ member.name }}
            </h3>
            <p class="text-mint-600 font-medium text-sm mb-3">{{ member.role }}</p>
            <p class="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'Natalia Matusz',
      role: 'Fisioterapeuta / Fundadora',
      bio: 'Fisioterapeuta apasionada por el enfoque holístico del cuerpo. Especializada en terapia manual y entrenamiento EMS.',
    },
    {
      name: 'Nombre Apellido',
      role: 'Especialista / Terapeuta',
      bio: 'Descripción de la persona — experiencia, especialización y enfoque en el trabajo con el paciente.',
    },
    {
      name: 'Nombre Apellido',
      role: 'Especialista / Terapeuta',
      bio: 'Descripción de la persona — experiencia, especialización y enfoque en el trabajo con el paciente.',
    },
  ];
}
