import { Component, OnInit } from '@angular/core';
import { FarmerOrder } from '../farmer-order';
import { FarmerOrderService } from '../farmer-order.service';

@Component({
  selector: 'app-farmer-orders',
  templateUrl: './farmer-orders.component.html',
  styleUrls: ['./farmer-orders.component.css']
})
export class FarmerOrdersComponent implements OnInit {

  orders:FarmerOrder[]

  constructor(private ordersService:FarmerOrderService) { 
    this.orders=[]
  }

  deleteOrder(index:number){
    this.ordersService.deleteOrder(index).subscribe(
      res => {
        this.ordersService.getOrders().subscribe(
          res => {this.orders = res}
        )
      }
    )
  }

  ngOnInit() {
    this.ordersService.getOrders().subscribe(
      res => {this.orders = res}
    )
  }

}
