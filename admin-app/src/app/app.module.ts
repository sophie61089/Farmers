import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { FarmersComponent } from './farmers/farmers.component';
import { CustomersComponent } from './customers/customers.component';
import { BoxesComponent } from './boxes/boxes.component';
import { FarmerOrdersComponent } from './farmer-orders/farmer-orders.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    FarmersComponent,
    CustomersComponent,
    BoxesComponent,
    FarmerOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
