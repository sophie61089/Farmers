import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { FarmersComponent } from './farmers/farmers.component';
import { CustomersComponent } from './customers/customers.component';
import { FarmerOrdersComponent } from './farmer-orders/farmer-orders.component';
import { BoxesComponent } from './boxes/boxes.component';

const routes: Routes = [
  {path:'', component: StockComponent},
  {path:'farmers', component: FarmersComponent},
  {path:'customers', component: CustomersComponent},
  {path:'orders', component: FarmerOrdersComponent},
  {path:'boxes', component: BoxesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
