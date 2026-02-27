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
          <div (click)="openModal(emsService)" class="cursor-pointer relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
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
               class="group cursor-pointer bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-mint-100 hover:border-mint-300 hover:-translate-y-1">
            
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
             class="inline-flex items-center gap-2 px-8 py-4 bg-terracotta text-white font-semibold rounded-full hover:bg-terracotta-600 hover:shadow-xl transition-all duration-300 text-lg transform hover:-translate-y-0.5">
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

          <!-- Benefits -->
          <div *ngIf="selectedService.benefits.length > 0">
            <h3 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <svg class="w-5 h-5 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Korzyści
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
            <div *ngIf="!selectedService.subItems" class="flex-1 p-4 bg-terracotta/5 rounded-xl text-center">
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
    detailedDescription: 'Trening EMS (Electrical Muscle Stimulation) to rewolucyjna metoda treningowa, która wykorzystuje impulsy elektryczne do jednoczesnej stymulacji wszystkich głównych grup mięśniowych. Podczas 20-minutowej sesji Twoje mięśnie wykonują tysiące skurczów, co odpowiada kilkugodzinnemu treningowi na siłowni. Technologia EMS jest bezpieczna, skuteczna i idealnie nadaje się zarówno dla osób rozpoczynających swoją przygodę z treningiem, jak i dla doświadczonych sportowców szukających intensywnego bodźca treningowego. Każdy trening jest indywidualnie dostosowany do Twojego poziomu zaawansowania i celów.',
    benefits: [
      'Wzmocnienie i ujędrnienie całego ciała w krótkim czasie',
      'Spalanie tkanki tłuszczowej i poprawa sylwetki',
      'Redukcja bólu pleców i poprawa postawy ciała',
      'Łagodny dla stawów — idealny przy kontuzjach',
      'Zwiększenie wydolności i siły mięśniowej',
      'Tylko 20 minut na jedną sesję treningową',
      'Indywidualnie dobrana intensywność impulsu',
    ],
    duration: '20 min',
    price: '90',
    icon: '⚡',
    isEms: true,
  };

  services: Service[] = [
    {
      name: 'Terapia ciała',
      description: 'Kompleksowa praca z ciałem łącząca techniki fizjoterapeutyczne, masaż i ruch.',
      detailedDescription: 'Terapia ciała w Be Harmony to kompleksowe podejście do pracy z ciałem, które łączy wiedzę fizjoterapeutyczną z technikami manualnymi, masażem i ruchem. Podczas sesji terapeuta przeprowadza szczegółową ocenę funkcjonalną, identyfikuje zaburzenia w obrębie układu ruchu i opracowuje indywidualny plan terapii. Metody dobierane są pod kątem konkretnych potrzeb pacjenta — od technik tkanek miękkich, przez mobilizacje stawowe, po ćwiczenia korekcyjne. Celem jest nie tylko leczenie dolegliwości, ale także edukacja pacjenta i zapobieganie nawrotom.',
      benefits: [
        'Indywidualnie dobierany plan terapeutyczny',
        'Redukcja bólu i napięć mięśniowych',
        'Poprawa zakresu ruchu i elastyczności',
        'Korekcja postawy ciała',
        'Łączenie różnych technik terapeutycznych',
        'Edukacja pacjenta w zakresie autoterapii',
      ],
      duration: '60 min',
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
      duration: '60-90 min',
      price: '200',
      icon: '✨',
    },
    {
      name: 'Masaże',
      description: 'Profesjonalne masaże dostosowane do Twoich potrzeb.',
      detailedDescription: 'Oferujemy trzy rodzaje masaży profesjonalnych, z których każdy jest ukierunkowany na inne potrzeby ciała. Masaż głęboki pracuje na głębokich warstwach mięśni, rozluźniając przewlekłe napięcia i zrosty powięziowe. Masaż powięziowy skupia się na rozluźnieniu powięzi — tkanki łącznej otaczającej mięśnie, co przywraca naturalną elastyczność i swobodę ruchu. Masaż relaksacyjny to z kolei sesja odprężeniowa, która łagodzi stres, uspokaja układ nerwowy i przywraca równowagę ciała i umysłu. Każdy masaż jest indywidualnie dostosowany do Twoich potrzeb.',
      benefits: [
        'Rozluźnienie głębokich napięć mięśniowych',
        'Poprawa elastyczności i mobilności tkanek',
        'Redukcja stresu i poprawa samopoczucia',
        'Poprawa krążenia krwi i limfy',
        'Łagodzenie bólu głowy i migreny',
        'Wsparcie regeneracji po wysiłku fizycznym',
      ],
      duration: '60 min',
      price: '170/180',
      icon: '💆',
      subItems: [
        { name: 'Masaż głęboki', price: '170 zł', description: 'Praca na głębokich warstwach mięśni' },
        { name: 'Masaż powięziowy', price: '180 zł', description: 'Rozluźnianie powięzi i tkanki łącznej' },
        { name: 'Masaż relaksacyjny', price: '170 zł', description: 'Sesja odprężeniowa dla ciała i umysłu' },
      ]
    },
    {
      name: 'Praca z blizną i obrzękami',
      description: 'Terapia manualna blizn i redukcja obrzęków.',
      detailedDescription: 'Terapia manualna blizn pooperacyjnych, pourazowych oraz powstałych w wyniku cięcia cesarskiego. Praca z blizną polega na rozluźnieniu zrostów tkankowych, przywróceniu elastyczności i ruchomości tkanek w okolicy blizny. Terapia obrzęków obejmuje drenaż limfatyczny manualny oraz techniki wspierające odpływ limfy. Regularne sesje pomagają zmniejszyć dyskomfort, poprawić estetykę blizny i przywrócić comfortowy zakres ruchu. Im wcześniej rozpoczniesz terapię, tym lepsze efekty.',
      benefits: [
        'Rozluźnienie zrostów i zwłóknień bliznowatych',
        'Poprawa elastyczności i wyglądu blizny',
        'Redukcja obrzęków limfatycznych',
        'Przywrócenie ruchomości w okolicy blizny',
        'Zmniejszenie nadwrażliwości tkankowej',
        'Wsparcie procesu gojenia po operacjach',
      ],
      duration: '60-90 min',
      price: '180/200',
      icon: '🩹',
    },
    {
      name: 'Terapia wisceralna',
      description: 'Delikatna terapia manualna narządów wewnętrznych.',
      detailedDescription: 'Terapia wisceralna to delikatna, ale głęboko działająca metoda terapii manualnej, która koncentruje się na narządach wewnętrznych (trzewnych). Terapeuta za pomocą precyzyjnego dotyku pracuje nad przywróceniem prawidłowej mobilności i motylności narządów jamy brzusznej, klatki piersiowej i miednicy. Terapia pomaga w przypadku zaburzeń trawienia, problemów z układem moczowym, bólów brzucha, a także stanów pooperacyjnych. Wisceralna praca z ciałem wpływa korzystnie na cały organizm, łącząc układ trzewny z mięśniowo-szkieletowym.',
      benefits: [
        'Poprawa funkcjonowania narządów wewnętrznych',
        'Łagodzenie zaburzeń trawienia i wzdęć',
        'Redukcja napięć w jamie brzusznej',
        'Wsparcie po operacjach w obrębie brzucha',
        'Poprawa postawy poprzez oddziaływanie na powięź',
        'Holistyczne podejście do zdrowia ciała',
      ],
      duration: '60 min',
      price: '200',
      icon: '🫀',
    },
    {
      name: 'HTR — Holistyczna Terapia Relaksacyjna',
      description: 'Głęboka relaksacja łącząca techniki manualne, oddechowe i energetyczne.',
      detailedDescription: 'HTR (Holistyczna Terapia Relaksacyjna) to unikalna sesja terapeutyczna łącząca techniki manualne, pracę oddechową, elementy aromaterapii i techniki energetyczne. To kompleksowe doświadczenie, które adresuje potrzeby zarówno ciała, jak i umysłu. Podczas sesji terapeuta prowadzi Cię przez głęboką relaksację, uwalniając nagromadzone napięcia emocjonalne i fizyczne. HTR jest idealnym wyborem dla osób zmagających się z chronicznym stresem, bezsennością, stanami lękowymi lub po prostu potrzebujących głębokiego odpoczynku i regeneracji.',
      benefits: [
        'Głęboka relaksacja ciała i umysłu',
        'Redukcja chronicznego stresu i napięcia',
        'Poprawa jakości snu i rozluźnienie',
        'Uwolnienie emocji i napięć psychosomatycznych',
        'Wzmocnienie naturalnych mechanizmów regeneracji',
        'Przywrócenie równowagi energetycznej ciała',
        'Holistyczne podejście — ciało, umysł i duch',
      ],
      duration: '90-120 min',
      price: '380',
      icon: '🌿',
    },
    {
      name: 'Masaż Kobido',
      description: 'Japoński masaż liftingujący twarzy — naturalny lifting bez skalpela.',
      detailedDescription: 'Masaż Kobido to starożytna japońska technika masażu twarzy, sięgająca XV wieku, uznawana za „niechirurgiczny lifting twarzy". Podczas sesji terapeuta wykonuje ponad 47 różnych technik obejmujących szybkie, delikatne ruchy stymulujące głębokie warstwy skóry i mięśnie twarzy. Masaż pobudza produkcję kolagenu i elastyny, poprawia krążenie, obrys twarzy i napięcie skóry. Efekty widoczne są już po pierwszej sesji — twarz wygląda na odprężoną, odmłodzoną i promienną. Regularne sesje przynoszą trwałe efekty liftingujące.',
      benefits: [
        'Naturalny efekt liftingu bez zabiegów inwazyjnych',
        'Stymulacja produkcji kolagenu i elastyny',
        'Poprawa owalu i konturu twarzy',
        'Redukcja zmarszczek i linii mimicznych',
        'Poprawa kolorytu i blasku skóry',
        'Głębokie rozluźnienie mięśni mimicznych',
      ],
      duration: '60 min',
      price: 'Do ustalenia',
      icon: '🌸',
    },
    {
      name: 'Masaż Transbukalny',
      description: 'Innowacyjny masaż modelujący twarz od wewnątrz.',
      detailedDescription: 'Masaż transbukalny to innowacyjna technika masażu twarzy wykonywana zarówno od zewnątrz, jak i od wewnątrz jamy ustnej (w rękawiczkach). Dzięki temu terapeuta dociera do mięśni żwaczy, skroniowych i policzków, które są niedostępne przy tradycyjnym masażu. Technika ta jest niezwykle skuteczna w redukcji napięcia w okolicy szczęki (częstego przy bruksizmie), poprawie owalu twarzy, zmniejszeniu obrzęków i modelowaniu rysów. Efekt widoczny już po pierwszym zabiegu — twarz wygląda na szczuplejszą, bardziej wyrzeźbioną i zrelaksowaną.',
      benefits: [
        'Modelowanie i wyrzeźbienie rysów twarzy',
        'Redukcja napięcia mięśni żwaczy (bruksizm)',
        'Poprawa owalu twarzy i linii żuchwy',
        'Zmniejszenie obrzęków i podbródka',
        'Stymulacja krążenia w obrębie twarzy',
        'Efekt odmładzający widoczny po pierwszej sesji',
      ],
      duration: '45-60 min',
      price: 'Do ustalenia',
      icon: '💎',
    },
    {
      name: 'Trening Funkcjonalny',
      description: 'Indywidualny program treningowy dopasowany do Twoich celów.',
      detailedDescription: 'Trening funkcjonalny w Be Harmony to indywidualnie dobrany program ćwiczeń, który poprawia codzienną sprawność fizyczną, wydolność, siłę i koordynację ruchową. Trener przeprowadza wstępną ocenę funkcjonalną, identyfikuje ograniczenia i słabe ogniwa w łańcuchach ruchowych, a następnie projektuje program treningowy dopasowany do Twoich celów i poziomu zaawansowania. Treningi mogą obejmować ćwiczenia z masą własnego ciała, TRX, kettlebell, gumy oporowe i inne narzędzia. Idealny dla osób po rehabilitacji, chcących wrócić do aktywności lub poprawić swoją formę.',
      benefits: [
        'Indywidualnie dobrany plan treningowy',
        'Poprawa siły, wydolności i koordynacji',
        'Profilaktyka urazów i kontuzji',
        'Korekcja wzorców ruchowych',
        'Idealny po rehabilitacji jako kontynuacja',
        'Treningi z różnorodnym sprzętem',
      ],
      duration: '60 min',
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
