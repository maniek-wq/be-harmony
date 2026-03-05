import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'precios', component: PricingPageComponent },
    { path: 'politica-de-privacidad', component: PrivacyPolicyComponent },
    { path: '**', redirectTo: '' }
];
