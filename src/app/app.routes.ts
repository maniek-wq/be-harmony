import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cennik', component: PricingPageComponent },
    { path: 'polityka-prywatnosci', component: PrivacyPolicyComponent },
    { path: '**', redirectTo: '' }
];
