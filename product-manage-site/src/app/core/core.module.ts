import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorMessagingComponent } from './components/error-messaging/error-messaging.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoadingComponent,
    ErrorMessagingComponent
  ],
  exports: [
    LoadingComponent,
    ErrorMessagingComponent
  ]
})
export class CoreModule { }
