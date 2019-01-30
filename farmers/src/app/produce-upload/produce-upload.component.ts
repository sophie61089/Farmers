import { Component, OnInit } from '@angular/core';
import { VegStock } from '../veg-stock';
import { VegStockService } from '../veg-stock.service';
import { FarmerOrderService } from '../farmer-order.service';
import { FarmerOrder } from '../farmer-order';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produce-upload',
  templateUrl: './produce-upload.component.html',
  styleUrls: ['./produce-upload.component.css']
})
export class ProduceUploadComponent implements OnInit {

  vegStock:VegStock[]
  farmerOrders:FarmerOrder[]

  constructor(
    private vegService:VegStockService,
    private orderService:FarmerOrderService
    ) {
      this.vegStock=[]
      this.farmerOrders=[]
    }

    addNewOrder(vegStockIndex:number, qtyadded:number){
      var vegType = this.vegStock[vegStockIndex]
      var newOrder = {} as FarmerOrder

      newOrder.vegName = vegType.name
      newOrder.quantity = qtyadded
      newOrder.unitPrice = vegType.price

      this.orderService.addOrder(newOrder).subscribe( //add order to FarmerOrders DB
        res =>{
          this.orderService.getOrders().subscribe(
            res => {this.farmerOrders = res}
          )
        }
      )

      var VegId = vegType.id
      this.vegService.addStock(VegId,qtyadded) //update stock list

    }

    /*
    addNewOrder(VegId:number, qtyadded:number){
      this.newOrder.vegName = this.findName(VegId) //some issue reading vegtype - NEEDS FIXING
      this.newOrder.quantity = qtyadded
      this.newOrder.unitPrice = this.findPrice(VegId)

      this.orderService.addOrder(this.newOrder).subscribe( //add order to FarmerOrders DB
        res =>{
          this.orderService.getOrders().subscribe(
            res => {this.farmerOrders = res}
          )
        }
      )

      this.vegService.addStock(VegId,qtyadded) //update stock list

    }
    
    findPrice(id:number){
      var Veg:VegStock
      this.vegService.getVegById(id).subscribe(
        res => {Veg = res}
      )
      return Veg.price
    }

    findName(id:number){
      var Veg:VegStock
      this.vegService.getVegById(id).subscribe(
        res => {Veg = res}
      )
      return Veg.name
    }*/

  ngOnInit() {
    this.vegService.getVeg().subscribe(
      res => {this.vegStock = res}
    )
  }

}
