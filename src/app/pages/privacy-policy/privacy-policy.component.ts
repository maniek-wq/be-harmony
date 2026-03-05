import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-mint-50 pt-24 pb-20">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="mb-12">
          <a routerLink="/" class="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-600 transition-colors text-sm mb-6">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Volver a la página principal
          </a>
          <h1 class="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Política de privacidad y cookies
          </h1>
          <p class="text-gray-500 text-sm">Última actualización: {{ lastUpdated }}</p>
        </div>

        <!-- Content -->
        <div class="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-mint-100 space-y-8">
          <section *ngFor="let section of sections">
            <h2 class="font-display text-xl font-semibold text-gray-900 mb-4 text-terracotta">
              {{ section.title }}
            </h2>
            <div class="text-gray-600 text-sm leading-relaxed space-y-3">
              <p *ngFor="let paragraph of section.paragraphs">{{ paragraph }}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class PrivacyPolicyComponent {
  lastUpdated = '05.03.2026';

  sections = [
    {
      title: '1. Responsable del tratamiento de datos',
      paragraphs: [
        'El responsable del tratamiento de tus datos personales es Be Harmony — Natalia Matusz, con domicilio en la dirección del centro (pendiente de completar).',
        'Para cualquier consulta relacionada con la protección de datos personales, puedes contactarnos a través del correo electrónico: contacto@be-harmony.es.'
      ]
    },
    {
      title: '2. Datos recogidos',
      paragraphs: [
        'Recogemos los datos personales que nos proporcionas voluntariamente a través del formulario de contacto de la web: nombre y apellidos, dirección de correo electrónico, número de teléfono y contenido del mensaje.',
        'Además, durante tu visita a la web, recopilamos automáticamente información como tu dirección IP, tipo de navegador, tiempo de permanencia en la página y las subpáginas visitadas.'
      ]
    },
    {
      title: '3. Finalidad del tratamiento de datos',
      paragraphs: [
        'Tus datos personales se tratan con el fin de: responder a tus consultas enviadas a través del formulario de contacto, concertar citas en el centro, mejorar la calidad de nuestros servicios, así como con fines estadísticos y analíticos.'
      ]
    },
    {
      title: '4. Base legal del tratamiento',
      paragraphs: [
        'El tratamiento de datos se realiza sobre la base de: art. 6, apartado 1, letra a) del RGPD — tu consentimiento; art. 6, apartado 1, letra b) del RGPD — necesidad para la ejecución de un contrato o para la toma de medidas precontractuales; art. 6, apartado 1, letra f) del RGPD — interés legítimo del responsable.'
      ]
    },
    {
      title: '5. Cookies',
      paragraphs: [
        'Nuestro sitio web utiliza cookies. Son pequeños archivos de texto que se guardan en tu dispositivo para garantizar el correcto funcionamiento de la web.',
        'Utilizamos los siguientes tipos de cookies: necesarias — imprescindibles para el correcto funcionamiento de la web; analíticas — nos ayudan a entender cómo los visitantes utilizan la web; funcionales — recuerdan tus preferencias.',
        'Puedes modificar la configuración de cookies en tu navegador en cualquier momento, incluyendo bloquear su almacenamiento. Sin embargo, esto puede afectar a la disponibilidad de algunas funciones de la web.'
      ]
    },
    {
      title: '6. Período de conservación de datos',
      paragraphs: [
        'Tus datos personales se conservan durante el tiempo necesario para cumplir los fines para los que fueron recogidos, y posteriormente durante el período exigido por la legislación vigente o hasta la retirada del consentimiento.'
      ]
    },
    {
      title: '7. Derechos del usuario',
      paragraphs: [
        'Tienes derecho a: acceder a tus datos, rectificarlos, suprimirlos o limitar su tratamiento, a la portabilidad de datos, a oponerte al tratamiento y a retirar el consentimiento en cualquier momento.',
        'Para ejercer tus derechos, contacta con nosotros en: contacto@be-harmony.es.'
      ]
    },
    {
      title: '8. Cambios en la política de privacidad',
      paragraphs: [
        'Nos reservamos el derecho de realizar cambios en la presente política de privacidad. Cualquier cambio será comunicado en nuestro sitio web.'
      ]
    },
  ];
}
