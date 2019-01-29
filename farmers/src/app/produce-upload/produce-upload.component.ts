import { Component, OnInit } from '@angular/core';
import { VegStock } from '../veg-stock';
import { VegStockService } from '../veg-stock.service';
import { FarmerOrderService } from '../farmer-order.service';
import { FarmerOrder } from '../farmer-order';

@Component({
  selector: 'app-produce-upload',
  templateUrl: './produce-upload.component.html',
  styleUrls: ['./produce-upload.component.css']
})
export class ProduceUploadComponent implements OnInit {

  veg:VegStock[]
  farmerOrders:FarmerOrder[]

  constructor(
    private vegService:VegStockService,
    private orderService:FarmerOrderService
    ) {
      this.veg=[]
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

    addStock(vegName:String, qtyAdded:number){
      
    }
  ngOnInit() {
    this.vegService.getVeg().subscribe(
      res => {this.veg = res}
    )
  }

}
