import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { ServicesComponent } from '../../components/services/services.component';
import { TeamComponent } from '../../components/team/team.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { GoogleMapsComponent } from '../../components/google-maps/google-maps.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        HeroComponent,
        AboutComponent,
        ServicesComponent,
        TeamComponent,
        GalleryComponent,
        ContactFormComponent,
        GoogleMapsComponent,
    ],
    template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-services></app-services>
    <app-team></app-team>
    <app-gallery></app-gallery>
    <app-contact-form></app-contact-form>
    <app-google-maps></app-google-maps>
  `,
    styles: []
})
export class HomeComponent { }
