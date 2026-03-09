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
  regularTherapy?: string[];
  forWhom?: string;
  benefitsHeading?: string;
  combinesSection?: { heading: string; items: string[] };
  whyBeHarmony?: { heading: string; paragraphs: string[] };
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  template: `
    <section id="uslugi" class="py-20 md:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" appScrollReveal>
          <span class="inline-block px-4 py-1.5 bg-white text-terracotta rounded-full text-sm font-medium mb-4 shadow-sm">Usługi</span>
          <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nasze <span class="text-terracotta">usługi</span>
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">
            Kompleksowa oferta łącząca wiedzę fizjoterapeutyczną, trenerską oraz holistyczne podejście do zdrowia i ruchu.
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
                    <img src="assets/img/foto_ems1.jpg" alt="Trening EMS" class="w-full h-full object-cover object-center img-content img-scale-mobile scale-100 group-hover:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div class="flex items-center gap-2">
                        <svg class="w-6 h-6 text-mint-300 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                        <span class="text-white font-medium text-sm drop-shadow-md">Zobacz szczegóły</span>
                      </div>
                    </div>
                    <span class="absolute top-4 left-4 px-3 py-1.5 bg-terracotta text-white text-xs font-bold rounded-full shadow-xl uppercase tracking-wider animate-bounce">
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
                    W krótkim czasie wzmacnia całe ciało i poprawia sylwetkę.
                  </p>
                  <div class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                    <span class="text-3xl font-bold text-terracotta">90 zł</span>
                    <span class="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">trening próbny</span>
                    <span class="text-sm text-mint-600 font-medium ml-auto hidden lg:inline-flex items-center gap-1">
                      Kliknij po szczegóły
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                    </span>
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
               (click)="openModal(service)"
               class="group cursor-pointer bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-warm hover:ring-2 hover:ring-beige-300 transition-all duration-300 border border-beige-200 hover:border-beige-300 hover:-translate-y-1.5 active:scale-[0.98] active:shadow-md">
            
            <div class="w-14 h-14 rounded-xl bg-mint-50 flex items-center justify-center mb-5 group-hover:bg-beige-100 group-hover:scale-110 transition-all duration-300">
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

            <div class="flex items-center justify-between mt-auto">
              <div *ngIf="!service.subItems">
                <span class="text-2xl font-bold text-terracotta">{{ service.price }}</span>
                <span *ngIf="service.price !== 'Do ustalenia'" class="text-gray-400 text-sm ml-1">zł</span>
              </div>
              <span class="text-xs text-mint-600 font-medium flex items-center gap-1 ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                Szczegóły
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </span>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div appScrollReveal class="text-center mt-14">
          <a routerLink="/cennik"
             class="inline-flex items-center gap-2 px-8 py-4 bg-terracotta text-white font-semibold rounded-full hover:bg-terracotta-600 hover:shadow-xl hover:shadow-warm transition-all duration-300 text-lg transform hover:-translate-y-0.5">
            Zobacz pełny cennik
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
                <span class="px-3 py-1 bg-terracotta text-white text-xs font-bold rounded-full uppercase tracking-wider">Nowość!</span>
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

          <!-- Łączy w sobie (np. HTR) -->
          <div *ngIf="selectedService.combinesSection?.items?.length" class="space-y-2">
            <h3 class="font-semibold text-gray-900 mb-3">{{ selectedService.combinesSection?.heading }}</h3>
            <ul class="space-y-2">
              <li *ngFor="let item of selectedService.combinesSection?.items"
                  class="flex items-start gap-3 text-gray-600 text-sm">
                <svg class="w-4 h-4 text-mint-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- Regularna terapia (checkpoints) -->
          <div *ngIf="selectedService.regularTherapy?.length">
            <h3 class="font-semibold text-gray-900 mb-3">Regularna terapia:</h3>
            <ul class="space-y-2">
              <li *ngFor="let item of selectedService.regularTherapy"
                  class="flex items-start gap-3 text-gray-600 text-sm">
                <svg class="w-4 h-4 text-mint-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- Korzyści / Korzyści terapii -->
          <div *ngIf="selectedService.benefits.length && !selectedService.regularTherapy?.length">
            <h3 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <svg class="w-5 h-5 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {{ selectedService.benefitsHeading || 'Korzyści' }}
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

          <!-- Dla kogo -->
          <div *ngIf="selectedService.forWhom" class="space-y-2">
            <h3 class="font-semibold text-gray-900 mb-2">Dla kogo?</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ selectedService.forWhom }}</p>
          </div>

          <!-- Dlaczego w Be Harmony? -->
          <div *ngIf="selectedService.whyBeHarmony?.paragraphs?.length" class="space-y-3">
            <h3 class="font-semibold text-gray-900 mb-2">{{ selectedService.whyBeHarmony?.heading }}</h3>
            <p *ngFor="let p of selectedService.whyBeHarmony?.paragraphs"
               class="text-gray-600 text-sm leading-relaxed">{{ p }}</p>
          </div>

          <!-- Sub items (for massages) -->
          <div *ngIf="selectedService.subItems">
            <h3 class="font-semibold text-gray-900 mb-3">Rodzaje</h3>
            <div class="space-y-3">
              <div *ngFor="let sub of selectedService.subItems"
                   class="flex items-center justify-between p-4 bg-mint-50/50 rounded-xl border border-mint-100">
                <div>
                  <span class="font-medium text-gray-900">{{ sub.name }}</span>
                  <p *ngIf="sub.description" class="text-gray-500 text-xs mt-0.5">{{ sub.description }}</p>
                </div>
                <span class="font-bold text-terracotta text-lg">{{ sub.price }}</span>
              </div>
            </div>
          </div>

          <!-- Duration & Price -->
          <div class="flex flex-col sm:flex-row gap-4">
            <div *ngIf="selectedService.duration" class="flex-1 p-4 bg-gray-50 rounded-xl text-center">
              <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Czas trwania</p>
              <p class="font-semibold text-gray-900">{{ selectedService.duration }}</p>
            </div>
            <div *ngIf="!selectedService.subItems" class="flex-1 p-4 bg-beige-100 rounded-xl text-center">
              <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">Cena</p>
              <p class="text-2xl font-bold text-terracotta">
                {{ selectedService.price }}
                <span *ngIf="selectedService.price !== 'Do ustalenia'" class="text-sm text-gray-400 font-normal">zł</span>
              </p>
            </div>
          </div>

          <!-- CTA -->
          <a href="#kontakt" (click)="closeModal()"
             class="block w-full px-6 py-4 bg-terracotta text-white font-semibold rounded-xl text-center hover:bg-terracotta-600 hover:shadow-lg transition-all duration-300">
            Umów wizytę
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
    name: 'Trening EMS',
    description: 'Nowoczesna technologia treningowa wykorzystująca impulsy elektryczne do stymulacji mięśni.',
    detailedDescription: 'Trening EMS (Electrical Muscle Stimulation) to rewolucyjna metoda treningowa, która wykorzystuje impulsy elektryczne do jednoczesnej stymulacji wszystkich głównych grup mięśniowych. Podczas 30-minutowej sesji Twoje mięśnie wykonują tysiące skurczów, co odpowiada kilkugodzinnemu treningowi na siłowni. Technologia EMS jest bezpieczna, skuteczna i idealnie nadaje się zarówno dla osób rozpoczynających swoją przygodę z treningiem, jak i dla doświadczonych sportowców szukających intensywnego bodźca treningowego. Każdy trening jest indywidualnie dostosowany do Twojego poziomu zaawansowania i celów.',
    benefits: [
      'Wzmocnienie i ujędrnienie całego ciała w krótkim czasie',
      'Spalanie tkanki tłuszczowej i poprawa sylwetki',
      'Redukcja bólu pleców i poprawa postawy ciała',
      'Łagodny dla stawów — idealny przy kontuzjach',
      'Zwiększenie wydolności i siły mięśniowej',
      'Tylko 30 minut na jedną sesję treningową',
      'Indywidualnie dobrana intensywność impulsu',
    ],
    duration: '30 min',
    price: '90',
    icon: '⚡',
    isEms: true,
  };

  services: Service[] = [
    {
      name: 'Terapia ciała',
      description: 'Kompleksowa praca manualna, narzędziowa i ruchowa ukierunkowana na poprawę funkcjonowania organizmu.',
      detailedDescription: 'To kompleksowa praca manualna, narzędziowa i ruchowa ukierunkowana na poprawę funkcjonowania całego organizmu. Jej celem jest przywrócenie równowagi w ciele, poprawa mobilności, oddechu i swobody ruchu. To spotkanie, podczas którego pracujemy nad problemami nagromadzonymi często przez lata — zarówno na poziomie fizycznym, jak i emocjonalnym.',
      regularTherapy: [
        'wspiera przy bólach i napięciach kręgosłupa,',
        'pomaga zmniejszać bóle głowy i przewlekłe napięcia,',
        'poprawia mobilność stawów i elastyczność tkanek,',
        'wspiera prawidłowe wzorce oddechowe,',
        'redukuje przeciążenia i poczucie sztywności,',
        'działa całościowo — łącząc pracę z ciałem i świadomością, co sprzyja lepszemu samopoczuciu.',
      ],
      forWhom: 'Dla osób z bólami kręgosłupa, przewlekłymi napięciami, ograniczoną mobilnością, problemami oddechowymi oraz szukających holistycznego podejścia do ciała i lepszego samopoczucia.',
      benefits: [],
      duration: '50 min',
      price: '180',
      icon: '🧘',
    },
    {
      name: 'Terapia po zabiegach medycyny estetycznej i chirurgii plastycznej',
      description: 'Specjalistyczna terapia wspierająca regenerację po zabiegach estetycznych.',
      detailedDescription: 'Specjalistyczna terapia zaprojektowana z myślą o pacjentach po zabiegach medycyny estetycznej (liposukcja, lipotransfer, powiększanie piersi, plastyka brzucha i inne) oraz operacjach chirurgii plastycznej. Sesja obejmuje drenaż limfatyczny, pracę z tkankami, redukcję obrzęków i przyspieszenie gojenia. Terapia pomaga zminimalizować blizny, zmniejszyć dyskomfort pooperacyjny i przyspieszyć powrót do pełnej sprawności. Każdy zabieg jest delikatny i dostosowany do etapu rekonwalescencji.',
      benefits: [
        'Przyspieszenie regeneracji po zabiegu',
        'Redukcja obrzęków pooperacyjnych',
        'Drenaż limfatyczny wspierający gojenie',
        'Minimalizacja blizn pooperacyjnych',
        'Zmniejszenie dyskomfortu i bólu',
        'Poprawa elastyczności skóry w miejscu zabiegu',
      ],
      duration: '50 min',
      price: '200',
      icon: '✨',
    },
    {
      name: 'Masaże',
      description: 'Masaż indywidualnie dopasowany do Twoich potrzeb i oczekiwań.',
      detailedDescription: 'Masaż łączy różne techniki — głęboki, powięziowy, relaksacyjny i elementy pracy manualnej — dopasowane do aktualnych potrzeb ciała i oczekiwań klienta. Każda sesja rozpoczyna się krótką rozmową, w której rozmawiamy o tym, co czujesz i czego potrzebujesz. Dzięki temu masaż jest w pełni indywidualny — nie bazuje na wyuczonym schemacie ani jednym rodzaju technik powtarzanych mechanicznie. To ręce terapeuty i ciało klienta prowadzą masaż — dobierając techniki, siłę nacisku i tempo, aby ciało i umysł skorzystały jak najbardziej. Sesja może być zarówno głęboka i intensywna, jak i delikatna i relaksacyjna, przynosząc rozluźnienie, regenerację i lekkość w ruchu.',
      benefits: [
        'Rozluźnienie głębokich napięć mięśniowych',
        'Poprawa elastyczności i mobilności tkanek',
        'Redukcja stresu i poprawa samopoczucia',
        'Poprawa krążenia krwi i limfy',
        'Łagodzenie bólu głowy i migreny',
        'Wsparcie regeneracji po wysiłku fizycznym',
      ],
      duration: '50 min',
      price: '180',
      icon: '💆',
    },
    {
      name: 'Praca z blizną i obrzękami',
      description: 'Terapia manualna i narzędziowa blizn oraz obrzęków.',
      detailedDescription: 'Blizna to naturalny efekt procesu gojenia, jednak nie zawsze przebiega on w sposób optymalny. Niekiedy blizny mogą ograniczać ruchomość tkanek, powodować dyskomfort lub wpływać na estetykę. Podobnie obrzęki, pojawiające się po urazach czy zabiegach, mogą spowalniać regenerację i utrudniać powrót do pełnej sprawności. W Be Harmony stosuję techniki manualne oraz narzędziowe, które poprawiają ruchomość i elastyczność tkanek, wspierają prawidłowe układanie się blizny, zmniejszają uczucie napięcia, bólu czy ciągnięcia, przyspieszają redukcję obrzęków i poprawiają krążenie oraz korzystnie wpływają na wygląd i komfort w miejscu blizny. Terapia polecana jest osobom po operacjach, zabiegach lub urazach, a także po cesarskim cięciu.',
      benefits: [
        'Poprawa ruchomości i elastyczności tkanek',
        'Wsparcie prawidłowego układania się blizny',
        'Zmniejszenie uczucia napięcia, bólu czy ciągnięcia',
        'Przyspieszenie redukcji obrzęków i poprawa krążenia',
        'Korzystny wpływ na wygląd i komfort w miejscu blizny',
      ],
      duration: '50 min',
      price: '180/200',
      icon: '🩹',
    },
    {
      name: 'Terapia wisceralna',
      description: 'Delikatna, manualna praca w obrębie jamy brzusznej i klatki piersiowej.',
      detailedDescription: 'Terapia wisceralna to delikatna, manualna praca w obrębie jamy brzusznej i klatki piersiowej. Jej celem jest przywrócenie naturalnej ruchomości narządów wewnętrznych oraz tkanek, które je otaczają. Dzięki temu możliwe jest zmniejszenie napięć, poprawa krążenia i funkcjonowania układu trawiennego, a także wpływ na postawę i ogólne samopoczucie.',
      benefitsHeading: 'Korzyści terapii:',
      benefits: [
        'wsparcie pracy układu trawiennego (m.in. przy refluksie, SIBO, IBS, zaparciach, wzdęciach),',
        'redukcja napięć w obrębie brzucha i klatki piersiowej,',
        'poprawa postawy i zmniejszenie dolegliwości w obrębie dolnego odcinka kręgosłupa,',
        'złagodzenie dolegliwości związanych z bolesnymi miesiączkami,',
        'profilaktyczne wspieranie zdrowia i lepszego funkcjonowania organizmu.',
      ],
      forWhom: 'Dla osób zmagających się z problemami trawiennymi, prowadzących siedzący tryb życia, w trakcie rehabilitacji dolnego odcinka kręgosłupa, przy bolesnych miesiączkach, a także dla tych, którzy chcą zadbać o ciało w ramach profilaktyki zdrowotnej.',
      duration: '50 min',
      price: '200',
      icon: '🫀',
    },
    {
      name: 'HTR — Holistyczna Terapia Relaksacyjna',
      description: 'Autorska metoda wspierająca regenerację poprzez głęboki relaks i harmonizację układu nerwowego.',
      detailedDescription: 'HTR to autorska metoda wspierająca regenerację organizmu poprzez głęboki relaks i harmonizację układu nerwowego. To nie tylko chwila odprężenia — to intensywna i świadoma praca z układem nerwowym, która uruchamia naturalne mechanizmy samonaprawy ciała. Dzięki temu możliwe jest obniżenie poziomu stresu, napięcia i lęku, redukcja kortyzolu oraz poprawa nastroju i równowagi emocjonalnej. Regularne sesje wspierają też odzyskiwanie energii i wewnętrznej stabilności.',
      combinesSection: {
        heading: 'Holistyczna Terapia Relaksacyjna łączy w sobie:',
        items: [
          'aromaterapię — najwyższej jakości, w 100% naturalne olejki eteryczne wspierające układ nerwowy i wprowadzające w stan ukojenia,',
          'muzykoterapię — starannie dobraną muzykę, która sprzyja wyciszeniu i prowadzi ciało do głębokiego relaksu,',
          'elementy medycyny chińskiej — wspierające przepływ energii i równowagę organizmu,',
          'działanie ciepłem — rozluźniające tkanki i sprzyjające odprężeniu,',
          'różnorodne techniki relaksacyjne i regenerujące — wypracowane na bazie wieloletniego doświadczenia, praktyki oraz licznych szkoleń.',
        ],
      },
      benefitsHeading: 'Korzyści terapii:',
      benefits: [
        'głęboka regeneracja i praca z układem nerwowym,',
        'redukcja napięcia nerwowego i mięśniowego,',
        'poprawa jakości snu i zmniejszenie bezsenności,',
        'większa równowaga emocjonalna i lepsze samopoczucie,',
        'odzyskanie energii, spokoju i witalności.',
      ],
      forWhom: 'Dla osób przemęczonych, zestresowanych, z objawami napięcia nerwowego, bezsennością, spadkiem energii lub przeciążeniem układu nerwowego.',
      duration: '90 min',
      price: '380',
      icon: '🌿',
    },
    {
      name: 'Trening Funkcjonalny',
      description: 'Indywidualnie dobrany program ćwiczeń poprawiający siłę, koordynację i mobilność.',
      detailedDescription: 'Trening funkcjonalny w Be Harmony to indywidualnie dobrany program ćwiczeń, który poprawia siłę, koordynację, mobilność i ogólną sprawność w codziennym funkcjonowaniu. Ta forma aktywności oparta jest na naturalnych wzorcach ruchowych, skutecznie wzmacnia ciało, przygotowuje je do codziennych wyzwań i zmniejsza ryzyko kontuzji. Ćwiczenia angażują całe ciało, poprawiają stabilizację i uczą prawidłowej pracy mięśni podczas ruchu, co przekłada się na wszechstronne efekty w życiu codziennym i sporcie.',
      benefitsHeading: 'Korzyści treningu funkcjonalnego:',
      benefits: [
        'zwiększenie siły, wytrzymałości i sprawności ogólnej,',
        'poprawa koordynacji i zakresu ruchu,',
        'przygotowanie ciała do większej aktywności (np. narty, snowboard, maraton),',
        'wsparcie w powrocie do formy po urazach,',
        'profilaktyka przeciążeń i kontuzji.',
      ],
      forWhom: 'Dla osób wracających do formy po urazach, chcących poprawić swoją sprawność, wzmocnić ciało, zwiększyć mobilność lub przygotować się do wyzwań sportowych i rekreacyjnych.',
      whyBeHarmony: {
        heading: 'Dlaczego trening funkcjonalny w Be Harmony?',
        paragraphs: [
          'Sesje prowadzone są przez fizjoterapeutę i trenera przygotowania motorycznego z wieloletnim doświadczeniem w pracy ze sportowcami oraz osobami wracającymi do formy po urazach. Gwarantuje to indywidualne podejście, bezpieczeństwo oraz efektywny dobór ćwiczeń.',
          'Współpraca z norweską reprezentacją mężczyzn w siatkówce U20 i U21, praca w Szkole Mistrzostwa Sportowego oraz Siatkarskich Ośrodkach Szkolnych, a także ponad 15 lat kariery sportowej sprawiają, że każdy trening funkcjonalny w Be Harmony opiera się na sprawdzonych metodach, doświadczeniu i pasji do ruchu.',
        ],
      },
      duration: '45 min',
      price: '180',
      icon: '💪',
    },
  ];

  openModal(service: Service) {
    this.selectedService = service;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedService = null;
    document.body.style.overflow = '';
  }
}
