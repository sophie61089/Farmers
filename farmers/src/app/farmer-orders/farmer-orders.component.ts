import { Component, OnInit } from '@angular/core';
import { FarmerService } from '../farmer.service';
import { FarmerOrder } from '../farmer-order';
import { Farmer } from '../farmer';
import { FarmerOrderService } from '../farmer-order.service';

@Component({
  selector: 'app-farmer-orders',
  templateUrl: './farmer-orders.component.html',
  styleUrls: ['./farmer-orders.component.css']
})
export class FarmerOrdersComponent implements OnInit {

  farmerOrders:FarmerOrder[]
  farmer:Farmer

  constructor(private orderService:FarmerOrderService) {
    this.farmer=null
    this.farmerOrders=[]
   }

   addNewOrder(newOrder:FarmerOrder){
     this.orderService.addOrder(newOrder).subscribe(
       res =>{
         this.orderService.getOrders().subscribe(
           res => {this.farmerOrders = res}
         )
       }
     )
   }

  ngOnInit() {
  }

}
