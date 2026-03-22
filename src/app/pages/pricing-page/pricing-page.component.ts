import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface PricingCategory {
  name: string;
  icon: string;
  items: PricingItem[];
  isEms?: boolean;
  hideHeader?: boolean; // bez nagłówka kategorii — tylko pozycje
}

interface PricingItem {
  name: string;
  description?: string;
  price: string;
  note?: string;
  badge?: string;
}

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  template: `
    <div class="min-h-screen bg-white pt-24 pb-20">
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
          <div class="relative bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-olive/40">
            <div class="absolute top-0 right-0 px-6 py-2 bg-terracotta text-white text-sm font-bold rounded-bl-2xl uppercase tracking-wider z-10">
              Nowość!
            </div>
            <div class="flex flex-col lg:flex-row">
              <!-- EMS Image -->
              <div class="lg:w-2/5 relative">
                <img src="assets/img/cennik_ems.jpg" 
                     alt="Cennik EMS - Trening Electrical Muscle Stimulation" 
                     class="w-full h-full object-cover min-h-[250px] lg:min-h-full">
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-r"></div>
              </div>
              <!-- EMS Info -->
              <div class="lg:w-3/5 p-8 md:p-10">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-olive to-olive-400 flex items-center justify-center shadow-lg">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h2 class="font-display text-2xl md:text-3xl font-bold text-gray-900">Trening EMS</h2>
                    <p class="text-olive text-sm">Electrical Muscle Stimulation</p>
                  </div>
                </div>
                <div class="bg-olive/5 rounded-xl p-6">
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
        </div>

        <!-- OTHER CATEGORIES -->
        <div class="space-y-8">
          <div *ngFor="let category of categories; let ci = index"
               appScrollReveal [revealDelay]="ci * 0.1"
               class="bg-white rounded-2xl shadow-sm overflow-hidden border border-olive/25 hover:shadow-md transition-shadow">
            
            <div *ngIf="!category.hideHeader" class="px-8 py-6 bg-gradient-to-r from-olive/5 to-white border-b border-olive/25">
              <div class="flex items-center gap-3">
                <span class="text-2xl">{{ category.icon }}</span>
                <h2 class="font-display text-xl md:text-2xl font-bold text-gray-900">{{ category.name }}</h2>
              </div>
            </div>

            <div class="divide-y divide-gray-100">
              <div *ngFor="let item of category.items"
                   class="px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-olive/5 transition-colors">
                <div class="flex-1">
                  <div class="flex items-center gap-3 flex-wrap">
                    <h3 *ngIf="item.name" class="font-medium text-gray-900">{{ item.name }}</h3>
                    <span *ngIf="item.badge" class="px-2.5 py-0.5 bg-terracotta/20 text-terracotta-700 border border-terracotta/30 text-xs font-medium rounded-full">{{ item.badge }}</span>
                  </div>
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
          <a href="javascript:void(0)" (click)="navigateToContact()"
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
  constructor(private router: Router) {}

  navigateToContact() {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const el = document.getElementById('kontakt');
        if (el) {
          const offset = 80;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    });
  }

  categories: PricingCategory[] = [
    {
      name: 'Terapia',
      icon: '🧘',
      items: [
        { name: 'Terapia ciała', description: '50 min — kompleksowa praca z ciałem', price: '180' },
        { name: 'Terapia po zabiegach medycyny estetycznej i chirurgii plastycznej', description: '50 min — specjalistyczna terapia wspierająca regenerację', price: '200' },
        { name: 'Terapia wisceralna', description: '50 min — delikatna praca w obrębie jamy brzusznej i klatki piersiowej', price: '200' },
      ]
    },
    {
      name: 'Masaż indywidualnie dobrany',
      icon: '💆',
      items: [
        { name: 'Masaż indywidualnie dopasowany', description: '50 min', price: '180' },
      ]
    },
    {
      name: 'HTR — Holistyczna Terapia Relaksacyjna',
      icon: '🌿',
      items: [
        { name: '', description: '90 min — głęboka relaksacja łącząca techniki manualne, oddechowe i energetyczne', price: '380', badge: 'Autorska metoda' },
      ]
    },
    {
      name: 'Trening',
      icon: '💪',
      items: [
        { name: 'Trening Funkcjonalny', description: '45 min — indywidualny program ćwiczeń', price: '180' },
      ]
    },
  ];
}
