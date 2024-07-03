import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
    ProductListingPageComponent
} from './components/product-listing-page/product-listing-page.component';
import {
    ProductRegisteringPageComponent
} from './components/product-registering-page/product-registering-page.component';
import {
    PurchaseHistoryListingPageComponent
} from './components/purchase-history-listing-page/purchase-history-listing-page.component';
import { SignInPageComponent } from './components/sign-in-page/sign-in-page.component';
import {
    StockRegisteringPageComponent
} from './components/stock-registering-page/stock-registering-page.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductListingPageComponent,
    ProductRegisteringPageComponent,
    PurchaseHistoryListingPageComponent,
    SignInPageComponent,
    StockRegisteringPageComponent
  ],
  exports: [
    ProductListingPageComponent,
    ProductRegisteringPageComponent,
    PurchaseHistoryListingPageComponent,
    SignInPageComponent,
    StockRegisteringPageComponent
  ]
})
export class PagesModule { }
