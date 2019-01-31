import { Component, OnInit } from '@angular/core';
import { VegStock } from '../veg-stock';
import { VegStockService } from '../veg-stock.service';
import { FarmerOrderService } from '../farmer-order.service';
import { FarmerOrder } from '../farmer-order';
import { Observable } from 'rxjs';
import { Farmer } from '../farmer';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-produce-upload',
  templateUrl: './produce-upload.component.html',
  styleUrls: ['./produce-upload.component.css']
})
export class ProduceUploadComponent implements OnInit {

  vegStock:VegStock[]
  farmerOrders:FarmerOrder[]
  farmer:Farmer

  constructor(
    private vegService:VegStockService,
    private orderService:FarmerOrderService,
    private farmerService:FarmerService
    ) {
      this.vegStock=[]
      this.farmerOrders=[]
    }

    addNewOrder(vegStockIndex:number, qtyadded:number){
      var vegType = this.vegStock[vegStockIndex]
      var newOrder = {} as FarmerOrder
      var savedOrder = {} as FarmerOrder

      newOrder.vegName = vegType.name
      newOrder.quantity = qtyadded
      newOrder.unitPrice = vegType.price

      this.orderService.addOrder(newOrder).subscribe( //add order to FarmerOrders DB
          res=>{savedOrder=res
            this.farmerService.addOrderToFarmer(this.farmer.farmerId, savedOrder.orderid).subscribe() 
          }
      )
      var VegId = vegType.id
      this.vegService.addStock(VegId,qtyadded).subscribe() //update stock list
    }

    log(i:number, q:number){
      console.log(i+" and "+q)
    }

  ngOnInit() {
    this.vegService.getVeg().subscribe(
      res => {this.vegStock = res}
    )
    this.farmer = JSON.parse(localStorage.getItem("farmer"))
  }

}
