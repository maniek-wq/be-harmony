import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoadingScreenComponent, NavbarComponent, FooterComponent, CookieBannerComponent, BackToTopComponent],
  template: `
    <app-loading-screen *ngIf="showLoading"></app-loading-screen>
    <div [class.opacity-0]="showLoading" class="transition-opacity duration-500">
      <app-navbar></app-navbar>
      <main>
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
      <app-cookie-banner></app-cookie-banner>
      <app-back-to-top></app-back-to-top>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  @ViewChild(LoadingScreenComponent) loadingScreen!: LoadingScreenComponent;
  showLoading = true;

  ngOnInit() {
    // Wait for the window to fully load (including all images/assets)
    if (document.readyState === 'complete') {
      this.finishLoading();
    } else {
      window.addEventListener('load', () => this.finishLoading());
    }
  }

  private finishLoading() {
    if (this.loadingScreen) {
      this.loadingScreen.hide();
    }

    // Wait for the fade out animation of the loading screen to finish before removing it
    setTimeout(() => {
      this.showLoading = false;
    }, 850);
  }
}
