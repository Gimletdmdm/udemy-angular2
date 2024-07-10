import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CoreModule } from './core/core.module';
import { RoutingService } from './core/services/routing.service';
import { MaterialModule } from './material/material.module';
import { UrlConst } from './pages/constants/url-const';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MaterialModule,
    SharedModule,
    CoreModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  private routingService = inject(RoutingService);

  isSignInPage(): boolean {
    if (UrlConst.SLASH === this.routingService.router.url) {
      return true;
    }
    if (UrlConst.SLASH + UrlConst.PATH_SIGN_IN === this.routingService.router.url) {
      return true;
    }
    return false;
  }
}
