import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoadingScreenComponent, NavbarComponent, FooterComponent, CookieBannerComponent],
  template: `
    <app-loading-screen *ngIf="showLoading" (loadingComplete)="onLoadingComplete()"></app-loading-screen>
    <div [class.opacity-0]="showLoading" class="transition-opacity duration-500">
      <app-navbar></app-navbar>
      <main>
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
      <app-cookie-banner></app-cookie-banner>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  showLoading = true;

  ngOnInit() { }

  onLoadingComplete() {
    this.showLoading = false;
  }
}
