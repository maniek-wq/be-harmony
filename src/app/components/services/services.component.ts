import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Service {
  name: string;
  description: string;
  detailedDescription: string;
  benefits: string[];
  duration: string;
  price: string;
  icon: string;
  isEms?: boolean;
  subItems?: { name: string; price: string; description?: string }[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  template: `
    <section id="servicios" class="py-20 md:py-28 bg-mint-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" appScrollReveal>
          <span class="inline-block px-4 py-1.5 bg-white text-terracotta rounded-full text-sm font-medium mb-4 shadow-sm">Servicios</span>
          <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nuestros <span class="text-terracotta">servicios</span>
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">
            Tecnología avanzada de estimulación muscular eléctrica para fortalecer tu cuerpo
          </p>
        </div>

        <!-- EMS HIGHLIGHT CARD -->
        <div appScrollReveal class="mb-12">
          <div (click)="openModal(emsService)" class="group cursor-pointer relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <!-- Animated gradient border -->
            <div class="absolute inset-0 bg-gradient-to-r from-mint via-terracotta to-mint bg-[length:200%_100%] animate-[gradientBorder_3s_ease_infinite] p-[3px] rounded-3xl">
              <div class="w-full h-full bg-white rounded-3xl"></div>
            </div>
            
            <div class="relative bg-white rounded-3xl p-6 sm:p-8 md:p-10">
              <div class="flex flex-col lg:flex-row items-center gap-8">
                <div class="w-full lg:w-5/12 flex-shrink-0">
                  <div class="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-lg">
                    <img src="assets/img/foto_ems1.jpg" alt="Entrenamiento EMS" class="w-full h-full object-cover object-center img-content img-scale-mobile scale-100 group-hover:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div class="flex items-center gap-2">
                        <svg class="w-6 h-6 text-mint-300 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                        <span class="text-white font-medium text-sm drop-shadow-md">Ver detalles</span>
                      </div>
                    </div>
                    <span class="absolute top-4 left-4 px-3 py-1.5 bg-terracotta text-white text-xs font-bold rounded-full shadow-xl uppercase tracking-wider animate-bounce">
                      ¡Novedad!
                    </span>
                  </div>
                </div>

                <div class="flex-1 text-center lg:text-left">
                  <h3 class="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    Entrenamiento EMS
                    <span class="text-mint-600 text-lg font-normal ml-2">(Electrical Muscle Stimulation)</span>
                  </h3>
                  <p class="text-gray-600 text-lg leading-relaxed mb-4">
                    Tecnología de entrenamiento moderna que utiliza impulsos eléctricos para estimular los músculos. 
                    En poco tiempo fortalece todo el cuerpo y mejora la figura.
                  </p>
                  <div class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                    <span class="text-3xl font-bold text-terracotta">90 €</span>
                    <span class="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">sesión de prueba</span>
                    <span class="text-sm text-mint-600 font-medium ml-auto hidden lg:inline-flex items-center gap-1">
                      Haz clic para más detalles
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div appScrollReveal class="text-center mt-14">
          <a routerLink="/precios"
             class="inline-flex items-center gap-2 px-8 py-4 bg-terracotta text-white font-semibold rounded-full hover:bg-terracotta-600 hover:shadow-xl transition-all duration-300 text-lg transform hover:-translate-y-0.5">
            Ver precios completos
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- SERVICE DETAIL MODAL -->
    <div *ngIf="selectedService"
         class="fixed inset-0 z-50 flex items-center justify-center p-4"
         (click)="closeModal()">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"></div>
      
      <!-- Modal Content -->
      <div (click)="$event.stopPropagation()"
           class="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        
        <!-- Close button -->
        <button (click)="closeModal()"
                class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
          <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- Header -->
        <div class="p-8 pb-0">
          <div class="flex items-start gap-5">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                 [class]="selectedService.isEms ? 'bg-gradient-to-br from-mint to-mint-400' : 'bg-mint-50'">
              <span *ngIf="!selectedService.isEms" class="text-3xl" [innerHTML]="selectedService.icon"></span>
              <svg *ngIf="selectedService.isEms" class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <div class="flex-1 pr-8">
              <div *ngIf="selectedService.isEms" class="mb-2">
                <span class="px-3 py-1 bg-terracotta text-white text-xs font-bold rounded-full uppercase tracking-wider">¡Novedad!</span>
              </div>
              <h2 class="font-display text-2xl md:text-3xl font-bold text-gray-900">
                {{ selectedService.name }}
              </h2>
            </div>
          </div>
        </div>

        <!-- Body -->
        <div class="p-8 space-y-6">
          <!-- Detailed description -->
          <div>
            <p class="text-gray-600 text-base leading-relaxed">
              {{ selectedService.detailedDescription }}
            </p>
          </div>

          <!-- Benefits -->
          <div *ngIf="selectedService.benefits.length > 0">
            <h3 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <svg class="w-5 h-5 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Beneficios
            </h3>
            <ul class="space-y-2">
              <li *ngFor="let benefit of selectedService.benefits"
                  class="flex items-start gap-3 text-gray-600 text-sm">
                <svg class="w-4 h-4 text-mint-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ benefit }}
              </li>
            </ul>
          </div>

          <!-- Duration & Price -->
          <div class="flex flex-col sm:flex-row gap-4">
            <div *ngIf="selectedService.duration" class="flex-1 p-4 bg-gray-50 rounded-xl text-center">
              <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Duración</p>
              <p class="font-semibold text-gray-900">{{ selectedService.duration }}</p>
            </div>
            <div *ngIf="!selectedService.subItems" class="flex-1 p-4 bg-terracotta/5 rounded-xl text-center">
              <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Precio</p>
              <p class="text-2xl font-bold text-terracotta">
                {{ selectedService.price }}
                <span class="text-sm text-gray-400 font-normal">€</span>
              </p>
            </div>
          </div>

          <!-- CTA -->
          <a href="#contacto" (click)="closeModal()"
             class="block w-full px-6 py-4 bg-terracotta text-white font-semibold rounded-xl text-center hover:bg-terracotta-600 hover:shadow-lg transition-all duration-300">
            Reservar cita
          </a>
        </div>
      </div>
    </div>
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
  selectedService: Service | null = null;

  emsService: Service = {
    name: 'Entrenamiento EMS',
    description: 'Tecnología de entrenamiento moderna que utiliza impulsos eléctricos para estimular los músculos.',
    detailedDescription: 'El entrenamiento EMS (Electrical Muscle Stimulation) es un método de entrenamiento revolucionario que utiliza impulsos eléctricos para estimular simultáneamente todos los grupos musculares principales. Durante una sesión de 20 minutos, tus músculos realizan miles de contracciones, lo que equivale a varias horas de entrenamiento en el gimnasio. La tecnología EMS es segura, efectiva e ideal tanto para personas que comienzan su aventura con el entrenamiento como para deportistas experimentados que buscan un estímulo de entrenamiento intenso. Cada sesión se adapta individualmente a tu nivel y objetivos.',
    benefits: [
      'Fortalecimiento y tonificación de todo el cuerpo en poco tiempo',
      'Quema de grasa y mejora de la figura',
      'Reducción del dolor de espalda y mejora de la postura',
      'Suave para las articulaciones — ideal en caso de lesiones',
      'Aumento de la resistencia y la fuerza muscular',
      'Solo 20 minutos por sesión de entrenamiento',
      'Intensidad de los impulsos adaptada individualmente',
    ],
    duration: '20 min',
    price: '90',
    icon: '⚡',
    isEms: true,
  };

  services: Service[] = [];

  openModal(service: Service) {
    this.selectedService = service;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedService = null;
    document.body.style.overflow = '';
  }
}
