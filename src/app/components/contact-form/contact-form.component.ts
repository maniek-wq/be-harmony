import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
    selector: 'app-contact-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, ScrollRevealDirective],
    template: `
    <section id="kontakt" class="py-20 md:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <!-- Left: Info -->
          <div appScrollReveal>
            <span class="inline-block px-4 py-1.5 bg-mint-50 text-mint-800 rounded-full text-sm font-medium mb-4">Kontakt</span>
            <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Napisz <span class="text-terracotta">do nas</span>
            </h2>
            <p class="text-gray-600 text-lg leading-relaxed mb-8">
              Masz pytania dotyczące naszych usług? Chcesz umówić wizytę? 
              Wypełnij formularz, a odezwiemy się najszybciej jak to możliwe.
            </p>

            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-mint-50 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-mint-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Adres</h4>
                  <p class="text-gray-500">Adres gabinetu — do uzupełnienia</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-mint-50 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-mint-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Telefon</h4>
                  <p class="text-gray-500">+48 XXX XXX XXX</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-mint-50 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-mint-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Email</h4>
                  <p class="text-gray-500">kontakt&#64;be-harmony.pl</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Form -->
          <div appScrollReveal [revealDelay]="0.2">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()"
                  class="bg-mint-50/50 border border-mint-200 rounded-2xl p-6 md:p-8 shadow-sm">
              
              <div class="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">Imię i nazwisko *</label>
                  <input formControlName="name" type="text" placeholder="Jan Kowalski"
                         class="w-full px-4 py-3 rounded-xl border border-mint-200 bg-white focus:border-mint focus:ring-2 focus:ring-mint/20 outline-none transition-all text-sm"
                         [class.border-red-300]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched">
                  <p *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched"
                     class="mt-1 text-xs text-red-500">Proszę podać imię i nazwisko</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">Telefon</label>
                  <input formControlName="phone" type="tel" placeholder="+48 XXX XXX XXX"
                         class="w-full px-4 py-3 rounded-xl border border-mint-200 bg-white focus:border-mint focus:ring-2 focus:ring-mint/20 outline-none transition-all text-sm">
                </div>
              </div>

              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                <input formControlName="email" type="email" placeholder="jan@example.com"
                       class="w-full px-4 py-3 rounded-xl border border-mint-200 bg-white focus:border-mint focus:ring-2 focus:ring-mint/20 outline-none transition-all text-sm"
                       [class.border-red-300]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
                <p *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
                   class="mt-1 text-xs text-red-500">Proszę podać poprawny adres email</p>
              </div>

              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Temat</label>
                <select formControlName="subject"
                        class="w-full px-4 py-3 rounded-xl border border-mint-200 bg-white focus:border-mint focus:ring-2 focus:ring-mint/20 outline-none transition-all text-sm">
                  <option value="">Wybierz temat...</option>
                  <option value="wizyta">Umówienie wizyty</option>
                  <option value="ems">Trening EMS</option>
                  <option value="cennik">Pytanie o cennik</option>
                  <option value="inne">Inne</option>
                </select>
              </div>

              <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Wiadomość *</label>
                <textarea formControlName="message" rows="5" placeholder="Twoja wiadomość..."
                          class="w-full px-4 py-3 rounded-xl border border-mint-200 bg-white focus:border-mint focus:ring-2 focus:ring-mint/20 outline-none transition-all text-sm resize-none"
                          [class.border-red-300]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"></textarea>
                <p *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"
                   class="mt-1 text-xs text-red-500">Proszę wpisać wiadomość</p>
              </div>

              <button type="submit"
                      [disabled]="contactForm.invalid"
                      class="w-full px-8 py-4 bg-terracotta text-white font-semibold rounded-xl hover:bg-terracotta-600 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-sm">
                Wyślij wiadomość
              </button>

              <!-- Success message -->
              <div *ngIf="submitted"
                   class="mt-4 p-4 bg-mint-100 text-mint-800 rounded-xl text-sm text-center animate-fade-in">
                ✅ Wiadomość została wysłana! Skontaktujemy się wkrótce.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
    styles: []
})
export class ContactFormComponent {
    contactForm: FormGroup;
    submitted = false;

    constructor(private fb: FormBuilder) {
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: [''],
            subject: [''],
            message: ['', Validators.required],
        });
    }

    onSubmit() {
        if (this.contactForm.valid) {
            console.log('Form submitted:', this.contactForm.value);
            this.submitted = true;
            this.contactForm.reset();
            setTimeout(() => this.submitted = false, 5000);
        } else {
            this.contactForm.markAllAsTouched();
        }
    }
}
