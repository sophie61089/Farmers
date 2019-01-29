import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { OrderComponent } from './order/order.component';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { FarmerLoginComponent } from './farmer-login/farmer-login.component';
import { ProduceUploadComponent } from './produce-upload/produce-upload.component';
import { FarmerAccountComponent } from './farmer-account/farmer-account.component';
import { FarmerHomeComponent } from './farmer-home/farmer-home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FarmerOrdersComponent } from './farmer-orders/farmer-orders.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    OrderComponent,
    CustomerAccountComponent,
    FarmerLoginComponent,
    ProduceUploadComponent,
    FarmerAccountComponent,
    FarmerHomeComponent,
    ContactUsComponent,
    FarmerOrdersComponent,
    CustomerLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
