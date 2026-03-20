import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import emailjs from '@emailjs/browser';

const MAX_FILE_SIZE_MB = 5;

/**
 * Konfiguracja EmailJS – pobierz z https://dashboard.emailjs.com
 * 1. Załóż konto, dodaj usługę email (np. Gmail)
 * 2. Utwórz szablon z zmiennymi: {{name}}, {{email}}, {{phonePrefix}}, {{phoneNumber}}, {{subject}}, {{message}}
 * 3. W zakładce Attachments dodaj Form File Attachment, parametr: attachment
 */
const EMAILJS_CONFIG = {
  serviceId: 'service_pxiy3k7',
  templateId: 'template_ig67zhr',
  publicKey: 'aEkBqIPwEtm23_ZfZ',
};

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
                  <p class="text-gray-500">Przęsocin<br>ul. Orzechowa 33B/lok.7</p>
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
                  <p class="text-gray-500"><a href="tel:+48601160646" class="hover:text-terracotta transition-colors">601 160 646</a></p>
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
                  <p class="text-gray-500"><a href="mailto:nataliamatuszbeharmony@gmail.com" class="hover:text-terracotta transition-colors">nataliamatuszbeharmony&#64;gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Form -->
          <div appScrollReveal [revealDelay]="0.2">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit($event)"
                  enctype="multipart/form-data"
                  class="bg-mint-50/50 border border-mint-200 rounded-2xl p-6 md:p-8 shadow-sm overflow-hidden">
              
              <div class="grid sm:grid-cols-2 gap-4 mb-4">
                <div class="min-w-0">
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">Imię i nazwisko *</label>
                  <input formControlName="name" name="name" type="text" placeholder="Jan Kowalski"
                         class="w-full px-4 py-3 rounded-xl border border-mint-200 bg-white focus:border-mint focus:ring-2 focus:ring-mint/20 outline-none transition-all text-sm"
                         [class.border-red-300]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched">
                  <p *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched"
                     class="mt-1 text-xs text-red-500">Proszę podać imię i nazwisko</p>
                </div>
                <div class="min-w-0">
                  <label class="block text-sm font-medium text-gray-700 mb-1.5">Telefon</label>
                  <div class="flex min-w-0 rounded-xl border border-mint-200 bg-white overflow-hidden focus-within:border-mint focus-within:ring-2 focus-within:ring-mint/20 transition-all">
                    <select formControlName="phonePrefix" name="phonePrefix"
                            class="phone-prefix-select min-w-[4.5rem] px-4 py-3 bg-mint-50/80 border-r border-mint-200 text-gray-700 font-medium text-sm focus:outline-none focus:ring-0 cursor-pointer flex-shrink-0">
                      <option value="+48">+48</option>
                      <option value="+49">+49</option>
                      <option value="+33">+33</option>
                      <option value="+44">+44</option>
                      <option value="+46">+46</option>
                      <option value="+420">+420</option>
                      <option value="+43">+43</option>
                      <option value="+31">+31</option>
                      <option value="+32">+32</option>
                      <option value="+39">+39</option>
                      <option value="+34">+34</option>
                    </select>
                    <input formControlName="phoneNumber" name="phoneNumber" type="tel" placeholder="123 456 789"
                           (input)="onPhoneInput()"
                           class="flex-1 min-w-0 px-4 py-3 border-0 bg-transparent text-sm placeholder:text-gray-400 focus:outline-none focus:ring-0"
                           inputmode="numeric">
                  </div>
                </div>
              </div>

              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                <input formControlName="email" name="email" type="email" placeholder="jan@example.com"
                       class="w-full px-4 py-3 rounded-xl border border-mint-200 bg-white focus:border-mint focus:ring-2 focus:ring-mint/20 outline-none transition-all text-sm"
                       [class.border-red-300]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
                <p *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
                   class="mt-1 text-xs text-red-500">Proszę podać poprawny adres email</p>
              </div>

              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Temat</label>
                <select formControlName="subject" name="subject"
                        class="w-full px-4 py-3 rounded-xl border border-mint-200 bg-white focus:border-mint focus:ring-2 focus:ring-mint/20 outline-none transition-all text-sm">
                  <option value="">Wybierz temat...</option>
                  <option value="Umówienie wizyty">Umówienie wizyty</option>
                  <option value="Trening EMS">Trening EMS</option>
                  <option value="Pytanie o cennik">Pytanie o cennik</option>
                  <option value="Inne">Inne</option>
                </select>
              </div>

              <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Wiadomość *</label>
                <textarea formControlName="message" name="message" rows="5" placeholder="Twoja wiadomość..."
                          class="w-full px-4 py-3 rounded-xl border border-mint-200 bg-white focus:border-mint focus:ring-2 focus:ring-mint/20 outline-none transition-all text-sm resize-none"
                          [class.border-red-300]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"></textarea>
                <p *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"
                   class="mt-1 text-xs text-red-500">Proszę wpisać wiadomość</p>
              </div>

              <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700 mb-1.5">Załącznik</label>
                <div class="flex flex-wrap gap-2 items-center">
                  <label class="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-mint-200 bg-white hover:bg-mint-50/50 cursor-pointer transition-colors text-sm">
                    <svg class="w-5 h-5 text-mint-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/>
                    </svg>
                    Wybierz plik
                    <input type="file" #fileInput name="attachment" (change)="onFileSelected($event)"
                           accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                           class="sr-only">
                  </label>
                  <span *ngIf="selectedFile" class="text-sm text-gray-600 truncate max-w-[200px]" [title]="selectedFile.name">
                    {{ selectedFile.name }}
                  </span>
                  <button *ngIf="selectedFile" type="button"
                          (click)="removeFile()"
                          class="text-red-500 hover:text-red-600 text-sm font-medium">
                    Usuń
                  </button>
                </div>
                <p class="mt-1 text-xs text-gray-500">PDF, DOC, DOCX, JPG, PNG — maks. 5 MB</p>
              </div>

              <button type="submit"
                      [disabled]="contactForm.invalid || submitting"
                      class="w-full px-8 py-4 bg-olive text-white font-semibold rounded-xl hover:bg-olive-600 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-sm">
                {{ submitting ? 'Wysyłanie...' : 'Wyślij wiadomość' }}
              </button>

              <!-- Success message -->
              <div *ngIf="submitted"
                   class="mt-4 p-4 bg-mint-100 text-mint-800 rounded-xl text-sm text-center animate-fade-in">
                ✅ Wiadomość została wysłana! Skontaktujemy się wkrótce.
              </div>
              <!-- Error message -->
              <div *ngIf="errorMessage"
                   class="mt-4 p-4 bg-red-50 text-red-700 rounded-xl text-sm text-center animate-fade-in">
                ⚠️ {{ errorMessage }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Toast sukcesu -->
    <div *ngIf="showToast"
         class="fixed bottom-6 right-6 left-6 sm:left-auto z-[60] max-w-sm mx-auto sm:mx-0 px-5 py-4 bg-olive text-white rounded-xl shadow-xl flex items-center gap-3 toast-slide-in">
      <span class="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
      </span>
      <p class="font-medium">Wiadomość została wysłana! Skontaktujemy się wkrótce.</p>
      <button type="button" (click)="dismissToast()" class="ml-auto flex-shrink-0 p-1 hover:bg-white/20 rounded-lg transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
  `,
  styles: [`
    .phone-prefix-select {
      appearance: none;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
      background-position: right 0.5rem center;
      background-repeat: no-repeat;
      background-size: 1.25rem;
      padding-right: 2rem;
    }
    .toast-slide-in {
      animation: toastSlideIn 0.35s ease-out;
    }
    @keyframes toastSlideIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class ContactFormComponent {
  @ViewChild('fileInput') fileInputRef?: ElementRef<HTMLInputElement>;
  contactForm: FormGroup;
  submitted = false;
  showToast = false;
  toastTimeout?: ReturnType<typeof setTimeout>;
  submitting = false;
  errorMessage = '';
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonePrefix: ['+48'],
      phoneNumber: ['', Validators.pattern(/^\d*$/)],
      subject: [''],
      message: ['', Validators.required],
    });
  }

  onPhoneInput() {
    const ctrl = this.contactForm.get('phoneNumber');
    if (ctrl) {
      const v = ctrl.value ?? '';
      const digits = v.replace(/\D/g, '');
      if (digits !== v) ctrl.setValue(digits, { emitEvent: false });
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      alert(`Plik jest za duży. Maksymalny rozmiar: ${MAX_FILE_SIZE_MB} MB.`);
      input.value = '';
      return;
    }
    this.selectedFile = file;
  }

  dismissToast() {
    this.showToast = false;
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
      this.toastTimeout = undefined;
    }
  }

  removeFile() {
    this.selectedFile = null;
    if (this.fileInputRef?.nativeElement) {
      this.fileInputRef.nativeElement.value = '';
    }
  }

  onSubmit(event: SubmitEvent) {
    const formEl = event.target as HTMLFormElement;
    if (!this.contactForm.valid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    if (EMAILJS_CONFIG.serviceId.startsWith('YOUR_') || EMAILJS_CONFIG.templateId.startsWith('YOUR_') || EMAILJS_CONFIG.publicKey.startsWith('YOUR_')) {
      this.errorMessage = 'Skonfiguruj EmailJS w pliku contact-form.component.ts (EMAILJS_CONFIG).';
      setTimeout(() => (this.errorMessage = ''), 6000);
      return;
    }
    this.submitting = true;
    this.errorMessage = '';
    emailjs
      .sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formEl,
        { publicKey: EMAILJS_CONFIG.publicKey }
      )
      .then(
        () => {
          this.submitted = true;
          this.showToast = true;
          this.contactForm.reset({ name: '', email: '', phonePrefix: '+48', phoneNumber: '', subject: '', message: '' });
          this.removeFile();
          if (this.toastTimeout) clearTimeout(this.toastTimeout);
          this.toastTimeout = setTimeout(() => this.dismissToast(), 5000);
          setTimeout(() => (this.submitted = false), 5000);
        },
        (err) => {
          this.errorMessage = 'Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz bezpośrednio na email.';
          console.error('EmailJS error:', err);
          setTimeout(() => (this.errorMessage = ''), 6000);
        }
      )
      .finally(() => (this.submitting = false));
  }
}
