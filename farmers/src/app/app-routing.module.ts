import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { FarmerLoginComponent } from './farmer-login/farmer-login.component';
import { ProduceUploadComponent } from './produce-upload/produce-upload.component';
import { FarmerAccountComponent } from './farmer-account/farmer-account.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'order',component:OrderComponent},
  {path:'customeraccount',component:CustomerAccountComponent},
  {path:'farmerlogin',component:FarmerLoginComponent},
  {path:'produceupload',component:ProduceUploadComponent},
  {path:'farmeraccount',component:FarmerAccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
