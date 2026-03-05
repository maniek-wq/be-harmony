import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { ServicesComponent } from '../../components/services/services.component';
import { TeamComponent } from '../../components/team/team.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { VoucherBannerComponent } from '../../components/voucher-banner/voucher-banner.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { GoogleMapsComponent } from '../../components/google-maps/google-maps.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    StatsComponent,
    TestimonialsComponent,
    ServicesComponent,
    TeamComponent,
    GalleryComponent,
    FaqComponent,
    VoucherBannerComponent,
    ContactFormComponent,
    GoogleMapsComponent,
  ],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-stats></app-stats>
    <app-services></app-services>
    <app-team></app-team>
    <app-gallery></app-gallery>
    <app-faq></app-faq>
    <app-voucher-banner></app-voucher-banner>
    <app-testimonials></app-testimonials>
    <app-contact-form></app-contact-form>
    <app-google-maps></app-google-maps>
  `,
  styles: []
})
export class HomeComponent { }
