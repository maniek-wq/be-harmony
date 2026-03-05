import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section class="py-20 md:py-28 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" appScrollReveal>
          <span class="inline-block px-4 py-1.5 bg-mint-50 text-mint-800 rounded-full text-sm font-medium mb-4">FAQ</span>
          <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Preguntas <span class="text-terracotta">frecuentes</span>
          </h2>
          <p class="text-gray-600 text-lg">
            Respuestas a las preguntas que recibimos con más frecuencia
          </p>
        </div>

        <div class="space-y-4">
          <div *ngFor="let item of faqItems; let i = index"
               appScrollReveal [revealDelay]="i * 0.08"
               class="border border-mint-100 rounded-2xl overflow-hidden transition-all duration-300"
               [class.shadow-md]="item.open"
               [class.border-mint-300]="item.open">
            
            <button (click)="toggle(i)"
                    class="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-mint-50/50 transition-colors duration-200">
              <span class="font-semibold text-gray-900 text-sm md:text-base pr-4">{{ item.question }}</span>
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                   [class.bg-terracotta]="item.open"
                   [class.bg-mint-100]="!item.open"
                   [class.rotate-45]="item.open">
                <svg class="w-4 h-4 transition-colors" 
                     [class.text-white]="item.open"
                     [class.text-mint-600]="!item.open"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/>
                </svg>
              </div>
            </button>

            <div class="overflow-hidden transition-all duration-300"
                 [style.max-height]="item.open ? '500px' : '0px'"
                 [style.opacity]="item.open ? '1' : '0'">
              <div class="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                <p class="text-gray-600 text-sm leading-relaxed">{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class FaqComponent {
  faqItems: FaqItem[] = [
    {
      question: '¿Qué es el entrenamiento EMS?',
      answer: 'EMS (Electrical Muscle Stimulation) es una tecnología de entrenamiento innovadora que utiliza impulsos eléctricos para estimular simultáneamente todos los grupos musculares principales. Una sesión de 20 minutos equivale a varias horas de entrenamiento convencional en el gimnasio. Es seguro, efectivo y adecuado para todos los niveles.',
      open: false,
    },
    {
      question: '¿Cómo prepararme para el entrenamiento EMS?',
      answer: 'Para el entrenamiento EMS, trae ropa cómoda (camiseta y pantalones cortos/leggins) y zapatillas deportivas. Come una comida ligera al menos 1,5 horas antes y recuerda hidratarte bien. Todo el equipamiento EMS lo proporcionamos nosotros.',
      open: false,
    },
    {
      question: '¿Cuánto dura la primera sesión?',
      answer: 'La primera sesión dura aproximadamente de 30 a 40 minutos. Incluye una entrevista detallada, evaluación funcional y la primera sesión de entrenamiento EMS. Las sesiones siguientes duran 20 minutos de entrenamiento activo.',
      open: false,
    },
    {
      question: '¿Puedo cancelar una cita?',
      answer: 'Sí, te pedimos que canceles la cita con al menos 24 horas de antelación, por teléfono o mensaje. De esta manera podemos ofrecer el horario a otro cliente. En caso de no cancelar, puede aplicarse un cargo.',
      open: false,
    },
    {
      question: '¿Para quién es el entrenamiento EMS? ¿Hay contraindicaciones?',
      answer: 'El entrenamiento EMS es seguro para la mayoría de las personas, independientemente de su nivel de forma física. Las contraindicaciones incluyen: embarazo, marcapasos, epilepsia, estados inflamatorios activos y enfermedades oncológicas. Antes del primer entrenamiento siempre realizamos una entrevista de salud.',
      open: false,
    },
    {
      question: '¿Ofrecen tarjetas regalo?',
      answer: '¡Sí! Ofrecemos elegantes tarjetas regalo para cualquier servicio o una cantidad específica. Es el regalo perfecto para tus seres queridos, ya sea para un cumpleaños, festivos o simplemente porque sí. Pregunta por los detalles por teléfono o a través del formulario de contacto.',
      open: false,
    },
  ];

  toggle(index: number) {
    this.faqItems[index].open = !this.faqItems[index].open;
  }
}
