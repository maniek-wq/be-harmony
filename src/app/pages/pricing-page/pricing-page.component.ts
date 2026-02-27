import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface PricingCategory {
    name: string;
    icon: string;
    items: PricingItem[];
    isEms?: boolean;
}

interface PricingItem {
    name: string;
    description?: string;
    price: string;
    note?: string;
}

@Component({
    selector: 'app-pricing-page',
    standalone: true,
    imports: [CommonModule, RouterLink, ScrollRevealDirective],
    template: `
    <div class="min-h-screen bg-mint-50 pt-24 pb-20">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-16" appScrollReveal>
          <a routerLink="/" class="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-600 transition-colors text-sm mb-6">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Powrót do strony głównej
          </a>
          <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            <span class="text-terracotta">Cennik</span> usług
          </h1>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            Przejrzysty cennik wszystkich naszych usług. Ceny podane w złotych polskich.
          </p>
        </div>

        <!-- EMS HIGHLIGHT -->
        <div appScrollReveal class="mb-10">
          <div class="relative bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-mint-300">
            <div class="absolute top-0 right-0 px-6 py-2 bg-terracotta text-white text-sm font-bold rounded-bl-2xl uppercase tracking-wider">
              Nowość!
            </div>
            <div class="p-8 md:p-10">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-mint to-mint-400 flex items-center justify-center shadow-lg">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div>
                  <h2 class="font-display text-2xl md:text-3xl font-bold text-gray-900">Trening EMS</h2>
                  <p class="text-mint-600 text-sm">Electrical Muscle Stimulation</p>
                </div>
              </div>
              <div class="bg-mint-50 rounded-xl p-6">
                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 class="font-semibold text-gray-900 text-lg">Trening próbny</h3>
                    <p class="text-gray-500 text-sm mt-1">Pierwszy trening EMS w promocyjnej cenie</p>
                  </div>
                  <div class="text-right">
                    <span class="text-4xl font-bold text-terracotta">90</span>
                    <span class="text-gray-500 text-lg ml-1">zł</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- OTHER CATEGORIES -->
        <div class="space-y-8">
          <div *ngFor="let category of categories; let ci = index"
               appScrollReveal [revealDelay]="ci * 0.1"
               class="bg-white rounded-2xl shadow-sm overflow-hidden border border-mint-100 hover:shadow-md transition-shadow">
            
            <div class="px-8 py-6 bg-gradient-to-r from-mint-50 to-white border-b border-mint-100">
              <div class="flex items-center gap-3">
                <span class="text-2xl">{{ category.icon }}</span>
                <h2 class="font-display text-xl md:text-2xl font-bold text-gray-900">{{ category.name }}</h2>
              </div>
            </div>

            <div class="divide-y divide-gray-100">
              <div *ngFor="let item of category.items"
                   class="px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-mint-50/30 transition-colors">
                <div class="flex-1">
                  <h3 class="font-medium text-gray-900">{{ item.name }}</h3>
                  <p *ngIf="item.description" class="text-gray-500 text-sm mt-0.5">{{ item.description }}</p>
                </div>
                <div class="flex items-baseline gap-1 flex-shrink-0">
                  <span class="text-2xl font-bold text-terracotta">{{ item.price }}</span>
                  <span *ngIf="item.price !== 'Do ustalenia'" class="text-gray-400 text-sm">zł</span>
                  <span *ngIf="item.note" class="text-gray-400 text-xs ml-2">({{ item.note }})</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-16" appScrollReveal>
          <p class="text-gray-500 text-sm mb-6">Masz pytania dotyczące cennika? Skontaktuj się z nami.</p>
          <a routerLink="/" fragment="kontakt"
             class="inline-flex items-center gap-2 px-8 py-4 bg-terracotta text-white font-semibold rounded-full hover:bg-terracotta-600 hover:shadow-xl transition-all duration-300 text-lg">
            Umów wizytę
          </a>
        </div>
      </div>
    </div>
  `,
    styles: []
})
export class PricingPageComponent {
    categories: PricingCategory[] = [
        {
            name: 'Terapia',
            icon: '🧘',
            items: [
                { name: 'Terapia ciała', description: 'Kompleksowa praca z ciałem łącząca techniki fizjoterapeutyczne', price: '180' },
                { name: 'Terapia po zabiegach medycyny estetycznej i chirurgii plastycznej', description: 'Specjalistyczna terapia wspierająca regenerację', price: '200' },
                { name: 'Terapia wisceralna', description: 'Terapia manualna narządów wewnętrznych', price: '200' },
            ]
        },
        {
            name: 'Masaże',
            icon: '💆',
            items: [
                { name: 'Masaż głęboki', price: '170' },
                { name: 'Masaż powięziowy', price: '180' },
                { name: 'Masaż relaksacyjny', price: '170' },
                { name: 'Masaż Kobido', description: 'Japoński masaż liftingujący twarzy', price: 'Do ustalenia' },
                { name: 'Masaż Transbukalny', description: 'Innowacyjny masaż modelujący twarz', price: 'Do ustalenia' },
            ]
        },
        {
            name: 'Praca z ciałem',
            icon: '🩹',
            items: [
                { name: 'Praca z blizną i obrzękami', description: 'Terapia blizn pooperacyjnych i pourazowych', price: '180/200' },
            ]
        },
        {
            name: 'Terapie holistyczne',
            icon: '🌿',
            items: [
                { name: 'HTR — Holistyczna Terapia Relaksacyjna', description: 'Głęboka relaksacja łącząca techniki manualne, oddechowe i energetyczne', price: '380' },
            ]
        },
        {
            name: 'Trening',
            icon: '💪',
            items: [
                { name: 'Trening Funkcjonalny', description: 'Indywidualny program treningowy', price: '180' },
            ]
        },
    ];
}
