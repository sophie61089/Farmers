import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { FarmerLoginComponent } from './farmer-login/farmer-login.component';
import { ProduceUploadComponent } from './produce-upload/produce-upload.component';
import { FarmerAccountComponent } from './farmer-account/farmer-account.component';
import { FarmerHomeComponent } from './farmer-home/farmer-home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FarmerOrdersComponent } from './farmer-orders/farmer-orders.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'order',component:OrderComponent},
  {path:'customeraccount',component:CustomerAccountComponent},
  {path:'farmerlogin',component:FarmerLoginComponent},
  {path:'produceupload',component:ProduceUploadComponent},
  {path:'farmeraccount',component:FarmerAccountComponent},
  {path:'farmerhome',component:FarmerHomeComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'farmerorders',component:FarmerOrdersComponent},
  {path:'customerlogin',component:CustomerLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
