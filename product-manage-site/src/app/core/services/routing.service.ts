import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UrlConst } from '../../pages/constants/url-const';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  router = inject(Router);


  navigate(path: string): void {
    this.router.navigate([UrlConst.SLASH + path]);
  }
}
