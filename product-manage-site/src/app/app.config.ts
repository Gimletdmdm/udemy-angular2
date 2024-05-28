import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MaterialModule } from './material/material.module';
import { NgxTranslateModule } from './ngx-translate/ngx-translate.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(),
    importProvidersFrom(
      NgxTranslateModule,
      MaterialModule
    )
  ]
};
